import { Injectable, ɵɵdefineInjectable, EventEmitter, Component, Input, Output, ElementRef, Renderer2, Directive, HostListener, Injector, ViewChild, ViewContainerRef, ViewChildren, ContentChild, TemplateRef, NgModule, ɵɵinject, INJECTOR } from '@angular/core';
import { Subject, BehaviorSubject, of } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ThemeColorPickerService, LCUElementContext, LcuElementComponent, FathymSharedModule, MaterialModule, StateContext } from '@lcu/common';

const sources = [
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
    return new Promise((resolve, reject) => {
        let createdElement;
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
    return Promise.all(sources.map(source => loadSingleAsset(source.src, source.type)));
}

class LoadMapService {
    constructor() {
        this.isLoaded = false;
        this.isComponentLoaded = false;
        this.loadedSubject = new Subject();
        this.loadedComponenet = new BehaviorSubject(false);
    }
    load() {
        if (!this.isLoaded) {
            return fromPromise(azureMapLazyLoader().then(() => {
                this.isLoaded = true;
                return this.isLoaded;
            }));
        }
        else {
            return of(true);
        }
    }
    observableComponent() {
        return this.loadedSubject.asObservable();
    }
}
LoadMapService.decorators = [
    { type: Injectable }
];
LoadMapService.ctorParameters = () => [];

class LcuService {
    constructor() { }
    getCardData() {
        return [
            {
                LcuId: 1,
                Content: `A coding standard makes sure that all the developers working on the project are following certain specified guidelines.
                  The code can be easily understood and a proper consistency is maintained. Consistency has a positive impact on the
                  quality of the program and one should maintain it while coding. Also, it should be taken care that the guidelines are
                  homogeneously followed across different levels of the system and they do not contradict each other. The finished program
                  code should look like that it has been written by a single developer, in a single session.`,
                Title: 'Angular Style Guide',
                Subtitle: 'Best Practices for Developers to Follow',
                Icon: 'done_all',
                Url: 'https://fathym.visualstudio.com/Documentation/_wiki/wikis/Documentation.wiki/35/Style-Guide-Angular'
            },
            {
                LcuId: 2,
                Content: `A style guide helps to ensure a continuous brand experience. It means that no matter how, when or where a customer
                  experiences a brand, they are experiencing the same underlying traits. It’s this consistency across every touch-point
                  that helps build a brand and brand loyalty. And with 2.4 billion Internet users around the world (and growing), it’s
                  really more critical than ever for businesses to establish a comprehensive style guide.`,
                Title: 'Fathym UI/UX Style Guide',
                Subtitle: `Follow Some of Fathym's Favorite Designs`,
                Icon: 'palette',
                Url: 'https://fathym.visualstudio.com/Documentation/_wiki/wikis/Documentation.wiki/37/Style-Guide-Design'
            },
            {
                LcuId: 3,
                Content: `Fathym’s low-code framework is designed to give developers the freedom and best practice workflows to rapidly create
                  IoT and data-driven applications that are agnostic to tools, platforms and clouds. Each element of the framework is
                  built from Low-Code Units (LCUs) – modular building blocks of code that can be as large as an application, or as
                  small as a data visualization.`,
                Title: `Fathym's Low-Code Framework`,
                Subtitle: `Find More Information About Fathym's IoT Solutions`,
                Icon: 'code',
                Url: 'https://fathym.com/low-code-framework/'
            }
        ];
    }
}
LcuService.ɵprov = ɵɵdefineInjectable({ factory: function LcuService_Factory() { return new LcuService(); }, token: LcuService, providedIn: "root" });
LcuService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
LcuService.ctorParameters = () => [];

class LcuComponent {
    constructor() {
        this.cardSelected = new EventEmitter();
    }
    ngOnInit() { }
    SelectCard(url) {
        this.cardSelected.emit();
        if (url) {
            window.open(url);
        }
    }
}
LcuComponent.decorators = [
    { type: Component, args: [{
                selector: 'lcu-lcu',
                template: "<mat-card lcu id=\"lcuCard{{card.LcuId}}\" class=\"lcu-card\" (click)=\"SelectCard(card.Url)\">\r\n    <mat-card-header>\r\n        <div mat-card-avatar class=\"lcu-card-avatar\">\r\n        <mat-icon color=\"primary\">{{card.Icon}}</mat-icon>\r\n        </div>\r\n        <mat-card-title class=\"paragraph-title\">{{card.Title}}</mat-card-title>\r\n        <mat-card-subtitle class=\"plain-text\">{{card.Subtitle}}</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content class=\"lcu-card-content\">\r\n        {{card.Content}}\r\n    </mat-card-content>\r\n</mat-card>\r\n  ",
                styles: [".lcu-card{cursor:pointer;display:inline-block;margin:5px;min-height:250px}.lcu-card .lcu-card-avatar .mat-icon{font-size:40px}.lcu-card .lcu-card-content{text-align:justify;padding:5px;line-height:20px}"]
            },] }
];
LcuComponent.ctorParameters = () => [];
LcuComponent.propDecorators = {
    card: [{ type: Input }],
    cardSelected: [{ type: Output }]
};

class LcuDirective {
    constructor(elRef, renderer, themeService) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.themeService = themeService;
    }
    onMouseEnter() {
        this.hoverEffect(this.getThemeColor(), 'underline');
    }
    onMouseLeave() {
        this.hoverEffect('', 'initial');
    }
    ngOnInit() {
        this.currentColor = this.getThemeColor();
    }
    getThemeColor() {
        const theme = this.themeService.GetColorClass().value;
        return 'color-swatch-' + theme.substring(theme.indexOf('-') + 1, theme.lastIndexOf('-'));
    }
    hoverEffect(color, decoration) {
        const title = this.elRef.nativeElement.querySelector('.mat-card-title');
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
    }
}
LcuDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ThemeColorPickerService }
];
LcuDirective.decorators = [
    { type: Directive, args: [{
                selector: '[lcu]'
            },] }
];
LcuDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ThemeColorPickerService }
];
LcuDirective.propDecorators = {
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};

