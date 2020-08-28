import { __extends } from "tslib";
import { Injectable, Injector } from '@angular/core';
import { StateContext } from '@lcu/common';
import * as i0 from "@angular/core";
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
        { type: Injector }
    ]; };
    LcuManagementStateContext.ɵprov = i0.ɵɵdefineInjectable({ factory: function LcuManagementStateContext_Factory() { return new LcuManagementStateContext(i0.ɵɵinject(i0.INJECTOR)); }, token: LcuManagementStateContext, providedIn: "root" });
    LcuManagementStateContext.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    LcuManagementStateContext.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return LcuManagementStateContext;
}(StateContext));
export { LcuManagementStateContext };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGN1LW1hbmFnZW1lbnQtc3RhdGUuY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bsb3djb2RldW5pdC9sY3UtbWFwcy1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc3RhdGUvbGN1LW1hbmFnZW1lbnQtc3RhdGUuY29udGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFHM0M7SUFHK0MsNkNBQWdDO0lBRTNFLGVBQWU7SUFDZixtQ0FBc0IsUUFBa0I7UUFBeEMsWUFDSSxrQkFBTSxRQUFRLENBQUMsU0FDbEI7UUFGcUIsY0FBUSxHQUFSLFFBQVEsQ0FBVTs7SUFFeEMsQ0FBQztJQUdELGNBQWM7SUFDUCw4Q0FBVSxHQUFqQixVQUFrQixFQUFVO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDVCxTQUFTLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFLEVBQUU7YUFDWjtZQUNELElBQUksRUFBRSxZQUFZO1NBQ3JCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxXQUFXO0lBQ0QsZ0RBQVksR0FBdEI7UUFDSSxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBd0IsQ0FBQztJQUNuRCxDQUFDO0lBRVMsZ0RBQVksR0FBdEI7UUFDSSxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRVMsaURBQWEsR0FBdkI7UUFDSSxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDOztnQkExQitCLFFBQVE7Ozs7Z0JBTjNDLFVBQVUsU0FBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OztnQkFOb0IsUUFBUTs7b0NBQTdCO0NBcUNDLEFBakNELENBRytDLFlBQVksR0E4QjFEO1NBOUJZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0YXRlQ29udGV4dCB9IGZyb20gJ0BsY3UvY29tbW9uJztcclxuaW1wb3J0IHsgTGN1TWFuYWdlbWVudFN0YXRlIH0gZnJvbSAnLi9sY3UtbWFuYWdlbWVudC5zdGF0ZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExjdU1hbmFnZW1lbnRTdGF0ZUNvbnRleHQgZXh0ZW5kcyBTdGF0ZUNvbnRleHQ8TGN1TWFuYWdlbWVudFN0YXRlPiB7XHJcblxyXG4gICAgLy8gQ29uc3RydWN0b3JzXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICAgICAgc3VwZXIoaW5qZWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLy8gQVBJIE1ldGhvZHNcclxuICAgIHB1YmxpYyBHZXRMY3VCeUlkKGlkOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkV4ZWN1dGUoe1xyXG4gICAgICAgICAgICBBcmd1bWVudHM6IHtcclxuICAgICAgICAgICAgICAgIExjdUlkOiBpZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBUeXBlOiAnR2V0TGN1QnlJZCdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAgSGVscGVyc1xyXG4gICAgcHJvdGVjdGVkIGRlZmF1bHRWYWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4geyBMb2FkaW5nOiB0cnVlIH0gYXMgTGN1TWFuYWdlbWVudFN0YXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcm90ZWN0ZWQgbG9hZFN0YXRlS2V5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdtYWluJztcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgbG9hZFN0YXRlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnbGN1JztcclxuICAgIH1cclxufVxyXG4iXX0=