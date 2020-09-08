(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/internal-compatibility'), require('@angular/forms'), require('@angular/flex-layout'), require('@lcu/common')) :
    typeof define === 'function' && define.amd ? define('@lowcodeunit/lcu-maps-common', ['exports', '@angular/core', 'rxjs', 'rxjs/internal-compatibility', '@angular/forms', '@angular/flex-layout', '@lcu/common'], factory) :
    (global = global || self, factory((global.lowcodeunit = global.lowcodeunit || {}, global.lowcodeunit['lcu-maps-common'] = {}), global.ng.core, global.rxjs, global.rxjs['internal-compatibility'], global.ng.forms, global.ng.flexLayout, global.common));
}(this, (function (exports, core, rxjs, internalCompatibility, forms, flexLayout, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    function __exportStar(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

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
            this.loadedSubject = new rxjs.Subject();
            this.loadedComponenet = new rxjs.BehaviorSubject(false);
        }
        LoadMapService.prototype.load = function () {
            var _this = this;
            if (!this.isLoaded) {
                return internalCompatibility.fromPromise(azureMapLazyLoader().then(function () {
                    _this.isLoaded = true;
                    return _this.isLoaded;
                }));
            }
            else {
                return rxjs.of(true);
            }
        };
        LoadMapService.prototype.observableComponent = function () {
            return this.loadedSubject.asObservable();
        };
        LoadMapService.decorators = [
            { type: core.Injectable }
        ];
        LoadMapService.ctorParameters = function () { return []; };
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
        LcuService.ɵprov = core.ɵɵdefineInjectable({ factory: function LcuService_Factory() { return new LcuService(); }, token: LcuService, providedIn: "root" });
        LcuService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        LcuService.ctorParameters = function () { return []; };
        return LcuService;
    }());

    var LcuComponent = /** @class */ (function () {
        function LcuComponent() {
            this.cardSelected = new core.EventEmitter();
        }
        LcuComponent.prototype.ngOnInit = function () { };
        LcuComponent.prototype.SelectCard = function (url) {
            this.cardSelected.emit();
            if (url) {
                window.open(url);
            }
        };
        LcuComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lcu-lcu',
                        template: "<mat-card lcu id=\"lcuCard{{card.LcuId}}\" class=\"lcu-card\" (click)=\"SelectCard(card.Url)\">\r\n    <mat-card-header>\r\n        <div mat-card-avatar class=\"lcu-card-avatar\">\r\n        <mat-icon color=\"primary\">{{card.Icon}}</mat-icon>\r\n        </div>\r\n        <mat-card-title class=\"paragraph-title\">{{card.Title}}</mat-card-title>\r\n        <mat-card-subtitle class=\"plain-text\">{{card.Subtitle}}</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content class=\"lcu-card-content\">\r\n        {{card.Content}}\r\n    </mat-card-content>\r\n</mat-card>\r\n  ",
                        styles: [".lcu-card{cursor:pointer;display:inline-block;margin:5px;min-height:250px}.lcu-card .lcu-card-avatar .mat-icon{font-size:40px}.lcu-card .lcu-card-content{text-align:justify;padding:5px;line-height:20px}"]
                    },] }
        ];
        LcuComponent.ctorParameters = function () { return []; };
        LcuComponent.propDecorators = {
            card: [{ type: core.Input }],
            cardSelected: [{ type: core.Output }]
        };
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
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: common.ThemeColorPickerService }
        ]; };
        LcuDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[lcu]'
                    },] }
        ];
        LcuDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: common.ThemeColorPickerService }
        ]; };
        LcuDirective.propDecorators = {
            onMouseEnter: [{ type: core.HostListener, args: ['mouseenter',] }],
            onMouseLeave: [{ type: core.HostListener, args: ['mouseleave',] }]
        };
        return LcuDirective;
    }());

    var AtlasPopupDirective = /** @class */ (function () {
        function AtlasPopupDirective() {
        }
        AtlasPopupDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[amPopup]'
                    },] }
        ];
        AtlasPopupDirective.ctorParameters = function () { return []; };
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
    }(common.LCUElementContext));
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
            _this.OnMapClick = new core.EventEmitter();
            _this.Loaded = new core.EventEmitter();
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
                console.error('CHECK YOUR CONFIG!', e);
            }
        };
        LcuMapsAzureMapElementComponent.prototype.emitLoaded = function () {
            if (this.map) {
                if (!this.Loaded) {
                    this.Loaded = new core.EventEmitter();
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
            { type: core.Injector },
            { type: LoadMapService }
        ]; };
        LcuMapsAzureMapElementComponent.decorators = [
            { type: core.Component, args: [{
                        selector: SELECTOR_LCU_MAPS_AZURE_MAP_ELEMENT,
                        template: "<div #mapWrapper class=\"atlas-map\"></div>\r\n\r\n<div id=\"popupWrapper\">\r\n  <div #popupsContainer>\r\n  </div>\r\n</div>",
                        styles: [".atlas-map{position:relative;width:100%;height:100%}"]
                    },] }
        ];
        LcuMapsAzureMapElementComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: LoadMapService }
        ]; };
        LcuMapsAzureMapElementComponent.propDecorators = {
            InitialConfig: [{ type: core.Input, args: ['initial-config',] }],
            ID: [{ type: core.Input, args: ['id',] }],
            OnMapClick: [{ type: core.Output, args: ['on-map-click',] }],
            Loaded: [{ type: core.Output, args: ['loaded',] }],
            popupsContainer: [{ type: core.ViewChild, args: ['popupsContainer', { read: core.ViewContainerRef },] }],
            childrenComponent: [{ type: core.ViewChildren, args: ['mapWrapper',] }],
            popupTemplate: [{ type: core.ContentChild, args: [AtlasPopupDirective, { read: core.TemplateRef },] }]
        };
        return LcuMapsAzureMapElementComponent;
    }(common.LcuElementComponent));

    var LcuMapsModule = /** @class */ (function () {
        function LcuMapsModule() {
        }
        LcuMapsModule.forRoot = function () {
            return {
                ngModule: LcuMapsModule,
                providers: [LcuService, LoadMapService]
            };
        };
        LcuMapsModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            LcuComponent,
                            LcuDirective,
                            LcuMapsAzureMapElementComponent,
                            AtlasPopupDirective
                        ],
                        imports: [
                            common.FathymSharedModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            flexLayout.FlexLayoutModule,
                            common.MaterialModule
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
            { type: core.Injector }
        ]; };
        LcuManagementStateContext.ɵprov = core.ɵɵdefineInjectable({ factory: function LcuManagementStateContext_Factory() { return new LcuManagementStateContext(core.ɵɵinject(core.INJECTOR)); }, token: LcuManagementStateContext, providedIn: "root" });
        LcuManagementStateContext.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        LcuManagementStateContext.ctorParameters = function () { return [
            { type: core.Injector }
        ]; };
        return LcuManagementStateContext;
    }(common.StateContext));

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

    exports.LcuComponent = LcuComponent;
    exports.LcuDirective = LcuDirective;
    exports.LcuManagementState = LcuManagementState;
    exports.LcuManagementStateContext = LcuManagementStateContext;
    exports.LcuMapsAzureMapContext = LcuMapsAzureMapContext;
    exports.LcuMapsAzureMapElementComponent = LcuMapsAzureMapElementComponent;
    exports.LcuMapsAzureMapElementState = LcuMapsAzureMapElementState;
    exports.LcuMapsModule = LcuMapsModule;
    exports.LcuModel = LcuModel;
    exports.LcuService = LcuService;
    exports.LcuUtils = LcuUtils;
    exports.LoadMapService = LoadMapService;
    exports.SELECTOR_LCU_MAPS_AZURE_MAP_ELEMENT = SELECTOR_LCU_MAPS_AZURE_MAP_ELEMENT;
    exports.ɵa = AtlasPopupDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lowcodeunit-lcu-maps-common.umd.js.map