class AtlasPopupDirective {
    constructor() { }
}
AtlasPopupDirective.decorators = [
    { type: Directive, args: [{
                selector: '[amPopup]'
            },] }
];
AtlasPopupDirective.ctorParameters = () => [];

/// <reference path="../../types/atlas.d.ts"/>
class LcuMapsAzureMapElementState {
}
class LcuMapsAzureMapContext extends LCUElementContext {
}
const SELECTOR_LCU_MAPS_AZURE_MAP_ELEMENT = 'lcu-maps-azure-map-element';
class LcuMapsAzureMapElementComponent extends LcuElementComponent {
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

class LcuMapsModule {
    static forRoot() {
        return {
            ngModule: LcuMapsModule,
            providers: [LcuService, LoadMapService]
        };
    }
}
LcuMapsModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

class LcuModel {
}

class LcuManagementStateContext extends StateContext {
    // Constructors
    constructor(injector) {
        super(injector);
        this.injector = injector;
    }
    // API Methods
    GetLcuById(id) {
        this.Execute({
            Arguments: {
                LcuId: id
            },
            Type: 'GetLcuById'
        });
    }
    //  Helpers
    defaultValue() {
        return { Loading: true };
    }
    loadStateKey() {
        return 'main';
    }
    loadStateName() {
        return 'lcu';
    }
}
LcuManagementStateContext.ctorParameters = () => [
    { type: Injector }
];
LcuManagementStateContext.ɵprov = ɵɵdefineInjectable({ factory: function LcuManagementStateContext_Factory() { return new LcuManagementStateContext(ɵɵinject(INJECTOR)); }, token: LcuManagementStateContext, providedIn: "root" });
LcuManagementStateContext.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
LcuManagementStateContext.ctorParameters = () => [
    { type: Injector }
];

class LcuManagementState {
}

class LcuUtils {
    static upperLcu(input) {
        return input.toUpperCase();
    }
}

/// <reference path="./lib/types/atlas.d.ts" />

/**
 * Generated bundle index. Do not edit.
 */

export { LcuComponent, LcuDirective, LcuManagementState, LcuManagementStateContext, LcuMapsAzureMapContext, LcuMapsAzureMapElementComponent, LcuMapsAzureMapElementState, LcuMapsModule, LcuModel, LcuService, LcuUtils, LoadMapService, SELECTOR_LCU_MAPS_AZURE_MAP_ELEMENT, AtlasPopupDirective as ɵa };
//# sourceMappingURL=lowcodeunit-lcu-maps-common.js.map
