/// <reference path="../../types/atlas.d.ts"/>

import {
  Component,
  OnInit,
  Injector,
  AfterContentInit,
  AfterViewInit,
  Input,
  Output,
  ViewChild,
  ViewContainerRef,
  ElementRef,
  EventEmitter,
  ContentChild,
  TemplateRef,
  EmbeddedViewRef, 
  QueryList,
  ViewChildren} from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';
import { AtlasPopupDirective } from '../../directives/atlas-popup.directive';
import { AmFeature } from '../../models/am-feature';
import { LoadMapService } from '../../services/load-map.service';


export class LcuMapsAzureMapElementState {}

export class LcuMapsAzureMapContext extends LCUElementContext<LcuMapsAzureMapElementState> {}

export const SELECTOR_LCU_MAPS_AZURE_MAP_ELEMENT = 'lcu-maps-azure-map-element';

@Component({
  selector: SELECTOR_LCU_MAPS_AZURE_MAP_ELEMENT,
  templateUrl: './azure-map.component.html',
  styleUrls: ['./azure-map.component.scss']
})
export class LcuMapsAzureMapElementComponent extends LcuElementComponent<LcuMapsAzureMapContext> 
implements OnInit, AfterContentInit, AfterViewInit {
  //  Fields

  //  Properties
  // tslint:disable-next-line:no-input-rename
  @Input('initial-config')
  public InitialConfig: any;

  // tslint:disable-next-line:no-input-rename
  @Input('id')
  public ID: string;


  // tslint:disable-next-line:no-output-rename
  @Output('on-map-click')
  public OnMapClick: EventEmitter<atlas.data.Position>;


  // tslint:disable-next-line:no-output-rename
  @Output('loaded')
  public Loaded: EventEmitter<any>;

  @Output() test: EventEmitter<any>;

  @ViewChild('popupsContainer', {read: ViewContainerRef}) popupsContainer: ViewContainerRef;
  // @ViewChild('mapWrapper', {read: ElementRef}) mapWrapper: ElementRef;
  protected mapWrapper: ElementRef;
  @ViewChildren(LcuMapsAzureMapElementComponent) childrenComponent: QueryList<LcuMapsAzureMapElementComponent>;

  /**
   * For create and control popup
   * To Inject into ng-template in parent
   */
  @ContentChild(AtlasPopupDirective, {read: TemplateRef}) popupTemplate: TemplateRef<any>;

  public popupView: EmbeddedViewRef<any>;
  public popupAtlas: atlas.Popup;

  public map: atlas.Map;
  private customPins: Array<any> = [];
  public features: AmFeature[] = []; // Array of ours points to add on map
  private pointsArray: atlas.data.Feature[] = [];
  private cssArray: string[] = [];

  //  Constructors
  constructor(protected injector: Injector, protected mapService: LoadMapService) {
    super(injector);

    this.OnMapClick = new EventEmitter<atlas.data.Position>();
    this.Loaded = new EventEmitter();
    this.test = new EventEmitter();
  }

  //  Life Cycle
  public ngOnInit(): void {
    super.ngOnInit();
  }

  public ngAfterContentInit(): void {
    this.createMap(this.ID, this.InitialConfig); // Initial map
    this.startMapClickListener(); // Start emitter
  }

  public ngAfterViewInit(): void {
    this.emitLoaded();
    this.test.emit('test');

    this.childrenComponent.changes.subscribe((comps: QueryList<LcuMapsAzureMapElementComponent>) => {
      debugger;
    });
  }

  
  //  API Methods

  //  Helpers
  public createMap(id: string, config: any): void {
    try {
      if (!this.mapWrapper) {
        return;
      }
      this.mapWrapper.nativeElement.setAttribute('id', id);
      this.map = new atlas.Map(id, config); // Init map box
      console.log('Map was created!', this.map);
    } catch (e) {
      console.log('CHECK YOUR CONFIG!', e);
    }
  }

  protected emitLoaded(): void {
    if (this.map) {
      if (!this.Loaded) {
        this.Loaded = new EventEmitter();
      }
      this.Loaded.emit(true);
    } else {
      setTimeout(this.emitLoaded, 100);
    }
  }

  protected changeMapCamera(options: CameraOptions & AnimationOptions): void {
    this.map.setCamera(options);
  }

  protected changeMapStyle(options: StyleOptions): void {
    this.map.setStyle(options);
  }

  protected changeUserInteraction(options: UserInteractionOptions): void {
    this.map.setUserInteraction(options);
  }

  /**
   * Founding all unique layers from features Array
   * @param AmFeature[] features
   * @returns string[]
   */
  protected findUniqueLayers(features: AmFeature[]): string[] {
    const allLayers = features.map(it => it.Layer);
    return Array.from(new Set(allLayers));
  }

  protected startMapClickListener(): void {
    if (!this.map) {
      return;
    }
    this.map.addEventListener('click', (e: any) => {
      this.OnMapClick.emit(e.position);
      // On click you emit geo position
    });
  }

  /**
   * Creating popUpContainer and injected to parent Template
   * @param context
   */
  protected createComponent(context: any): void {
    if (this.popupView) {
      this.popupView.destroy();
    }
    this.popupView = this.popupsContainer.createEmbeddedView(this.popupTemplate, context);
  }

  protected addItem(id: any, loc: any, clas: any): void {
    let customHTML;
    const idItem = clas + id;
    const pos = new atlas.data.Position(loc.lnt, loc.lng);
    this.cssArray.push(idItem);  // Saving existing HTML elements

    customHTML = document.createElement('div');
    customHTML.setAttribute('id', idItem);
    customHTML.setAttribute('class', clas);

    this.map.addHtml(customHTML, pos); // add to map
  }

  /**
   * Drawin point on the map as pins
   * @Incjet createPopups()
   * @param  features
   */
  protected createPoints(features: AmFeature[]): void {
    if (features.length === 0) {
      console.log('No data available');
      return;
    }

    for (const item of features) {
      this.map.addPins([item.AtlasFeature], item.PinConfig);
      if (item.AtlasFeature.properties.cssClass) {
        this.addItem(item.DataElement.id, item.DataElement.localization, item.AtlasFeature.properties.cssClass);
        this.customPins.push(item.AtlasFeature.properties.cssClass);
      }
      this.pointsArray.push(item.AtlasFeature);
    }
    this.createPopups(features);
  }


  /**
   * Created popUps for all features by type of layers
   * Adding event on 'mouseover'
   * @param features
   */
  protected createPopups(features: AmFeature[]): void {
    for (const item of this.findUniqueLayers(features)) {
      if (this.popupTemplate) {
        this.map.addEventListener('mouseover', item, (e: any) => {
          const amFeature: AmFeature = features.find(it => it.DataElement.name === e.features[0].properties.name);
          this.createComponent({
            /**
             * sent to template variable
             * raw data from input
             */
            DataElement: amFeature.DataElement
          });
          this.popupAtlas.setPopupOptions({
            position: e.features[0].geometry.coordinates,
            content: document.getElementById(`popupWrapper`),
          });
          this.popupAtlas.open(this.map);
        });
      }
    }
  }

  protected updatePoints(features: AmFeature[]): void {
    this.map.removeLayers(this.findUniqueLayers(features));
    if (this.cssArray.length) {
      this.cssArray.forEach(value => {
        (document.querySelectorAll(`#${value}`) as any).forEach((it: any) => it.remove());
        this.map.removeHtml(value);
      });
      this.cssArray = [];
    }
    this.createPoints(features);
  }

  removeMap() {
    this.map.remove();
  }
}
