import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FathymSharedModule, LCUServiceSettings } from '@lcu/common';
import { environment } from '../environments/environment';
import { LcuMapsModule, LcuMapsAzureMapElementComponent, SELECTOR_LCU_MAPS_AZURE_MAP_ELEMENT } from '@lowcodeunit/lcu-maps-common';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FathymSharedModule,
    LcuMapsModule.forRoot()
  ],
  providers: [
    {
      provide: LCUServiceSettings,
      useValue: FathymSharedModule.DefaultServiceSettings(environment)
    }
  ],
  exports: [LcuMapsModule]
})
export class AppModule implements DoBootstrap {
	constructor(protected injector: Injector) {}

	public ngDoBootstrap() {
		const azureMap = createCustomElement(LcuMapsAzureMapElementComponent, { injector: this.injector });

		customElements.define(SELECTOR_LCU_MAPS_AZURE_MAP_ELEMENT, azureMap);
	}
}
