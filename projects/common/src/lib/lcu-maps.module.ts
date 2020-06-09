import { LoadMapService } from './services/load-map.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { LcuService } from './services/lcu.service';
import { LcuComponent } from './controls/lcu/lcu.component';
import { LcuDirective } from './directives/lcu.directive';
import { LcuMapsAzureMapElementComponent } from './elements/azure-map/azure-map.component';
import { AtlasPopupDirective } from './directives/atlas-popup.directive';

@NgModule({
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
export class LcuMapsModule {
  static forRoot(): ModuleWithProviders<LcuMapsModule> {
    return {
      ngModule: LcuMapsModule,
      providers: [LcuService, LoadMapService]
    };
  }
}
