export class AmFeature {
  public DataElement: any; // Data element, your raw data
  public AtlasFeature: atlas.data.Feature; // Items to inject into map
  public Layer: string; // Layer for different object for separate object
  public PinConfig: PinLayerOptions;
  public Extras?: any;
}
