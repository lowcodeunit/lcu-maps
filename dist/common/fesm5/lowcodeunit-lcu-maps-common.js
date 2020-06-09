import { __decorate, __extends, __values } from 'tslib';
import { Injectable, ɵɵdefineInjectable, EventEmitter, Input, Output, Component, ElementRef, Renderer2, HostListener, Directive, Injector, ViewChild, ViewContainerRef, ViewChildren, ContentChild, TemplateRef, NgModule, ɵɵinject, INJECTOR } from '@angular/core';
import { Subject, BehaviorSubject, of } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ThemeColorPickerService, LCUElementContext, LcuElementComponent, FathymSharedModule, MaterialModule, StateContext } from '@lcu/common';

var sources = [
    {
        type: 'style',
        src: 'https://atlas.microsoft.com/sdk/css/atlas.min.css?api-version=1'
    },
    {
        type: 'script',
        src: 'https://atlas.microsoft.com/sdk/js/atlas.min.js?api-version=1'
    }
];
function _window() {
    return window;
}
function loadSingleAsset(source, type) {
    return new Promise(function (resolve, reject) {
        var createdElement;
        switch (type) {
            case 'script':
                createdElement = document.createElement('script');
                createdElement.src = source;
                break;
            case 'style':
                createdElement = document.createElement('link');
                createdElement.rel = 'stylesheet';
                createdElement.href = source;
                createdElement.type = 'text/css';
                break;
            default:
                reject('Wrong Type');
                break;
        }
        if (typeof (_window().atlas) !== 'undefined'
            && typeof (_window().atlas.Map) !== 'undefined') {
            resolve();
        }
        else {
            createdElement.onerror = reject;
            createdElement.onload = resolve;
            document.head.appendChild(createdElement);
        }
    });
}
function azureMapLazyLoader() {
    return Promise.all(sources.map(function (source) { return loadSingleAsset(source.src, source.type); }));
}

var LoadMapService = /** @class */ (function () {
    function LoadMapService() {
        this.isLoaded = false;
        this.isComponentLoaded = false;
        this.loadedSubject = new Subject();
        this.loadedComponenet = new BehaviorSubject(false);
    }
    LoadMapService.prototype.load = function () {
        var _this = this;
        if (!this.isLoaded) {
            return fromPromise(azureMapLazyLoader().then(function () {
                _this.isLoaded = true;
                return _this.isLoaded;
            }));
        }
        else {
            return of(true);
        }
    };
    LoadMapService.prototype.observableComponent = function () {
        return this.loadedSubject.asObservable();
    };
    LoadMapService = __decorate([
        Injectable()
    ], LoadMapService);
    return LoadMapService;
}());

var LcuService = /** @class */ (function () {
    function LcuService() {
    }
    LcuService.prototype.getCardData = function () {
        return [
            {
                LcuId: 1,
                Content: "A coding standard makes sure that all the developers working on the project are following certain specified guidelines.\n                  The code can be easily understood and a proper consistency is maintained. Consistency has a positive impact on the\n                  quality of the program and one should maintain it while coding. Also, it should be taken care that the guidelines are\n                  homogeneously followed across different levels of the system and they do not contradict each other. The finished program\n                  code should look like that it has been written by a single developer, in a single session.",
                Title: 'Angular Style Guide',
                Subtitle: 'Best Practices for Developers to Follow',
                Icon: 'done_all',
                Url: 'https://fathym.visualstudio.com/Documentation/_wiki/wikis/Documentation.wiki/35/Style-Guide-Angular'
            },
            {
                LcuId: 2,
                Content: "A style guide helps to ensure a continuous brand experience. It means that no matter how, when or where a customer\n                  experiences a brand, they are experiencing the same underlying traits. It\u2019s this consistency across every touch-point\n                  that helps build a brand and brand loyalty. And with 2.4 billion Internet users around the world (and growing), it\u2019s\n                  really more critical than ever for businesses to establish a comprehensive style guide.",
                Title: 'Fathym UI/UX Style Guide',
                Subtitle: "Follow Some of Fathym's Favorite Designs",
                Icon: 'palette',
                Url: 'https://fathym.visualstudio.com/Documentation/_wiki/wikis/Documentation.wiki/37/Style-Guide-Design'
            },
            {
                LcuId: 3,
                Content: "Fathym\u2019s low-code framework is designed to give developers the freedom and best practice workflows to rapidly create\n                  IoT and data-driven applications that are agnostic to tools, platforms and clouds. Each element of the framework is\n                  built from Low-Code Units (LCUs) \u2013 modular building blocks of code that can be as large as an application, or as\n                  small as a data visualization.",
                Title: "Fathym's Low-Code Framework",
                Subtitle: "Find More Information About Fathym's IoT Solutions",
                Icon: 'code',
                Url: 'https://fathym.com/low-code-framework/'
            }
        ];
    };
    LcuService.ɵprov = ɵɵdefineInjectable({ factory: function LcuService_Factory() { return new LcuService(); }, token: LcuService, providedIn: "root" });
    LcuService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], LcuService);
    return LcuService;
}());

