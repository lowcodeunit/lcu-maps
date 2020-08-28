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
    LoadMapService.decorators = [
        { type: Injectable }
    ];
    LoadMapService.ctorParameters = function () { return []; };
    return LoadMapService;
}());
export { LoadMapService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1tYXAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bsb3djb2RldW5pdC9sY3UtbWFwcy1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbG9hZC1tYXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxlQUFlLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM5RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFFeEQ7SUFXRTtRQVBPLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBRWpDLGtCQUFhLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUN2QyxxQkFBZ0IsR0FBRyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUc5QyxDQUFDO0lBR0QsNkJBQUksR0FBSjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTyxXQUFXLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQzNDLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixPQUFPLEtBQUksQ0FBQyxRQUFRLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNMO2FBQU07WUFDTCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQjtJQUNILENBQUM7SUFFRCw0Q0FBbUIsR0FBbkI7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0MsQ0FBQzs7Z0JBNUJGLFVBQVU7OztJQTZCWCxxQkFBQztDQUFBLEFBN0JELElBNkJDO1NBNUJZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge2F6dXJlTWFwTGF6eUxvYWRlcn0gZnJvbSAnLi4vdXRpbHMvYXp1cmUtbWFwLWxhenktbG9hZGVyJztcclxuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mLCBTdWJqZWN0fSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtmcm9tUHJvbWlzZX0gZnJvbSAncnhqcy9pbnRlcm5hbC1jb21wYXRpYmlsaXR5JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvYWRNYXBTZXJ2aWNlIHtcclxuXHJcblxyXG4gIHB1YmxpYyBpc0xvYWRlZCA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgaXNDb21wb25lbnRMb2FkZWQgPSBmYWxzZTtcclxuXHJcbiAgbG9hZGVkU3ViamVjdCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgbG9hZGVkQ29tcG9uZW5ldCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG5cclxuICBsb2FkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgaWYgKCF0aGlzLmlzTG9hZGVkKSB7XHJcbiAgICAgIHJldHVybiBmcm9tUHJvbWlzZShhenVyZU1hcExhenlMb2FkZXIoKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0xvYWRlZDtcclxuICAgICAgfSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG9mKHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb2JzZXJ2YWJsZUNvbXBvbmVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmxvYWRlZFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==