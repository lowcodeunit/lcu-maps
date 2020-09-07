/// <reference path="../../types/atlas.d.ts"/>
import { Component, OnInit, Injector, AfterContentInit, AfterViewInit, Input, Output, ViewChild, ViewContainerRef, ElementRef, EventEmitter, ContentChild, TemplateRef, EmbeddedViewRef, QueryList, ViewChildren } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';
import { AtlasPopupDirective } from '../../directives/atlas-popup.directive';
import { LoadMapService } from '../../services/load-map.service';
export class LcuMapsAzureMapElementState {
}
export class LcuMapsAzureMapContext extends LCUElementContext {
}
export const SELECTOR_LCU_MAPS_AZURE_MAP_ELEMENT = 'lcu-maps-azure-map-element';
export class LcuMapsAzureMapElementComponent extends LcuElementComponent {
    //  Constructors
    constructor(injector, mapService) {
        super(injector);
        this.injector = injector;
        this.mapService = mapService;
        this.customPins = [];
        this.features = []; // Array of ours points to add on map
        this.pointsArray = [];
        this.cssArray = [];
        this.OnMapClick = new EventEmitter();
        this.Loaded = new EventEmitter();
    }
    //  Life Cycle
    ngOnInit() {
        super.ngOnInit();
    }
    ngAfterContentInit() {
        // this.createMap(this.ID, this.InitialConfig); // Initial map
        // this.startMapClickListener(); // Start emitter
    }
    ngAfterViewInit() {
        this.childrenComponent.forEach((instance) => {
            this.mapWrapper = instance;
        });
        this.createMap(this.ID, this.InitialConfig); // Initial map
        this.startMapClickListener(); // Start emitter
        this.emitLoaded();
        // this.childrenComponent.changes.subscribe((comps: QueryList<LcuMapsAzureMapElementComponent>) => {
        //   debugger;
        // });
    }
    //  API Methods
    //  Helpers
    createMap(id, config) {
        try {
            if (!this.mapWrapper) {
                return;
            }
            this.mapWrapper.nativeElement.setAttribute('id', id);
            this.map = new atlas.Map(id, config); // Init map box
            console.log('Map was created!', this.map);
        }
        catch (e) {
            console.error('CHECK YOUR CONFIG!', e);
        }
    }
    emitLoaded() {
        if (this.map) {
            if (!this.Loaded) {
                this.Loaded = new EventEmitter();
            }
            this.Loaded.emit(true);
        }
        else {
            setTimeout(this.emitLoaded, 100);
        }
    }
    changeMapCamera(options) {
        this.map.setCamera(options);
    }
    changeMapStyle(options) {
        this.map.setStyle(options);
    }
    changeUserInteraction(options) {
        this.map.setUserInteraction(options);
    }
    /**
     * Founding all unique layers from features Array
     * @param AmFeature[] features
     * @returns string[]
     */
    findUniqueLayers(features) {
        const allLayers = features.map(it => it.Layer);
        return Array.from(new Set(allLayers));
    }
    startMapClickListener() {
        if (!this.map) {
            return;
        }
        this.map.addEventListener('click', (e) => {
            this.OnMapClick.emit(e.position);
            // On click you emit geo position
        });
    }
    /**
     * Creating popUpContainer and injected to parent Template
     * @param context
     */
    createComponent(context) {
        if (this.popupView) {
            this.popupView.destroy();
        }
        this.popupView = this.popupsContainer.createEmbeddedView(this.popupTemplate, context);
    }
    addItem(id, loc, clas) {
        let customHTML;
        const idItem = clas + id;
        const pos = new atlas.data.Position(loc.lnt, loc.lng);
        this.cssArray.push(idItem); // Saving existing HTML elements
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
    createPoints(features) {
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
    createPopups(features) {
        for (const item of this.findUniqueLayers(features)) {
            if (this.popupTemplate) {
                this.map.addEventListener('mouseover', item, (e) => {
                    const amFeature = features.find(it => it.DataElement.name === e.features[0].properties.name);
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
    updatePoints(features) {
        this.map.removeLayers(this.findUniqueLayers(features));
        if (this.cssArray.length) {
            this.cssArray.forEach(value => {
                document.querySelectorAll(`#${value}`).forEach((it) => it.remove());
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
LcuMapsAzureMapElementComponent.ctorParameters = () => [
    { type: Injector },
    { type: LoadMapService }
];
LcuMapsAzureMapElementComponent.decorators = [
    { type: Component, args: [{
                selector: SELECTOR_LCU_MAPS_AZURE_MAP_ELEMENT,
                template: "<div #mapWrapper class=\"atlas-map\"></div>\r\n\r\n<div id=\"popupWrapper\">\r\n  <div #popupsContainer>\r\n  </div>\r\n</div>",
                styles: [".atlas-map{position:relative;width:100%;height:100%}"]
            },] }
];
LcuMapsAzureMapElementComponent.ctorParameters = () => [
    { type: Injector },
    { type: LoadMapService }
];
LcuMapsAzureMapElementComponent.propDecorators = {
    InitialConfig: [{ type: Input, args: ['initial-config',] }],
    ID: [{ type: Input, args: ['id',] }],
    OnMapClick: [{ type: Output, args: ['on-map-click',] }],
    Loaded: [{ type: Output, args: ['loaded',] }],
    popupsContainer: [{ type: ViewChild, args: ['popupsContainer', { read: ViewContainerRef },] }],
    childrenComponent: [{ type: ViewChildren, args: ['mapWrapper',] }],
    popupTemplate: [{ type: ContentChild, args: [AtlasPopupDirective, { read: TemplateRef },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXp1cmUtbWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bsb3djb2RldW5pdC9sY3UtbWFwcy1jb21tb24vIiwic291cmNlcyI6WyJsaWIvZWxlbWVudHMvYXp1cmUtbWFwL2F6dXJlLW1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOENBQThDO0FBRTlDLE9BQU8sRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFFBQVEsRUFDUixnQkFBZ0IsRUFDaEIsYUFBYSxFQUNiLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULGdCQUFnQixFQUNoQixVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixXQUFXLEVBQ1gsZUFBZSxFQUNmLFNBQVMsRUFDVCxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRTdFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUdqRSxNQUFNLE9BQU8sMkJBQTJCO0NBQUc7QUFFM0MsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGlCQUE4QztDQUFHO0FBRTdGLE1BQU0sQ0FBQyxNQUFNLG1DQUFtQyxHQUFHLDRCQUE0QixDQUFDO0FBT2hGLE1BQU0sT0FBTywrQkFBZ0MsU0FBUSxtQkFBMkM7SUEyQzlGLGdCQUFnQjtJQUNoQixZQUFzQixRQUFrQixFQUFZLFVBQTBCO1FBQzVFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQURJLGFBQVEsR0FBUixRQUFRLENBQVU7UUFBWSxlQUFVLEdBQVYsVUFBVSxDQUFnQjtRQU50RSxlQUFVLEdBQWUsRUFBRSxDQUFDO1FBQzdCLGFBQVEsR0FBZ0IsRUFBRSxDQUFDLENBQUMscUNBQXFDO1FBQ2hFLGdCQUFXLEdBQXlCLEVBQUUsQ0FBQztRQUN2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SUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7WUFsTCtCLFFBQVE7WUFBd0IsY0FBYzs7O1lBakQvRSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztnQkFDN0MsMElBQXlDOzthQUUxQzs7O1lBOUJDLFFBQVE7WUFpQkQsY0FBYzs7OzRCQW9CcEIsS0FBSyxTQUFDLGdCQUFnQjtpQkFJdEIsS0FBSyxTQUFDLElBQUk7eUJBS1YsTUFBTSxTQUFDLGNBQWM7cUJBS3JCLE1BQU0sU0FBQyxRQUFROzhCQUdmLFNBQVMsU0FBQyxpQkFBaUIsRUFBRSxFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBQztnQ0FHckQsWUFBWSxTQUFDLFlBQVk7NEJBTXpCLFlBQVksU0FBQyxtQkFBbUIsRUFBRSxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwZXMvYXRsYXMuZC50c1wiLz5cclxuXHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBJbmplY3RvcixcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBFbWJlZGRlZFZpZXdSZWYsIFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBWaWV3Q2hpbGRyZW59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMQ1VFbGVtZW50Q29udGV4dCwgTGN1RWxlbWVudENvbXBvbmVudCB9IGZyb20gJ0BsY3UvY29tbW9uJztcclxuaW1wb3J0IHsgQXRsYXNQb3B1cERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvYXRsYXMtcG9wdXAuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQW1GZWF0dXJlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FtLWZlYXR1cmUnO1xyXG5pbXBvcnQgeyBMb2FkTWFwU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xvYWQtbWFwLnNlcnZpY2UnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBMY3VNYXBzQXp1cmVNYXBFbGVtZW50U3RhdGUge31cclxuXHJcbmV4cG9ydCBjbGFzcyBMY3VNYXBzQXp1cmVNYXBDb250ZXh0IGV4dGVuZHMgTENVRWxlbWVudENvbnRleHQ8TGN1TWFwc0F6dXJlTWFwRWxlbWVudFN0YXRlPiB7fVxyXG5cclxuZXhwb3J0IGNvbnN0IFNFTEVDVE9SX0xDVV9NQVBTX0FaVVJFX01BUF9FTEVNRU5UID0gJ2xjdS1tYXBzLWF6dXJlLW1hcC1lbGVtZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBTRUxFQ1RPUl9MQ1VfTUFQU19BWlVSRV9NQVBfRUxFTUVOVCxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXp1cmUtbWFwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9henVyZS1tYXAuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGN1TWFwc0F6dXJlTWFwRWxlbWVudENvbXBvbmVudCBleHRlbmRzIExjdUVsZW1lbnRDb21wb25lbnQ8TGN1TWFwc0F6dXJlTWFwQ29udGV4dD4gXHJcbmltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0IHtcclxuICAvLyAgRmllbGRzXHJcblxyXG4gIC8vICBQcm9wZXJ0aWVzXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxyXG4gIEBJbnB1dCgnaW5pdGlhbC1jb25maWcnKVxyXG4gIHB1YmxpYyBJbml0aWFsQ29uZmlnOiBhbnk7XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcclxuICBASW5wdXQoJ2lkJylcclxuICBwdWJsaWMgSUQ6IHN0cmluZztcclxuXHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1vdXRwdXQtcmVuYW1lXHJcbiAgQE91dHB1dCgnb24tbWFwLWNsaWNrJylcclxuICBwdWJsaWMgT25NYXBDbGljazogRXZlbnRFbWl0dGVyPGF0bGFzLmRhdGEuUG9zaXRpb24+O1xyXG5cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1yZW5hbWVcclxuICBAT3V0cHV0KCdsb2FkZWQnKVxyXG4gIHB1YmxpYyBMb2FkZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICBAVmlld0NoaWxkKCdwb3B1cHNDb250YWluZXInLCB7cmVhZDogVmlld0NvbnRhaW5lclJlZn0pIHBvcHVwc0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcclxuICAvLyBAVmlld0NoaWxkKCdtYXBXcmFwcGVyJywge3JlYWQ6IEVsZW1lbnRSZWZ9KSBtYXBXcmFwcGVyOiBFbGVtZW50UmVmO1xyXG4gIHByb3RlY3RlZCBtYXBXcmFwcGVyOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGRyZW4oJ21hcFdyYXBwZXInKSBjaGlsZHJlbkNvbXBvbmVudDogUXVlcnlMaXN0PExjdU1hcHNBenVyZU1hcEVsZW1lbnRDb21wb25lbnQ+O1xyXG5cclxuICAvKipcclxuICAgKiBGb3IgY3JlYXRlIGFuZCBjb250cm9sIHBvcHVwXHJcbiAgICogVG8gSW5qZWN0IGludG8gbmctdGVtcGxhdGUgaW4gcGFyZW50XHJcbiAgICovXHJcbiAgQENvbnRlbnRDaGlsZChBdGxhc1BvcHVwRGlyZWN0aXZlLCB7cmVhZDogVGVtcGxhdGVSZWZ9KSBwb3B1cFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBwdWJsaWMgcG9wdXBWaWV3OiBFbWJlZGRlZFZpZXdSZWY8YW55PjtcclxuICBwdWJsaWMgcG9wdXBBdGxhczogYXRsYXMuUG9wdXA7XHJcblxyXG4gIHB1YmxpYyBtYXA6IGF0bGFzLk1hcDtcclxuICBwcml2YXRlIGN1c3RvbVBpbnM6IEFycmF5PGFueT4gPSBbXTtcclxuICBwdWJsaWMgZmVhdHVyZXM6IEFtRmVhdHVyZVtdID0gW107IC8vIEFycmF5IG9mIG91cnMgcG9pbnRzIHRvIGFkZCBvbiBtYXBcclxuICBwcml2YXRlIHBvaW50c0FycmF5OiBhdGxhcy5kYXRhLkZlYXR1cmVbXSA9IFtdO1xyXG4gIHByaXZhdGUgY3NzQXJyYXk6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIC8vICBDb25zdHJ1Y3RvcnNcclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yLCBwcm90ZWN0ZWQgbWFwU2VydmljZTogTG9hZE1hcFNlcnZpY2UpIHtcclxuICAgIHN1cGVyKGluamVjdG9yKTtcclxuXHJcbiAgICB0aGlzLk9uTWFwQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGF0bGFzLmRhdGEuUG9zaXRpb24+KCk7XHJcbiAgICB0aGlzLkxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICB9XHJcblxyXG4gIC8vICBMaWZlIEN5Y2xlXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdPbkluaXQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICAvLyB0aGlzLmNyZWF0ZU1hcCh0aGlzLklELCB0aGlzLkluaXRpYWxDb25maWcpOyAvLyBJbml0aWFsIG1hcFxyXG4gICAgLy8gdGhpcy5zdGFydE1hcENsaWNrTGlzdGVuZXIoKTsgLy8gU3RhcnQgZW1pdHRlclxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hpbGRyZW5Db21wb25lbnQuZm9yRWFjaCgoaW5zdGFuY2U6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLm1hcFdyYXBwZXIgPSBpbnN0YW5jZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlTWFwKHRoaXMuSUQsIHRoaXMuSW5pdGlhbENvbmZpZyk7IC8vIEluaXRpYWwgbWFwXHJcbiAgICB0aGlzLnN0YXJ0TWFwQ2xpY2tMaXN0ZW5lcigpOyAvLyBTdGFydCBlbWl0dGVyXHJcbiAgICB0aGlzLmVtaXRMb2FkZWQoKTtcclxuICAgIC8vIHRoaXMuY2hpbGRyZW5Db21wb25lbnQuY2hhbmdlcy5zdWJzY3JpYmUoKGNvbXBzOiBRdWVyeUxpc3Q8TGN1TWFwc0F6dXJlTWFwRWxlbWVudENvbXBvbmVudD4pID0+IHtcclxuICAgIC8vICAgZGVidWdnZXI7XHJcbiAgICAvLyB9KTtcclxuICB9XHJcblxyXG4gIFxyXG4gIC8vICBBUEkgTWV0aG9kc1xyXG5cclxuICAvLyAgSGVscGVyc1xyXG4gIHB1YmxpYyBjcmVhdGVNYXAoaWQ6IHN0cmluZywgY29uZmlnOiBhbnkpOiB2b2lkIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghdGhpcy5tYXBXcmFwcGVyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubWFwV3JhcHBlci5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XHJcbiAgICAgIHRoaXMubWFwID0gbmV3IGF0bGFzLk1hcChpZCwgY29uZmlnKTsgLy8gSW5pdCBtYXAgYm94XHJcbiAgICAgIGNvbnNvbGUubG9nKCdNYXAgd2FzIGNyZWF0ZWQhJywgdGhpcy5tYXApO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdDSEVDSyBZT1VSIENPTkZJRyEnLCBlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBlbWl0TG9hZGVkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubWFwKSB7XHJcbiAgICAgIGlmICghdGhpcy5Mb2FkZWQpIHtcclxuICAgICAgICB0aGlzLkxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLkxvYWRlZC5lbWl0KHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGltZW91dCh0aGlzLmVtaXRMb2FkZWQsIDEwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgY2hhbmdlTWFwQ2FtZXJhKG9wdGlvbnM6IENhbWVyYU9wdGlvbnMgJiBBbmltYXRpb25PcHRpb25zKTogdm9pZCB7XHJcbiAgICB0aGlzLm1hcC5zZXRDYW1lcmEob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgY2hhbmdlTWFwU3R5bGUob3B0aW9uczogU3R5bGVPcHRpb25zKTogdm9pZCB7XHJcbiAgICB0aGlzLm1hcC5zZXRTdHlsZShvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjaGFuZ2VVc2VySW50ZXJhY3Rpb24ob3B0aW9uczogVXNlckludGVyYWN0aW9uT3B0aW9ucyk6IHZvaWQge1xyXG4gICAgdGhpcy5tYXAuc2V0VXNlckludGVyYWN0aW9uKG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRm91bmRpbmcgYWxsIHVuaXF1ZSBsYXllcnMgZnJvbSBmZWF0dXJlcyBBcnJheVxyXG4gICAqIEBwYXJhbSBBbUZlYXR1cmVbXSBmZWF0dXJlc1xyXG4gICAqIEByZXR1cm5zIHN0cmluZ1tdXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGZpbmRVbmlxdWVMYXllcnMoZmVhdHVyZXM6IEFtRmVhdHVyZVtdKTogc3RyaW5nW10ge1xyXG4gICAgY29uc3QgYWxsTGF5ZXJzID0gZmVhdHVyZXMubWFwKGl0ID0+IGl0LkxheWVyKTtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoYWxsTGF5ZXJzKSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc3RhcnRNYXBDbGlja0xpc3RlbmVyKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm1hcCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLm1hcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5Pbk1hcENsaWNrLmVtaXQoZS5wb3NpdGlvbik7XHJcbiAgICAgIC8vIE9uIGNsaWNrIHlvdSBlbWl0IGdlbyBwb3NpdGlvblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGluZyBwb3BVcENvbnRhaW5lciBhbmQgaW5qZWN0ZWQgdG8gcGFyZW50IFRlbXBsYXRlXHJcbiAgICogQHBhcmFtIGNvbnRleHRcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgY3JlYXRlQ29tcG9uZW50KGNvbnRleHQ6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucG9wdXBWaWV3KSB7XHJcbiAgICAgIHRoaXMucG9wdXBWaWV3LmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIHRoaXMucG9wdXBWaWV3ID0gdGhpcy5wb3B1cHNDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMucG9wdXBUZW1wbGF0ZSwgY29udGV4dCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgYWRkSXRlbShpZDogYW55LCBsb2M6IGFueSwgY2xhczogYW55KTogdm9pZCB7XHJcbiAgICBsZXQgY3VzdG9tSFRNTDtcclxuICAgIGNvbnN0IGlkSXRlbSA9IGNsYXMgKyBpZDtcclxuICAgIGNvbnN0IHBvcyA9IG5ldyBhdGxhcy5kYXRhLlBvc2l0aW9uKGxvYy5sbnQsIGxvYy5sbmcpO1xyXG4gICAgdGhpcy5jc3NBcnJheS5wdXNoKGlkSXRlbSk7ICAvLyBTYXZpbmcgZXhpc3RpbmcgSFRNTCBlbGVtZW50c1xyXG5cclxuICAgIGN1c3RvbUhUTUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGN1c3RvbUhUTUwuc2V0QXR0cmlidXRlKCdpZCcsIGlkSXRlbSk7XHJcbiAgICBjdXN0b21IVE1MLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzKTtcclxuXHJcbiAgICB0aGlzLm1hcC5hZGRIdG1sKGN1c3RvbUhUTUwsIHBvcyk7IC8vIGFkZCB0byBtYXBcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERyYXdpbiBwb2ludCBvbiB0aGUgbWFwIGFzIHBpbnNcclxuICAgKiBASW5jamV0IGNyZWF0ZVBvcHVwcygpXHJcbiAgICogQHBhcmFtICBmZWF0dXJlc1xyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBjcmVhdGVQb2ludHMoZmVhdHVyZXM6IEFtRmVhdHVyZVtdKTogdm9pZCB7XHJcbiAgICBpZiAoZmVhdHVyZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdObyBkYXRhIGF2YWlsYWJsZScpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGZlYXR1cmVzKSB7XHJcbiAgICAgIHRoaXMubWFwLmFkZFBpbnMoW2l0ZW0uQXRsYXNGZWF0dXJlXSwgaXRlbS5QaW5Db25maWcpO1xyXG4gICAgICBpZiAoaXRlbS5BdGxhc0ZlYXR1cmUucHJvcGVydGllcy5jc3NDbGFzcykge1xyXG4gICAgICAgIHRoaXMuYWRkSXRlbShpdGVtLkRhdGFFbGVtZW50LmlkLCBpdGVtLkRhdGFFbGVtZW50LmxvY2FsaXphdGlvbiwgaXRlbS5BdGxhc0ZlYXR1cmUucHJvcGVydGllcy5jc3NDbGFzcyk7XHJcbiAgICAgICAgdGhpcy5jdXN0b21QaW5zLnB1c2goaXRlbS5BdGxhc0ZlYXR1cmUucHJvcGVydGllcy5jc3NDbGFzcyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5wb2ludHNBcnJheS5wdXNoKGl0ZW0uQXRsYXNGZWF0dXJlKTtcclxuICAgIH1cclxuICAgIHRoaXMuY3JlYXRlUG9wdXBzKGZlYXR1cmVzKTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVkIHBvcFVwcyBmb3IgYWxsIGZlYXR1cmVzIGJ5IHR5cGUgb2YgbGF5ZXJzXHJcbiAgICogQWRkaW5nIGV2ZW50IG9uICdtb3VzZW92ZXInXHJcbiAgICogQHBhcmFtIGZlYXR1cmVzXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGNyZWF0ZVBvcHVwcyhmZWF0dXJlczogQW1GZWF0dXJlW10pOiB2b2lkIHtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLmZpbmRVbmlxdWVMYXllcnMoZmVhdHVyZXMpKSB7XHJcbiAgICAgIGlmICh0aGlzLnBvcHVwVGVtcGxhdGUpIHtcclxuICAgICAgICB0aGlzLm1hcC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBpdGVtLCAoZTogYW55KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBhbUZlYXR1cmU6IEFtRmVhdHVyZSA9IGZlYXR1cmVzLmZpbmQoaXQgPT4gaXQuRGF0YUVsZW1lbnQubmFtZSA9PT0gZS5mZWF0dXJlc1swXS5wcm9wZXJ0aWVzLm5hbWUpO1xyXG4gICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoe1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogc2VudCB0byB0ZW1wbGF0ZSB2YXJpYWJsZVxyXG4gICAgICAgICAgICAgKiByYXcgZGF0YSBmcm9tIGlucHV0XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBEYXRhRWxlbWVudDogYW1GZWF0dXJlLkRhdGFFbGVtZW50XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMucG9wdXBBdGxhcy5zZXRQb3B1cE9wdGlvbnMoe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZS5mZWF0dXJlc1swXS5nZW9tZXRyeS5jb29yZGluYXRlcyxcclxuICAgICAgICAgICAgY29udGVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBvcHVwV3JhcHBlcmApLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB0aGlzLnBvcHVwQXRsYXMub3Blbih0aGlzLm1hcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCB1cGRhdGVQb2ludHMoZmVhdHVyZXM6IEFtRmVhdHVyZVtdKTogdm9pZCB7XHJcbiAgICB0aGlzLm1hcC5yZW1vdmVMYXllcnModGhpcy5maW5kVW5pcXVlTGF5ZXJzKGZlYXR1cmVzKSk7XHJcbiAgICBpZiAodGhpcy5jc3NBcnJheS5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5jc3NBcnJheS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7dmFsdWV9YCkgYXMgYW55KS5mb3JFYWNoKChpdDogYW55KSA9PiBpdC5yZW1vdmUoKSk7XHJcbiAgICAgICAgdGhpcy5tYXAucmVtb3ZlSHRtbCh2YWx1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmNzc0FycmF5ID0gW107XHJcbiAgICB9XHJcbiAgICB0aGlzLmNyZWF0ZVBvaW50cyhmZWF0dXJlcyk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVNYXAoKSB7XHJcbiAgICB0aGlzLm1hcC5yZW1vdmUoKTtcclxuICB9XHJcbn1cclxuIl19