var LcuComponent = /** @class */ (function () {
    function LcuComponent() {
        this.cardSelected = new EventEmitter();
    }
    LcuComponent.prototype.ngOnInit = function () { };
    LcuComponent.prototype.SelectCard = function (url) {
        this.cardSelected.emit();
        if (url) {
            window.open(url);
        }
    };
    __decorate([
        Input()
    ], LcuComponent.prototype, "card", void 0);
    __decorate([
        Output()
    ], LcuComponent.prototype, "cardSelected", void 0);
    LcuComponent = __decorate([
        Component({
            selector: 'lcu-lcu',
            template: "<mat-card lcu id=\"lcuCard{{card.LcuId}}\" class=\"lcu-card\" (click)=\"SelectCard(card.Url)\">\r\n    <mat-card-header>\r\n        <div mat-card-avatar class=\"lcu-card-avatar\">\r\n        <mat-icon color=\"primary\">{{card.Icon}}</mat-icon>\r\n        </div>\r\n        <mat-card-title class=\"paragraph-title\">{{card.Title}}</mat-card-title>\r\n        <mat-card-subtitle class=\"plain-text\">{{card.Subtitle}}</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content class=\"lcu-card-content\">\r\n        {{card.Content}}\r\n    </mat-card-content>\r\n</mat-card>\r\n  ",
            styles: [".lcu-card{cursor:pointer;display:inline-block;margin:5px;min-height:250px}.lcu-card .lcu-card-avatar .mat-icon{font-size:40px}.lcu-card .lcu-card-content{text-align:justify;padding:5px;line-height:20px}"]
        })
    ], LcuComponent);
    return LcuComponent;
}());

var LcuDirective = /** @class */ (function () {
    function LcuDirective(elRef, renderer, themeService) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.themeService = themeService;
    }
    LcuDirective.prototype.onMouseEnter = function () {
        this.hoverEffect(this.getThemeColor(), 'underline');
    };
    LcuDirective.prototype.onMouseLeave = function () {
        this.hoverEffect('', 'initial');
    };
    LcuDirective.prototype.ngOnInit = function () {
        this.currentColor = this.getThemeColor();
    };
    LcuDirective.prototype.getThemeColor = function () {
        var theme = this.themeService.GetColorClass().value;
        return 'color-swatch-' + theme.substring(theme.indexOf('-') + 1, theme.lastIndexOf('-'));
    };
    LcuDirective.prototype.hoverEffect = function (color, decoration) {
        var title = this.elRef.nativeElement.querySelector('.mat-card-title');
        this.renderer.setStyle(title, 'text-decoration', decoration);
        if (!color && this.currentColor) {
            this.renderer.removeClass(title, this.currentColor);
        }
        else if (color !== this.currentColor) {
            this.renderer.removeClass(title, this.currentColor);
        }
        if (color) {
            this.renderer.addClass(title, color);
            this.currentColor = color;
        }
    };
    LcuDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ThemeColorPickerService }
    ]; };
    __decorate([
        HostListener('mouseenter')
    ], LcuDirective.prototype, "onMouseEnter", null);
    __decorate([
        HostListener('mouseleave')
    ], LcuDirective.prototype, "onMouseLeave", null);
    LcuDirective = __decorate([
        Directive({
            selector: '[lcu]'
        })
    ], LcuDirective);
    return LcuDirective;
}());

