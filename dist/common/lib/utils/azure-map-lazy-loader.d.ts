export declare function _window(): any;
export declare type AssetType = 'script' | 'style';
export declare function loadSingleAsset(source: string, type: AssetType): Promise<unknown>;
export declare function azureMapLazyLoader(): Promise<unknown[]>;
