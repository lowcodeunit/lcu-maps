import { Injectable, Injector } from '@angular/core';
import { StateContext } from '@lcu/common';
import * as i0 from "@angular/core";
export class LcuManagementStateContext extends StateContext {
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
LcuManagementStateContext.ɵprov = i0.ɵɵdefineInjectable({ factory: function LcuManagementStateContext_Factory() { return new LcuManagementStateContext(i0.ɵɵinject(i0.INJECTOR)); }, token: LcuManagementStateContext, providedIn: "root" });
LcuManagementStateContext.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
LcuManagementStateContext.ctorParameters = () => [
    { type: Injector }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGN1LW1hbmFnZW1lbnQtc3RhdGUuY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bsb3djb2RldW5pdC9sY3UtbWFwcy1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc3RhdGUvbGN1LW1hbmFnZW1lbnQtc3RhdGUuY29udGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQU0zQyxNQUFNLE9BQU8seUJBQTBCLFNBQVEsWUFBZ0M7SUFFM0UsZUFBZTtJQUNmLFlBQXNCLFFBQWtCO1FBQ3BDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQURFLGFBQVEsR0FBUixRQUFRLENBQVU7SUFFeEMsQ0FBQztJQUdELGNBQWM7SUFDUCxVQUFVLENBQUMsRUFBVTtRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsU0FBUyxFQUFFO2dCQUNQLEtBQUssRUFBRSxFQUFFO2FBQ1o7WUFDRCxJQUFJLEVBQUUsWUFBWTtTQUNyQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsV0FBVztJQUNELFlBQVk7UUFDbEIsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQXdCLENBQUM7SUFDbkQsQ0FBQztJQUVTLFlBQVk7UUFDbEIsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVTLGFBQWE7UUFDbkIsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQzs7O1lBMUIrQixRQUFROzs7O1lBTjNDLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7O1lBTm9CLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdGF0ZUNvbnRleHQgfSBmcm9tICdAbGN1L2NvbW1vbic7XHJcbmltcG9ydCB7IExjdU1hbmFnZW1lbnRTdGF0ZSB9IGZyb20gJy4vbGN1LW1hbmFnZW1lbnQuc3RhdGUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMY3VNYW5hZ2VtZW50U3RhdGVDb250ZXh0IGV4dGVuZHMgU3RhdGVDb250ZXh0PExjdU1hbmFnZW1lbnRTdGF0ZT4ge1xyXG5cclxuICAgIC8vIENvbnN0cnVjdG9yc1xyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG4gICAgICAgIHN1cGVyKGluamVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC8vIEFQSSBNZXRob2RzXHJcbiAgICBwdWJsaWMgR2V0TGN1QnlJZChpZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5FeGVjdXRlKHtcclxuICAgICAgICAgICAgQXJndW1lbnRzOiB7XHJcbiAgICAgICAgICAgICAgICBMY3VJZDogaWRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgVHlwZTogJ0dldExjdUJ5SWQnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gIEhlbHBlcnNcclxuICAgIHByb3RlY3RlZCBkZWZhdWx0VmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgTG9hZGluZzogdHJ1ZSB9IGFzIExjdU1hbmFnZW1lbnRTdGF0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJvdGVjdGVkIGxvYWRTdGF0ZUtleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnbWFpbic7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGxvYWRTdGF0ZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ2xjdSc7XHJcbiAgICB9XHJcbn1cclxuIl19