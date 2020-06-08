import { __decorate } from "tslib";
import { Injectable, Injector } from '@angular/core';
import { StateContext } from '@lcu/common';
import * as i0 from "@angular/core";
let LcuManagementStateContext = class LcuManagementStateContext extends StateContext {
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
};
LcuManagementStateContext.ctorParameters = () => [
    { type: Injector }
];
LcuManagementStateContext.ɵprov = i0.ɵɵdefineInjectable({ factory: function LcuManagementStateContext_Factory() { return new LcuManagementStateContext(i0.ɵɵinject(i0.INJECTOR)); }, token: LcuManagementStateContext, providedIn: "root" });
LcuManagementStateContext = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LcuManagementStateContext);
export { LcuManagementStateContext };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGN1LW1hbmFnZW1lbnQtc3RhdGUuY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bsb3djb2RldW5pdC9sY3UtbWFwcy1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc3RhdGUvbGN1LW1hbmFnZW1lbnQtc3RhdGUuY29udGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFNM0MsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBMEIsU0FBUSxZQUFnQztJQUUzRSxlQUFlO0lBQ2YsWUFBc0IsUUFBa0I7UUFDcEMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBREUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUV4QyxDQUFDO0lBR0QsY0FBYztJQUNQLFVBQVUsQ0FBQyxFQUFVO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDVCxTQUFTLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFLEVBQUU7YUFDWjtZQUNELElBQUksRUFBRSxZQUFZO1NBQ3JCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxXQUFXO0lBQ0QsWUFBWTtRQUNsQixPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBd0IsQ0FBQztJQUNuRCxDQUFDO0lBRVMsWUFBWTtRQUNsQixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRVMsYUFBYTtRQUNuQixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0NBQ0osQ0FBQTs7WUEzQm1DLFFBQVE7OztBQUgvQix5QkFBeUI7SUFIckMsVUFBVSxDQUFDO1FBQ1IsVUFBVSxFQUFFLE1BQU07S0FDckIsQ0FBQztHQUNXLHlCQUF5QixDQThCckM7U0E5QlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RhdGVDb250ZXh0IH0gZnJvbSAnQGxjdS9jb21tb24nO1xyXG5pbXBvcnQgeyBMY3VNYW5hZ2VtZW50U3RhdGUgfSBmcm9tICcuL2xjdS1tYW5hZ2VtZW50LnN0YXRlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTGN1TWFuYWdlbWVudFN0YXRlQ29udGV4dCBleHRlbmRzIFN0YXRlQ29udGV4dDxMY3VNYW5hZ2VtZW50U3RhdGU+IHtcclxuXHJcbiAgICAvLyBDb25zdHJ1Y3RvcnNcclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgICAgICBzdXBlcihpbmplY3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAvLyBBUEkgTWV0aG9kc1xyXG4gICAgcHVibGljIEdldExjdUJ5SWQoaWQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuRXhlY3V0ZSh7XHJcbiAgICAgICAgICAgIEFyZ3VtZW50czoge1xyXG4gICAgICAgICAgICAgICAgTGN1SWQ6IGlkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFR5cGU6ICdHZXRMY3VCeUlkJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICBIZWxwZXJzXHJcbiAgICBwcm90ZWN0ZWQgZGVmYXVsdFZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB7IExvYWRpbmc6IHRydWUgfSBhcyBMY3VNYW5hZ2VtZW50U3RhdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByb3RlY3RlZCBsb2FkU3RhdGVLZXkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ21haW4nO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBsb2FkU3RhdGVOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdsY3UnO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==