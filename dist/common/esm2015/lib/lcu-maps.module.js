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
export class LcuMapsModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGN1LW1hcHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGxvd2NvZGV1bml0L2xjdS1tYXBzLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9sY3UtbWFwcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzFELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBd0J6RSxNQUFNLE9BQU8sYUFBYTtJQUN4QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUUsQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDO1NBQ3hDLENBQUM7SUFDSixDQUFDOzs7WUE1QkYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixZQUFZO29CQUNaLFlBQVk7b0JBQ1osK0JBQStCO29CQUMvQixtQkFBbUI7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxrQkFBa0I7b0JBQ2xCLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixnQkFBZ0I7b0JBQ2hCLGNBQWM7aUJBQ2Y7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWTtvQkFDWiwrQkFBK0I7b0JBQy9CLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsZUFBZSxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2FkTWFwU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbG9hZC1tYXAuc2VydmljZSc7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBGYXRoeW1TaGFyZWRNb2R1bGUsIE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnQGxjdS9jb21tb24nO1xyXG5pbXBvcnQgeyBMY3VTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9sY3Uuc2VydmljZSc7XHJcbmltcG9ydCB7IExjdUNvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbHMvbGN1L2xjdS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMY3VEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbGN1LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IExjdU1hcHNBenVyZU1hcEVsZW1lbnRDb21wb25lbnQgfSBmcm9tICcuL2VsZW1lbnRzL2F6dXJlLW1hcC9henVyZS1tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXRsYXNQb3B1cERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9hdGxhcy1wb3B1cC5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIExjdUNvbXBvbmVudCxcclxuICAgIExjdURpcmVjdGl2ZSxcclxuICAgIExjdU1hcHNBenVyZU1hcEVsZW1lbnRDb21wb25lbnQsXHJcbiAgICBBdGxhc1BvcHVwRGlyZWN0aXZlXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBGYXRoeW1TaGFyZWRNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBGbGV4TGF5b3V0TW9kdWxlLFxyXG4gICAgTWF0ZXJpYWxNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIExjdUNvbXBvbmVudCxcclxuICAgIExjdURpcmVjdGl2ZSxcclxuICAgIExjdU1hcHNBenVyZU1hcEVsZW1lbnRDb21wb25lbnQsXHJcbiAgICBBdGxhc1BvcHVwRGlyZWN0aXZlXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtMY3VNYXBzQXp1cmVNYXBFbGVtZW50Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGN1TWFwc01vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxMY3VNYXBzTW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTGN1TWFwc01vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbTGN1U2VydmljZSwgTG9hZE1hcFNlcnZpY2VdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=