var AtlasPopupDirective = /** @class */ (function () {
    function AtlasPopupDirective() {
    }
    AtlasPopupDirective = __decorate([
        Directive({
            selector: '[amPopup]'
        })
    ], AtlasPopupDirective);
    return AtlasPopupDirective;
}());

/// <reference path="../../types/atlas.d.ts"/>
var LcuMapsAzureMapElementState = /** @class */ (function () {
    function LcuMapsAzureMapElementState() {
    }
    return LcuMapsAzureMapElementState;
}());
var LcuMapsAzureMapContext = /** @class */ (function (_super) {
    __extends(LcuMapsAzureMapContext, _super);
    function LcuMapsAzureMapContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LcuMapsAzureMapContext;
}(LCUElementContext));
var SELECTOR_LCU_MAPS_AZURE_MAP_ELEMENT = 'lcu-maps-azure-map-element';
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

var LcuMapsModule = /** @class */ (function () {
    function LcuMapsModule() {
    }
    LcuMapsModule_1 = LcuMapsModule;
    LcuMapsModule.forRoot = function () {
        return {
            ngModule: LcuMapsModule_1,
            providers: [LcuService, LoadMapService]
        };
    };
    var LcuMapsModule_1;
    LcuMapsModule = LcuMapsModule_1 = __decorate([
        NgModule({
            declarations: [
                LcuComponent,
                LcuDirective,
                LcuMapsAzureMapElementComponent,
                AtlasPopupDirective
            ],
            imports: [
                FathymSharedModule,
                FormsModule,
                ReactiveFormsModule,
                FlexLayoutModule,
                MaterialModule
            ],
            exports: [
                LcuComponent,
                LcuDirective,
                LcuMapsAzureMapElementComponent,
                AtlasPopupDirective
            ],
            entryComponents: [LcuMapsAzureMapElementComponent]
        })
    ], LcuMapsModule);
    return LcuMapsModule;
}());

var LcuModel = /** @class */ (function () {
    function LcuModel() {
    }
    return LcuModel;
}());

var LcuManagementStateContext = /** @class */ (function (_super) {
    __extends(LcuManagementStateContext, _super);
    // Constructors
    function LcuManagementStateContext(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        return _this;
    }
    // API Methods
    LcuManagementStateContext.prototype.GetLcuById = function (id) {
        this.Execute({
            Arguments: {
                LcuId: id
            },
            Type: 'GetLcuById'
        });
    };
    //  Helpers
    LcuManagementStateContext.prototype.defaultValue = function () {
        return { Loading: true };
    };
    LcuManagementStateContext.prototype.loadStateKey = function () {
        return 'main';
    };
    LcuManagementStateContext.prototype.loadStateName = function () {
        return 'lcu';
    };
    LcuManagementStateContext.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    LcuManagementStateContext.ɵprov = ɵɵdefineInjectable({ factory: function LcuManagementStateContext_Factory() { return new LcuManagementStateContext(ɵɵinject(INJECTOR)); }, token: LcuManagementStateContext, providedIn: "root" });
    LcuManagementStateContext = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], LcuManagementStateContext);
    return LcuManagementStateContext;
}(StateContext));

var LcuManagementState = /** @class */ (function () {
    function LcuManagementState() {
    }
    return LcuManagementState;
}());

var LcuUtils = /** @class */ (function () {
    function LcuUtils() {
    }
    LcuUtils.upperLcu = function (input) {
        return input.toUpperCase();
    };
    return LcuUtils;
}());

/// <reference path="./lib/types/atlas.d.ts" />

/**
 * Generated bundle index. Do not edit.
 */

export { LcuComponent, LcuDirective, LcuManagementState, LcuManagementStateContext, LcuMapsAzureMapContext, LcuMapsAzureMapElementComponent, LcuMapsAzureMapElementState, LcuMapsModule, LcuModel, LcuService, LcuUtils, LoadMapService, SELECTOR_LCU_MAPS_AZURE_MAP_ELEMENT, AtlasPopupDirective as ɵa };
//# sourceMappingURL=lowcodeunit-lcu-maps-common.js.map
