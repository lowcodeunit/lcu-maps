import Geometry = atlas.data.Geometry;
import BoundingBox = atlas.data.BoundingBox;

declare namespace atlas {
  import Feature = atlas.data.Feature;
  import Point = atlas.data.Point;
  import LineString = atlas.data.LineString;
  import Polygon = atlas.data.Polygon;
  import MultiPolygon = atlas.data.MultiPolygon;

  function getLanguage(): any;

  function getSessionId(): any;

  function getSubscriptionKey(): any;

  function getUserRegion(): any;

  function getVersion(): any;

  function isSupported(e: any): any;

  function setLanguage(e: any): any;

  function setSessionId(e: any): any;

  function setSubscriptionKey(e: string): any;

  function setUserRegion(e: any): any;

  function _hasSetSubscriptionKey(): any;

  function _hasSetSessionId(): any;

  function _hasSetLanguage(): any;

  function _hasSetUserRegion(): any;

  class Map {
    htmlElements: any;
    accessibleMapDelegate: any;
    events: any;
    imageSprite: any;
    markers: any;
    sources: any;
    layers: any;

    constructor(container: string,
                options: ServiceOptions & CameraOptions & StyleOptions & UserInteractionOptions)

    addCircles(e: any, t: any): any;

    addContror(e: any, t: any): any;

    clear(): any;

    dispote(): any;

    pixelsToPositions(e: any): any;

    positionsToPixels(e: any): any;

    stop(): any;


    addPins(pins: Feature[],
            options?: PinLayerOptions): any;


    addEventListener(type: string, layer: string, callback: any): any;
    addEventListener(type: string, callback: any): any;

    addLinestrings(line: Array<Feature>,
                   options?: LinestringLayerOptions): any;


    addIcon(id: string, icon: HTMLImageElement): any;

    addHtml(element: HTMLElement, position: atlas.data.Position): any;

    addPolygons(polygons: Array<any>, options?: PolygonLayerOptions): any;

    addRaster(tileSources: string[], options?: RasterLayerOptions): any;

    getCamera(): any; // Returns the camera's current properties.

    getCanvas(): any; // Returns the HTMLCanvasElement that the map is drawn to.

    getCanvasContainer(): any;

    getLayers(): any; // Returns a list of the map's layers from bottom to top.

    getMapContainer(): any; // Returns the HTMLElement that contains the map.

    getServiceOptions(): any; // Returns the service options with which the map control was initialized.

    getStyle(): any; // Returns the map control's current style settings.

    getTraffic(): any; // Return the map control's current traffic settings.

    getUserInteraction(): any; // Return the map control's current user interaction handler settings.

    remove(): any; // Clean up the map's resources. Map will not function correctly after calling this method.

    removeHtml(elementId: string): any; // Removes a custom HTMLElement from the map.

    removeEventListener(type: string, callback: any): any; // Remove an event listener from the map.

    removeEventListener(type: string, layer: string, callback: any): any; // Remove an event listener from a layer of the map.

    removeLayers(layerNames: string[]): any; // Removes a collection of layers from the map.

    resize(): any; // Resize the map according to the dimensions of its container element.

    setCamera(options?: CameraOptions & AnimationOptions): any;

    setCameraBounds(options?: CameraBoundsOptions): any; // Set the camera bounds of the map control.

    setStyle(options?: StyleOptions): any;

    setTraffic(options?: TrafficOptions): any; // Set the traffic options for the map. Any options not specified will default to their current values.


    setUserInteraction(options?: UserInteractionOptions): any;
  }

  class HtmlMarker {

    constructor(e?: any, f?: any)
    getOptions(): any;

    setOptions(t: any): any;

    togglePopup(): any;

    _addToMapt(e: any): any;

    _getId(): any;

    _removeFromMap(): any;
  }

  class Shape {

    constructor(t?: any, o?: any, r?: any);
    addProperty(e: any, t: any): any;

    getBounds(): any;

    getCoordinates(): any;

    getId(): any;

    getProperties(): any;

    getType(): any;

    isCircle(): any;

    setCoordinates(e: any): any;

    setProperties(t: any): any;

    toJson(): any;

    _getCoordinateDimensions(e: any): any;

    _handleCircle(): any;

