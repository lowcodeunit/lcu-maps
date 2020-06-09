import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { azureMapLazyLoader } from '../utils/azure-map-lazy-loader';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
var LoadMapService = /** @class */ (function () {
    function LoadMapService() {
        this.isLoaded = false;
        this.isComponentLoaded = false;
        this.loadedSubject = new Subject();
        this.loadedComponenet = new BehaviorSubject(false);
    }
    LoadMapService.prototype.load = function () {
        var _this = this;
        if (!this.isLoaded) {
            return fromPromise(azureMapLazyLoader().then(function () {
                _this.isLoaded = true;
                return _this.isLoaded;
            }));
        }
        else {
            return of(true);
        }
    };
    LoadMapService.prototype.observableComponent = function () {
        return this.loadedSubject.asObservable();
    };
    LoadMapService = __decorate([
        Injectable()
    ], LoadMapService);
    return LoadMapService;
}());
export { LoadMapService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1tYXAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bsb3djb2RldW5pdC9sY3UtbWFwcy1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbG9hZC1tYXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUMsZUFBZSxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDOUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBR3hEO0lBVUU7UUFQTyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUVqQyxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDdkMscUJBQWdCLEdBQUcsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFHOUMsQ0FBQztJQUdELDZCQUFJLEdBQUo7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU8sV0FBVyxDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxDQUFDO2dCQUMzQyxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckIsT0FBTyxLQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDTDthQUFNO1lBQ0wsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakI7SUFDSCxDQUFDO0lBRUQsNENBQW1CLEdBQW5CO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNDLENBQUM7SUEzQlUsY0FBYztRQUQxQixVQUFVLEVBQUU7T0FDQSxjQUFjLENBNEIxQjtJQUFELHFCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0E1QlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7YXp1cmVNYXBMYXp5TG9hZGVyfSBmcm9tICcuLi91dGlscy9henVyZS1tYXAtbGF6eS1sb2FkZXInO1xyXG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3R9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge2Zyb21Qcm9taXNlfSBmcm9tICdyeGpzL2ludGVybmFsLWNvbXBhdGliaWxpdHknO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9hZE1hcFNlcnZpY2Uge1xyXG5cclxuXHJcbiAgcHVibGljIGlzTG9hZGVkID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBpc0NvbXBvbmVudExvYWRlZCA9IGZhbHNlO1xyXG5cclxuICBsb2FkZWRTdWJqZWN0ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICBsb2FkZWRDb21wb25lbmV0ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcblxyXG4gIGxvYWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICBpZiAoIXRoaXMuaXNMb2FkZWQpIHtcclxuICAgICAgcmV0dXJuIGZyb21Qcm9taXNlKGF6dXJlTWFwTGF6eUxvYWRlcigpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzTG9hZGVkO1xyXG4gICAgICB9KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gb2YodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvYnNlcnZhYmxlQ29tcG9uZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMubG9hZGVkU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcbn1cclxuIl19