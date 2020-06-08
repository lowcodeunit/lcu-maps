/// <reference path="../../types/atlas.d.ts" />
import { OnInit, Injector, AfterContentInit, AfterViewInit, ViewContainerRef, ElementRef, EventEmitter, TemplateRef, EmbeddedViewRef, QueryList } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';
import { AmFeature } from '../../models/am-feature';
import { LoadMapService } from '../../services/load-map.service';
export declare class LcuMapsAzureMapElementState {
}
export declare class LcuMapsAzureMapContext extends LCUElementContext<LcuMapsAzureMapElementState> {
}
export declare const SELECTOR_LCU_MAPS_AZURE_MAP_ELEMENT = "lcu-maps-azure-map-element";
export declare class LcuMapsAzureMapElementComponent extends LcuElementComponent<LcuMapsAzureMapContext> implements OnInit, AfterContentInit, AfterViewInit {
    protected injector: Injector;
    protected mapService: LoadMapService;
    InitialConfig: any;
    ID: string;
    OnMapClick: EventEmitter<atlas.data.Position>;
    Loaded: EventEmitter<any>;
    popupsContainer: ViewContainerRef;
    protected mapWrapper: ElementRef;
    childrenComponent: QueryList<LcuMapsAzureMapElementComponent>;
    /**
     * For create and control popup
     * To Inject into ng-template in parent
     */
    popupTemplate: TemplateRef<any>;
    popupView: EmbeddedViewRef<any>;
    popupAtlas: atlas.Popup;
    map: atlas.Map;
    private customPins;
    features: AmFeature[];
    private pointsArray;
    private cssArray;
    constructor(injector: Injector, mapService: LoadMapService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    createMap(id: string, config: any): void;
    protected emitLoaded(): void;
    protected changeMapCamera(options: CameraOptions & AnimationOptions): void;
    protected changeMapStyle(options: StyleOptions): void;
    protected changeUserInteraction(options: UserInteractionOptions): void;
    /**
     * Founding all unique layers from features Array
     * @param AmFeature[] features
     * @returns string[]
     */
    protected findUniqueLayers(features: AmFeature[]): string[];
    protected startMapClickListener(): void;
    /**
     * Creating popUpContainer and injected to parent Template
     * @param context
     */
    protected createComponent(context: any): void;
    protected addItem(id: any, loc: any, clas: any): void;
    /**
     * Drawin point on the map as pins
     * @Incjet createPopups()
     * @param  features
     */
    protected createPoints(features: AmFeature[]): void;
    /**
     * Created popUps for all features by type of layers
     * Adding event on 'mouseover'
     * @param features
     */
    protected createPopups(features: AmFeature[]): void;
    protected updatePoints(features: AmFeature[]): void;
    removeMap(): void;
}