    _setDataSource(e: any): any;

    _testCircle(e: any): any;

    _toJson(): any;
  }

  class Popup {
    options?: PopupOptions;

    constructor(options?: PopupOptions)

    open(map: Map): any;

    setPopupOptions(options?: PopupOptions): any;


  }

  namespace math {
    function boundingBoxToPolygon(t: any): any;

    function convertDistance(t: any, e: any, a: any, n: any): any;

    function getCardinalSpline(t: any, e: any, a: any, n: any): any;

    function getDestination(t: any, e: any, a: any, n: any): any;

    function getDistanceTo(t: any, e: any, a: any): any;

    function getEarthRadius(t: any): any;

    function getGeodesicPath(t: any, e: any): any;

    function getHeading(t: any, e: any): any;

    function getLengthOfPath(t: any, e: any): any;

    function getPositionAlongPath(t: any, e: any, a: any): any;

    function getRegularPolygonPath(t: any, e: any, a: any, n: any, s: any): any;

    function interpolate(t: any, e: any, a: any): any;

    function normalizeLatitude(t: any): any;

    function normalizeLongitude(t: any): any;
  }

  namespace source {
    type t = any;
    type o = any;
    type e = any;

    class DataSource {
      constructor(t?: any, o?: any);

      add(e: any, t?: any): any;

      clear(): any;

      constructor(t: any, o: any);

      dispose(): any;

      getOptions(): any;

      getShapeById(e: any): any;

      remove(e: any): any;

      setOptions(e: any): any;

      toJson(): any;

      _addNoUpdate(e: any, t: any): any;

      _addToSources(e: any, t: any): any;

      _buildSource(): any;

      _clearNoUpdate(): any;

      _removeFromSources(e: any): any;

      _toJson(): any;

      _updateShapesMap(e: any): any;

      _updateSource(): any;
    }

    class Source {
      constructor(e?: any)
    }

    class VectorTileSource {
      constructor(e?: any, o?: any);
    }
  }

  namespace layer {

    type e = any;
    type t = any;
    type i = any;
    type o = any;
    type n = any;


    class BubbleLayer {
      constructor(e: any, o: any, i: any)
    }

    class Layer {
      constructor(t: any);
    }

    class LineLayer {
      constructor(i: any, o: any, e: any);
    }

    class PolygonLayer {
      constructor(t: any, i: any, e: any);
    }

    class SymbolLayer {
      constructor(o: any, i: any, n: any);
    }

    class TileLayer {
      constructor(i: any, o: any);
    }

  }

  namespace data {
    class Point {
      coordinates: Position;

      constructor(coordinates: Position);
    }

    class Position {
      longitude: number;
      latitude: number;
      elevation?: number;

      constructor(longitude: number, latitude: number, elevation?: number)
    }

    class LineString {
      coordinates: Position[];
      bbox: BoundingBox;

      constructor(coordinates: Position[], bbox?: BoundingBox)
    }

    class MultiLineString {
      coordinates: Position[][];
      bbox?: BoundingBox;

      constructor(coordinates: Position[][], bbox?: BoundingBox);
    }


    type G = any;
    type P = any;

    class Feature {
      Point: G;
      properties?: P;
      id?: string;
      geometry: any;

      constructor(Point: G, properties?: P, id?: string)
    }

    class BoundingBox {  // An array that defines a shape whose edges follow lines of constant longitude,
      // latitude, and elevation. Array should contain 4 elements. [minLon, minLat, maxLon, maxLat]
      southwestPosition: Position;
      northeastPosition: Position;

      constructor(southwestPosition: Position, northeastPosition: Position);
    }

    class Polygon {
      coordinates: Position[][];
      bbox: BoundingBox;

      constructor(coordinates: Position[][], bbox?: BoundingBox)
    }

    class MultiPolygon {
      coordinates: Position[][][];
      bbox: BoundingBox;

      constructor(coordinates: Position[][][], bbox?: BoundingBox)
    }

    class MultiPoint {
      coordinates: Position[];
      bbox: BoundingBox;

      constructor(coordinates: Position[], bbox?: BoundingBox)
    }

    class Geometry {
      type: 'Point' | 'LineString' | 'MultiPoint' | 'Polygon' | 'MultiLineString' | 'MultiPolygon' | 'GeometryCollection' | string;
      TYPE: string;
    }
  }
}

