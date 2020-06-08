/// <reference path="../../types/atlas.d.ts"/>
import { __decorate, __extends, __values } from "tslib";
import { Component, OnInit, Injector, AfterContentInit, AfterViewInit, Input, Output, ViewChild, ViewContainerRef, ElementRef, EventEmitter, ContentChild, TemplateRef, EmbeddedViewRef, QueryList, ViewChildren } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';
import { AtlasPopupDirective } from '../../directives/atlas-popup.directive';
import { LoadMapService } from '../../services/load-map.service';
var LcuMapsAzureMapElementState = /** @class */ (function () {
    function LcuMapsAzureMapElementState() {
    }
    return LcuMapsAzureMapElementState;
}());
export { LcuMapsAzureMapElementState };
var LcuMapsAzureMapContext = /** @class */ (function (_super) {
    __extends(LcuMapsAzureMapContext, _super);
    function LcuMapsAzureMapContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LcuMapsAzureMapContext;
}(LCUElementContext));
export { LcuMapsAzureMapContext };
export var SELECTOR_LCU_MAPS_AZURE_MAP_ELEMENT = 'lcu-maps-azure-map-element';
var LcuMapsAzureMapElementComponent = /** @class */ (function (_super) {
    __extends(LcuMapsAzureMapElementComponent, _super);
    //  Constructors
    function LcuMapsAzureMapElementComponent(injector, mapService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.mapService = mapService;
        _this.customPins = [];
        _this.features = []; // Array of ours points to add on map
        _this.pointsArray = [];
        _this.cssArray = [];
        _this.OnMapClick = new EventEmitter();
        _this.Loaded = new EventEmitter();
        return _this;
    }
    //  Life Cycle
    LcuMapsAzureMapElementComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    LcuMapsAzureMapElementComponent.prototype.ngAfterContentInit = function () {
        // this.createMap(this.ID, this.InitialConfig); // Initial map
        // this.startMapClickListener(); // Start emitter
    };
    LcuMapsAzureMapElementComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.childrenComponent.forEach(function (instance) {
            _this.mapWrapper = instance;
        });
        this.createMap(this.ID, this.InitialConfig); // Initial map
        this.startMapClickListener(); // Start emitter
        this.emitLoaded();
        // this.childrenComponent.changes.subscribe((comps: QueryList<LcuMapsAzureMapElementComponent>) => {
        //   debugger;
        // });
    };
    //  API Methods
    //  Helpers
    LcuMapsAzureMapElementComponent.prototype.createMap = function (id, config) {
        try {
            if (!this.mapWrapper) {
                return;
            }
            this.mapWrapper.nativeElement.setAttribute('id', id);
            this.map = new atlas.Map(id, config); // Init map box
            console.log('Map was created!', this.map);
        }
        catch (e) {
            console.log('CHECK YOUR CONFIG!', e);
        }
    };
    LcuMapsAzureMapElementComponent.prototype.emitLoaded = function () {
        if (this.map) {
            if (!this.Loaded) {
                this.Loaded = new EventEmitter();
            }
            this.Loaded.emit(true);
        }
        else {
            setTimeout(this.emitLoaded, 100);
        }
    };
    LcuMapsAzureMapElementComponent.prototype.changeMapCamera = function (options) {
        this.map.setCamera(options);
    };
    LcuMapsAzureMapElementComponent.prototype.changeMapStyle = function (options) {
        this.map.setStyle(options);
    };
    LcuMapsAzureMapElementComponent.prototype.changeUserInteraction = function (options) {
        this.map.setUserInteraction(options);
    };
    /**
     * Founding all unique layers from features Array
     * @param AmFeature[] features
     * @returns string[]
     */
    LcuMapsAzureMapElementComponent.prototype.findUniqueLayers = function (features) {
        var allLayers = features.map(function (it) { return it.Layer; });
        return Array.from(new Set(allLayers));
    };
    LcuMapsAzureMapElementComponent.prototype.startMapClickListener = function () {
        var _this = this;
        if (!this.map) {
            return;
        }
        this.map.addEventListener('click', function (e) {
            _this.OnMapClick.emit(e.position);
            // On click you emit geo position
        });
    };
    /**
     * Creating popUpContainer and injected to parent Template
     * @param context
     */
    LcuMapsAzureMapElementComponent.prototype.createComponent = function (context) {
        if (this.popupView) {
            this.popupView.destroy();
        }
        this.popupView = this.popupsContainer.createEmbeddedView(this.popupTemplate, context);
    };
    LcuMapsAzureMapElementComponent.prototype.addItem = function (id, loc, clas) {
        var customHTML;
        var idItem = clas + id;
        var pos = new atlas.data.Position(loc.lnt, loc.lng);
        this.cssArray.push(idItem); // Saving existing HTML elements
        customHTML = document.createElement('div');
        customHTML.setAttribute('id', idItem);
        customHTML.setAttribute('class', clas);
        this.map.addHtml(customHTML, pos); // add to map
    };
    /**
     * Drawin point on the map as pins
     * @Incjet createPopups()
     * @param  features
     */
    LcuMapsAzureMapElementComponent.prototype.createPoints = function (features) {
        var e_1, _a;
        if (features.length === 0) {
            console.log('No data available');
            return;
        }
        try {
            for (var features_1 = __values(features), features_1_1 = features_1.next(); !features_1_1.done; features_1_1 = features_1.next()) {
                var item = features_1_1.value;
                this.map.addPins([item.AtlasFeature], item.PinConfig);
                if (item.AtlasFeature.properties.cssClass) {
                    this.addItem(item.DataElement.id, item.DataElement.localization, item.AtlasFeature.properties.cssClass);
                    this.customPins.push(item.AtlasFeature.properties.cssClass);
                }
                this.pointsArray.push(item.AtlasFeature);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (features_1_1 && !features_1_1.done && (_a = features_1.return)) _a.call(features_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.createPopups(features);
    };
    /**
     * Created popUps for all features by type of layers
     * Adding event on 'mouseover'
     * @param features
     */
    LcuMapsAzureMapElementComponent.prototype.createPopups = function (features) {
        var e_2, _a;
        var _this = this;
        try {
            for (var _b = __values(this.findUniqueLayers(features)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if (this.popupTemplate) {
                    this.map.addEventListener('mouseover', item, function (e) {
                        var amFeature = features.find(function (it) { return it.DataElement.name === e.features[0].properties.name; });
                        _this.createComponent({
                            /**
                             * sent to template variable
                             * raw data from input
                             */
                            DataElement: amFeature.DataElement
                        });
                        _this.popupAtlas.setPopupOptions({
                            position: e.features[0].geometry.coordinates,
                            content: document.getElementById("popupWrapper"),
                        });
                        _this.popupAtlas.open(_this.map);
                    });
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    LcuMapsAzureMapElementComponent.prototype.updatePoints = function (features) {
        var _this = this;
        this.map.removeLayers(this.findUniqueLayers(features));
        if (this.cssArray.length) {
            this.cssArray.forEach(function (value) {
                document.querySelectorAll("#" + value).forEach(function (it) { return it.remove(); });
                _this.map.removeHtml(value);
            });
            this.cssArray = [];
        }
        this.createPoints(features);
    };
    LcuMapsAzureMapElementComponent.prototype.removeMap = function () {
        this.map.remove();
    };
    LcuMapsAzureMapElementComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: LoadMapService }
    ]; };
    __decorate([
        Input('initial-config')
    ], LcuMapsAzureMapElementComponent.prototype, "InitialConfig", void 0);
    __decorate([
        Input('id')
    ], LcuMapsAzureMapElementComponent.prototype, "ID", void 0);
    __decorate([
        Output('on-map-click')
    ], LcuMapsAzureMapElementComponent.prototype, "OnMapClick", void 0);
    __decorate([
        Output('loaded')
    ], LcuMapsAzureMapElementComponent.prototype, "Loaded", void 0);
    __decorate([
        ViewChild('popupsContainer', { read: ViewContainerRef })
    ], LcuMapsAzureMapElementComponent.prototype, "popupsContainer", void 0);
    __decorate([
        ViewChildren('mapWrapper')
    ], LcuMapsAzureMapElementComponent.prototype, "childrenComponent", void 0);
    __decorate([
        ContentChild(AtlasPopupDirective, { read: TemplateRef })
    ], LcuMapsAzureMapElementComponent.prototype, "popupTemplate", void 0);
    LcuMapsAzureMapElementComponent = __decorate([
        Component({
            selector: SELECTOR_LCU_MAPS_AZURE_MAP_ELEMENT,
            template: "<div #mapWrapper class=\"atlas-map\"></div>\r\n\r\n<div id=\"popupWrapper\">\r\n  <div #popupsContainer>\r\n  </div>\r\n</div>",
            styles: [".atlas-map{position:relative;width:100%;height:100%}"]
        })
    ], LcuMapsAzureMapElementComponent);
    return LcuMapsAzureMapElementComponent;
}(LcuElementComponent));
export { LcuMapsAzureMapElementComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXp1cmUtbWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bsb3djb2RldW5pdC9sY3UtbWFwcy1jb21tb24vIiwic291cmNlcyI6WyJsaWIvZWxlbWVudHMvYXp1cmUtbWFwL2F6dXJlLW1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOENBQThDOztBQUU5QyxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEVBQ1IsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osV0FBVyxFQUNYLGVBQWUsRUFDZixTQUFTLEVBQ1QsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNyRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUU3RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHakU7SUFBQTtJQUEwQyxDQUFDO0lBQUQsa0NBQUM7QUFBRCxDQUFDLEFBQTNDLElBQTJDOztBQUUzQztJQUE0QywwQ0FBOEM7SUFBMUY7O0lBQTRGLENBQUM7SUFBRCw2QkFBQztBQUFELENBQUMsQUFBN0YsQ0FBNEMsaUJBQWlCLEdBQWdDOztBQUU3RixNQUFNLENBQUMsSUFBTSxtQ0FBbUMsR0FBRyw0QkFBNEIsQ0FBQztBQU9oRjtJQUFxRCxtREFBMkM7SUEyQzlGLGdCQUFnQjtJQUNoQix5Q0FBc0IsUUFBa0IsRUFBWSxVQUEwQjtRQUE5RSxZQUNFLGtCQUFNLFFBQVEsQ0FBQyxTQUloQjtRQUxxQixjQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVksZ0JBQVUsR0FBVixVQUFVLENBQWdCO1FBTnRFLGdCQUFVLEdBQWUsRUFBRSxDQUFDO1FBQzdCLGNB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XCIuLi8uLi90eXBlcy9hdGxhcy5kLnRzXCIvPlxyXG5cclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIEluamVjdG9yLFxyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIEVtYmVkZGVkVmlld1JlZiwgXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFZpZXdDaGlsZHJlbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExDVUVsZW1lbnRDb250ZXh0LCBMY3VFbGVtZW50Q29tcG9uZW50IH0gZnJvbSAnQGxjdS9jb21tb24nO1xyXG5pbXBvcnQgeyBBdGxhc1BvcHVwRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9hdGxhcy1wb3B1cC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBBbUZlYXR1cmUgfSBmcm9tICcuLi8uLi9tb2RlbHMvYW0tZmVhdHVyZSc7XHJcbmltcG9ydCB7IExvYWRNYXBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9hZC1tYXAuc2VydmljZSc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIExjdU1hcHNBenVyZU1hcEVsZW1lbnRTdGF0ZSB7fVxyXG5cclxuZXhwb3J0IGNsYXNzIExjdU1hcHNBenVyZU1hcENvbnRleHQgZXh0ZW5kcyBMQ1VFbGVtZW50Q29udGV4dDxMY3VNYXBzQXp1cmVNYXBFbGVtZW50U3RhdGU+IHt9XHJcblxyXG5leHBvcnQgY29uc3QgU0VMRUNUT1JfTENVX01BUFNfQVpVUkVfTUFQX0VMRU1FTlQgPSAnbGN1LW1hcHMtYXp1cmUtbWFwLWVsZW1lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFNFTEVDVE9SX0xDVV9NQVBTX0FaVVJFX01BUF9FTEVNRU5ULFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9henVyZS1tYXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2F6dXJlLW1hcC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMY3VNYXBzQXp1cmVNYXBFbGVtZW50Q29tcG9uZW50IGV4dGVuZHMgTGN1RWxlbWVudENvbXBvbmVudDxMY3VNYXBzQXp1cmVNYXBDb250ZXh0PiBcclxuaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gIC8vICBGaWVsZHNcclxuXHJcbiAgLy8gIFByb3BlcnRpZXNcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KCdpbml0aWFsLWNvbmZpZycpXHJcbiAgcHVibGljIEluaXRpYWxDb25maWc6IGFueTtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxyXG4gIEBJbnB1dCgnaWQnKVxyXG4gIHB1YmxpYyBJRDogc3RyaW5nO1xyXG5cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1yZW5hbWVcclxuICBAT3V0cHV0KCdvbi1tYXAtY2xpY2snKVxyXG4gIHB1YmxpYyBPbk1hcENsaWNrOiBFdmVudEVtaXR0ZXI8YXRsYXMuZGF0YS5Qb3NpdGlvbj47XHJcblxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LXJlbmFtZVxyXG4gIEBPdXRwdXQoJ2xvYWRlZCcpXHJcbiAgcHVibGljIExvYWRlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3BvcHVwc0NvbnRhaW5lcicsIHtyZWFkOiBWaWV3Q29udGFpbmVyUmVmfSkgcG9wdXBzQ29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xyXG4gIC8vIEBWaWV3Q2hpbGQoJ21hcFdyYXBwZXInLCB7cmVhZDogRWxlbWVudFJlZn0pIG1hcFdyYXBwZXI6IEVsZW1lbnRSZWY7XHJcbiAgcHJvdGVjdGVkIG1hcFdyYXBwZXI6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZHJlbignbWFwV3JhcHBlcicpIGNoaWxkcmVuQ29tcG9uZW50OiBRdWVyeUxpc3Q8TGN1TWFwc0F6dXJlTWFwRWxlbWVudENvbXBvbmVudD47XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvciBjcmVhdGUgYW5kIGNvbnRyb2wgcG9wdXBcclxuICAgKiBUbyBJbmplY3QgaW50byBuZy10ZW1wbGF0ZSBpbiBwYXJlbnRcclxuICAgKi9cclxuICBAQ29udGVudENoaWxkKEF0bGFzUG9wdXBEaXJlY3RpdmUsIHtyZWFkOiBUZW1wbGF0ZVJlZn0pIHBvcHVwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIHB1YmxpYyBwb3B1cFZpZXc6IEVtYmVkZGVkVmlld1JlZjxhbnk+O1xyXG4gIHB1YmxpYyBwb3B1cEF0bGFzOiBhdGxhcy5Qb3B1cDtcclxuXHJcbiAgcHVibGljIG1hcDogYXRsYXMuTWFwO1xyXG4gIHByaXZhdGUgY3VzdG9tUGluczogQXJyYXk8YW55PiA9IFtdO1xyXG4gIHB1YmxpYyBmZWF0dXJlczogQW1GZWF0dXJlW10gPSBbXTsgLy8gQXJyYXkgb2Ygb3VycyBwb2ludHMgdG8gYWRkIG9uIG1hcFxyXG4gIHByaXZhdGUgcG9pbnRzQXJyYXk6IGF0bGFzLmRhdGEuRmVhdHVyZVtdID0gW107XHJcbiAgcHJpdmF0ZSBjc3NBcnJheTogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgLy8gIENvbnN0cnVjdG9yc1xyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IsIHByb3RlY3RlZCBtYXBTZXJ2aWNlOiBMb2FkTWFwU2VydmljZSkge1xyXG4gICAgc3VwZXIoaW5qZWN0b3IpO1xyXG5cclxuICAgIHRoaXMuT25NYXBDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YXRsYXMuZGF0YS5Qb3NpdGlvbj4oKTtcclxuICAgIHRoaXMuTG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIH1cclxuXHJcbiAgLy8gIExpZmUgQ3ljbGVcclxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIHRoaXMuY3JlYXRlTWFwKHRoaXMuSUQsIHRoaXMuSW5pdGlhbENvbmZpZyk7IC8vIEluaXRpYWwgbWFwXHJcbiAgICAvLyB0aGlzLnN0YXJ0TWFwQ2xpY2tMaXN0ZW5lcigpOyAvLyBTdGFydCBlbWl0dGVyXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGlsZHJlbkNvbXBvbmVudC5mb3JFYWNoKChpbnN0YW5jZTogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMubWFwV3JhcHBlciA9IGluc3RhbmNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jcmVhdGVNYXAodGhpcy5JRCwgdGhpcy5Jbml0aWFsQ29uZmlnKTsgLy8gSW5pdGlhbCBtYXBcclxuICAgIHRoaXMuc3RhcnRNYXBDbGlja0xpc3RlbmVyKCk7IC8vIFN0YXJ0IGVtaXR0ZXJcclxuICAgIHRoaXMuZW1pdExvYWRlZCgpO1xyXG4gICAgLy8gdGhpcy5jaGlsZHJlbkNvbXBvbmVudC5jaGFuZ2VzLnN1YnNjcmliZSgoY29tcHM6IFF1ZXJ5TGlzdDxMY3VNYXBzQXp1cmVNYXBFbGVtZW50Q29tcG9uZW50PikgPT4ge1xyXG4gICAgLy8gICBkZWJ1Z2dlcjtcclxuICAgIC8vIH0pO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgLy8gIEFQSSBNZXRob2RzXHJcblxyXG4gIC8vICBIZWxwZXJzXHJcbiAgcHVibGljIGNyZWF0ZU1hcChpZDogc3RyaW5nLCBjb25maWc6IGFueSk6IHZvaWQge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCF0aGlzLm1hcFdyYXBwZXIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5tYXBXcmFwcGVyLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcclxuICAgICAgdGhpcy5tYXAgPSBuZXcgYXRsYXMuTWFwKGlkLCBjb25maWcpOyAvLyBJbml0IG1hcCBib3hcclxuICAgICAgY29uc29sZS5sb2coJ01hcCB3YXMgY3JlYXRlZCEnLCB0aGlzLm1hcCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdDSEVDSyBZT1VSIENPTkZJRyEnLCBlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBlbWl0TG9hZGVkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubWFwKSB7XHJcbiAgICAgIGlmICghdGhpcy5Mb2FkZWQpIHtcclxuICAgICAgICB0aGlzLkxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLkxvYWRlZC5lbWl0KHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGltZW91dCh0aGlzLmVtaXRMb2FkZWQsIDEwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgY2hhbmdlTWFwQ2FtZXJhKG9wdGlvbnM6IENhbWVyYU9wdGlvbnMgJiBBbmltYXRpb25PcHRpb25zKTogdm9pZCB7XHJcbiAgICB0aGlzLm1hcC5zZXRDYW1lcmEob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgY2hhbmdlTWFwU3R5bGUob3B0aW9uczogU3R5bGVPcHRpb25zKTogdm9pZCB7XHJcbiAgICB0aGlzLm1hcC5zZXRTdHlsZShvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjaGFuZ2VVc2VySW50ZXJhY3Rpb24ob3B0aW9uczogVXNlckludGVyYWN0aW9uT3B0aW9ucyk6IHZvaWQge1xyXG4gICAgdGhpcy5tYXAuc2V0VXNlckludGVyYWN0aW9uKG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRm91bmRpbmcgYWxsIHVuaXF1ZSBsYXllcnMgZnJvbSBmZWF0dXJlcyBBcnJheVxyXG4gICAqIEBwYXJhbSBBbUZlYXR1cmVbXSBmZWF0dXJlc1xyXG4gICAqIEByZXR1cm5zIHN0cmluZ1tdXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGZpbmRVbmlxdWVMYXllcnMoZmVhdHVyZXM6IEFtRmVhdHVyZVtdKTogc3RyaW5nW10ge1xyXG4gICAgY29uc3QgYWxsTGF5ZXJzID0gZmVhdHVyZXMubWFwKGl0ID0+IGl0LkxheWVyKTtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoYWxsTGF5ZXJzKSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc3RhcnRNYXBDbGlja0xpc3RlbmVyKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm1hcCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLm1hcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5Pbk1hcENsaWNrLmVtaXQoZS5wb3NpdGlvbik7XHJcbiAgICAgIC8vIE9uIGNsaWNrIHlvdSBlbWl0IGdlbyBwb3NpdGlvblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGluZyBwb3BVcENvbnRhaW5lciBhbmQgaW5qZWN0ZWQgdG8gcGFyZW50IFRlbXBsYXRlXHJcbiAgICogQHBhcmFtIGNvbnRleHRcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgY3JlYXRlQ29tcG9uZW50KGNvbnRleHQ6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucG9wdXBWaWV3KSB7XHJcbiAgICAgIHRoaXMucG9wdXBWaWV3LmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIHRoaXMucG9wdXBWaWV3ID0gdGhpcy5wb3B1cHNDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMucG9wdXBUZW1wbGF0ZSwgY29udGV4dCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgYWRkSXRlbShpZDogYW55LCBsb2M6IGFueSwgY2xhczogYW55KTogdm9pZCB7XHJcbiAgICBsZXQgY3VzdG9tSFRNTDtcclxuICAgIGNvbnN0IGlkSXRlbSA9IGNsYXMgKyBpZDtcclxuICAgIGNvbnN0IHBvcyA9IG5ldyBhdGxhcy5kYXRhLlBvc2l0aW9uKGxvYy5sbnQsIGxvYy5sbmcpO1xyXG4gICAgdGhpcy5jc3NBcnJheS5wdXNoKGlkSXRlbSk7ICAvLyBTYXZpbmcgZXhpc3RpbmcgSFRNTCBlbGVtZW50c1xyXG5cclxuICAgIGN1c3RvbUhUTUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGN1c3RvbUhUTUwuc2V0QXR0cmlidXRlKCdpZCcsIGlkSXRlbSk7XHJcbiAgICBjdXN0b21IVE1MLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzKTtcclxuXHJcbiAgICB0aGlzLm1hcC5hZGRIdG1sKGN1c3RvbUhUTUwsIHBvcyk7IC8vIGFkZCB0byBtYXBcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERyYXdpbiBwb2ludCBvbiB0aGUgbWFwIGFzIHBpbnNcclxuICAgKiBASW5jamV0IGNyZWF0ZVBvcHVwcygpXHJcbiAgICogQHBhcmFtICBmZWF0dXJlc1xyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBjcmVhdGVQb2ludHMoZmVhdHVyZXM6IEFtRmVhdHVyZVtdKTogdm9pZCB7XHJcbiAgICBpZiAoZmVhdHVyZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdObyBkYXRhIGF2YWlsYWJsZScpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGZlYXR1cmVzKSB7XHJcbiAgICAgIHRoaXMubWFwLmFkZFBpbnMoW2l0ZW0uQXRsYXNGZWF0dXJlXSwgaXRlbS5QaW5Db25maWcpO1xyXG4gICAgICBpZiAoaXRlbS5BdGxhc0ZlYXR1cmUucHJvcGVydGllcy5jc3NDbGFzcykge1xyXG4gICAgICAgIHRoaXMuYWRkSXRlbShpdGVtLkRhdGFFbGVtZW50LmlkLCBpdGVtLkRhdGFFbGVtZW50LmxvY2FsaXphdGlvbiwgaXRlbS5BdGxhc0ZlYXR1cmUucHJvcGVydGllcy5jc3NDbGFzcyk7XHJcbiAgICAgICAgdGhpcy5jdXN0b21QaW5zLnB1c2goaXRlbS5BdGxhc0ZlYXR1cmUucHJvcGVydGllcy5jc3NDbGFzcyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5wb2ludHNBcnJheS5wdXNoKGl0ZW0uQXRsYXNGZWF0dXJlKTtcclxuICAgIH1cclxuICAgIHRoaXMuY3JlYXRlUG9wdXBzKGZlYXR1cmVzKTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVkIHBvcFVwcyBmb3IgYWxsIGZlYXR1cmVzIGJ5IHR5cGUgb2YgbGF5ZXJzXHJcbiAgICogQWRkaW5nIGV2ZW50IG9uICdtb3VzZW92ZXInXHJcbiAgICogQHBhcmFtIGZlYXR1cmVzXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGNyZWF0ZVBvcHVwcyhmZWF0dXJlczogQW1GZWF0dXJlW10pOiB2b2lkIHtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLmZpbmRVbmlxdWVMYXllcnMoZmVhdHVyZXMpKSB7XHJcbiAgICAgIGlmICh0aGlzLnBvcHVwVGVtcGxhdGUpIHtcclxuICAgICAgICB0aGlzLm1hcC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBpdGVtLCAoZTogYW55KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBhbUZlYXR1cmU6IEFtRmVhdHVyZSA9IGZlYXR1cmVzLmZpbmQoaXQgPT4gaXQuRGF0YUVsZW1lbnQubmFtZSA9PT0gZS5mZWF0dXJlc1swXS5wcm9wZXJ0aWVzLm5hbWUpO1xyXG4gICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoe1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogc2VudCB0byB0ZW1wbGF0ZSB2YXJpYWJsZVxyXG4gICAgICAgICAgICAgKiByYXcgZGF0YSBmcm9tIGlucHV0XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBEYXRhRWxlbWVudDogYW1GZWF0dXJlLkRhdGFFbGVtZW50XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMucG9wdXBBdGxhcy5zZXRQb3B1cE9wdGlvbnMoe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZS5mZWF0dXJlc1swXS5nZW9tZXRyeS5jb29yZGluYXRlcyxcclxuICAgICAgICAgICAgY29udGVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBvcHVwV3JhcHBlcmApLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB0aGlzLnBvcHVwQXRsYXMub3Blbih0aGlzLm1hcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCB1cGRhdGVQb2ludHMoZmVhdHVyZXM6IEFtRmVhdHVyZVtdKTogdm9pZCB7XHJcbiAgICB0aGlzLm1hcC5yZW1vdmVMYXllcnModGhpcy5maW5kVW5pcXVlTGF5ZXJzKGZlYXR1cmVzKSk7XHJcbiAgICBpZiAodGhpcy5jc3NBcnJheS5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5jc3NBcnJheS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7dmFsdWV9YCkgYXMgYW55KS5mb3JFYWNoKChpdDogYW55KSA9PiBpdC5yZW1vdmUoKSk7XHJcbiAgICAgICAgdGhpcy5tYXAucmVtb3ZlSHRtbCh2YWx1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmNzc0FycmF5ID0gW107XHJcbiAgICB9XHJcbiAgICB0aGlzLmNyZWF0ZVBvaW50cyhmZWF0dXJlcyk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVNYXAoKSB7XHJcbiAgICB0aGlzLm1hcC5yZW1vdmUoKTtcclxuICB9XHJcbn1cclxuIl19