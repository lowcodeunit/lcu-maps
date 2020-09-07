import { Injectable } from '@angular/core';
import { azureMapLazyLoader } from '../utils/azure-map-lazy-loader';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
export class LoadMapService {
    constructor() {
        this.isLoaded = false;
        this.isComponentLoaded = false;
        this.loadedSubject = new Subject();
        this.loadedComponenet = new BehaviorSubject(false);
    }
    load() {
        if (!this.isLoaded) {
            return fromPromise(azureMapLazyLoader().then(() => {
                this.isLoaded = true;
                return this.isLoaded;
            }));
        }
        else {
            return of(true);
        }
    }
    observableComponent() {
        return this.loadedSubject.asObservable();
    }
}
LoadMapService.decorators = [
    { type: Injectable }
];
LoadMapService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1tYXAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bsb3djb2RldW5pdC9sY3UtbWFwcy1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbG9hZC1tYXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxlQUFlLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM5RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFHeEQsTUFBTSxPQUFPLGNBQWM7SUFVekI7UUFQTyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUVqQyxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDdkMscUJBQWdCLEdBQUcsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFHOUMsQ0FBQztJQUdELElBQUk7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2hELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNMO2FBQU07WUFDTCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQjtJQUNILENBQUM7SUFFRCxtQkFBbUI7UUFDakIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNDLENBQUM7OztZQTVCRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHthenVyZU1hcExhenlMb2FkZXJ9IGZyb20gJy4uL3V0aWxzL2F6dXJlLW1hcC1sYXp5LWxvYWRlcic7XHJcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7ZnJvbVByb21pc2V9IGZyb20gJ3J4anMvaW50ZXJuYWwtY29tcGF0aWJpbGl0eSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2FkTWFwU2VydmljZSB7XHJcblxyXG5cclxuICBwdWJsaWMgaXNMb2FkZWQgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIGlzQ29tcG9uZW50TG9hZGVkID0gZmFsc2U7XHJcblxyXG4gIGxvYWRlZFN1YmplY3QgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gIGxvYWRlZENvbXBvbmVuZXQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuXHJcbiAgbG9hZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIGlmICghdGhpcy5pc0xvYWRlZCkge1xyXG4gICAgICByZXR1cm4gZnJvbVByb21pc2UoYXp1cmVNYXBMYXp5TG9hZGVyKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNMb2FkZWQ7XHJcbiAgICAgIH0pKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBvZih0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9ic2VydmFibGVDb21wb25lbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2FkZWRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=