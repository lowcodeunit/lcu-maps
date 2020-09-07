import { LoadMapService } from './services/load-map.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { LcuService } from './services/lcu.service';
import { LcuComponent } from './controls/lcu/lcu.component';
import { LcuDirective } from './directives/lcu.directive';
import { LcuMapsAzureMapElementComponent } from './elements/azure-map/azure-map.component';
import { AtlasPopupDirective } from './directives/atlas-popup.directive';
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
    return LcuMapsModule;
}());
export { LcuMapsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGN1LW1hcHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGxvd2NvZGV1bml0L2xjdS1tYXBzLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9sY3UtbWFwcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzFELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRXpFO0lBQUE7SUE2QkEsQ0FBQztJQU5RLHFCQUFPLEdBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFLENBQUMsVUFBVSxFQUFFLGNBQWMsQ0FBQztTQUN4QyxDQUFDO0lBQ0osQ0FBQzs7Z0JBNUJGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osWUFBWTt3QkFDWixZQUFZO3dCQUNaLCtCQUErQjt3QkFDL0IsbUJBQW1CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asa0JBQWtCO3dCQUNsQixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3dCQUNoQixjQUFjO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFlBQVk7d0JBQ1osK0JBQStCO3dCQUMvQixtQkFBbUI7cUJBQ3BCO29CQUNELGVBQWUsRUFBRSxDQUFDLCtCQUErQixDQUFDO2lCQUNuRDs7SUFRRCxvQkFBQztDQUFBLEFBN0JELElBNkJDO1NBUFksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvYWRNYXBTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9sb2FkLW1hcC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XHJcbmltcG9ydCB7IEZhdGh5bVNoYXJlZE1vZHVsZSwgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICdAbGN1L2NvbW1vbic7XHJcbmltcG9ydCB7IExjdVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2xjdS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTGN1Q29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9scy9sY3UvbGN1LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExjdURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9sY3UuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTGN1TWFwc0F6dXJlTWFwRWxlbWVudENvbXBvbmVudCB9IGZyb20gJy4vZWxlbWVudHMvYXp1cmUtbWFwL2F6dXJlLW1hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdGxhc1BvcHVwRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2F0bGFzLXBvcHVwLmRpcmVjdGl2ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTGN1Q29tcG9uZW50LFxyXG4gICAgTGN1RGlyZWN0aXZlLFxyXG4gICAgTGN1TWFwc0F6dXJlTWFwRWxlbWVudENvbXBvbmVudCxcclxuICAgIEF0bGFzUG9wdXBEaXJlY3RpdmVcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIEZhdGh5bVNoYXJlZE1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIEZsZXhMYXlvdXRNb2R1bGUsXHJcbiAgICBNYXRlcmlhbE1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTGN1Q29tcG9uZW50LFxyXG4gICAgTGN1RGlyZWN0aXZlLFxyXG4gICAgTGN1TWFwc0F6dXJlTWFwRWxlbWVudENvbXBvbmVudCxcclxuICAgIEF0bGFzUG9wdXBEaXJlY3RpdmVcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0xjdU1hcHNBenVyZU1hcEVsZW1lbnRDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMY3VNYXBzTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPExjdU1hcHNNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBMY3VNYXBzTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtMY3VTZXJ2aWNlLCBMb2FkTWFwU2VydmljZV1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==