declare interface ServiceOptions {
  'disable-telemetry'?: boolean; // default: false
  'session-id'?: string; // default: UUID.generate()
  'subscription-key': string; // default: undefined
}


declare interface CameraOptions {
  bearing?: number; // default: 0
  center?: atlas.data.Position; // default: new Position(0,0)
  maxZoom?: number; // default: 20
  minZoom?: number; // default: 1
  pitch?: number; // default: 0
  zoom?: number;  // default: 1
}

declare interface StyleOptions {
  language?: string;  // default: "NGT"
  style?: 'vector';  // default: 'vector'
  view?: 'Unified';  // default: 'Unified'
}

declare interface UserInteractionOptions {
  dblClickZoomInteraction?: boolean; // default: true
  dragPanInteraction?: boolean; // default: true
  dragRotateInteraction?: boolean; // default: true
  interactive?: boolean; // default: true
  keyboardInteraction?: boolean; // default: true
  scrollZoomInteraction?: boolean; // default: true
  touchInteraction?: boolean; // default: true
}

declare interface AnimationOptions {
  duration?: number; // 1000;
  type?: string; // "jump" | "ease" | "fly" = "jump"
}

declare interface PinProperties {
  icon?: 'pin-darkblue' | 'pin-blue' | 'pin-red' | 'pin-round-darkblue' | 'pin-round-blue' | 'pin-round-red' | 'none' | string;
  title?: string;
}

declare interface LayerOptions {
  before?: string; // default: undefined
  defer?: boolean; // default: false
  maxZoom?: number; // default: 20
  minZoom?: number; // default: 1
  name?: string; // default: undefined
  opacity?: number; // default: 1
  overwrite?: boolean; // default: false
}

declare interface LinestringLayerOptions {
  cap?: string; // default: "butt" | "round" | "square" = "butt"
  color?: string;
  join?: string; // "bevel" | "round" | "miter" = "miter"
  name?: string; // default: undefined
  width?: number; // default: 1
  overwrite?: boolean;
}

declare interface PinLayerOptions extends LayerOptions {
  cluster?: boolean; // default: true
  clusterIcon?: string; // default: undefined
  fontColor?: string; // default: '#000'
  fontSize?: number; // default: 14
  icon?: string; // 'pin-darkblue' | 'pin-blue' | 'pin-red'| 'pin-round-darkblue' | 'pin-round-blue' |// 'pin-round-red'| 'none'; default: 'pin-darkblue'
  iconSize?: number; // default: 1
  name?: string; // default: 'default-pins'
  textFont?: string; // 'SegoeUi-Bold' | 'SegoeUi-Regular' | 'StandardFont-Bold' | 'StandardFont-Regular'; default: 'SegoeUi-Regular'
  textOffset?: number[]; // default: [0,0]
  title?: string; // default: ''
}


declare interface PopupOptions {
  content?: HTMLElement; // default: document.createElement("span");
  pixelOffset?: number[]; // default: [0, 0]
  position?: atlas.data.Position; // default: new Position(0, 0)
}

declare interface PolygonProperties {
  color?: string; // The fill color of the polygons for the layer. Is used as the default if a fill color is not specified for a polygon.
  outlineColor?: string; // The outline color of the polygons for the layer. Is used as the default if an outline color is not specified for a polygon.
}

declare interface PolygonLayerOptions {
  color?: string; // The fill color of the polygons for the layer. Is used as the default if a fill color is not specified for a polygon.
  name?: string;
  outlineColor?: string; // The outline color of the polygons for the layer. Is used as the default if an outline color is not specified for a polygon.
}

declare interface RasterLayerOptions {
  name?: string;
}

declare interface CameraBoundsOptions {
  bounds?: BoundingBox; // The bounds of the map control's camera.
  padding?: number | number[]; // Padding in pixels for the given bounds. Either specify a number for the padding of all sides of the map or specify each side as an array of [top, right, bottom, left].
}

declare interface TrafficOptions {
  flow?: 'none' | 'relative' | 'absolute' | 'relative-delay'; // The type of traffic flow to display
  incidents?: boolean; // Whether to display incidents on the map.
}

