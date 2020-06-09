import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let LcuComponent = class LcuComponent {
    constructor() {
        this.cardSelected = new EventEmitter();
    }
    ngOnInit() { }
    SelectCard(url) {
        this.cardSelected.emit();
        if (url) {
            window.open(url);
        }
    }
};
__decorate([
    Input()
], LcuComponent.prototype, "card", void 0);
__decorate([
    Output()
], LcuComponent.prototype, "cardSelected", void 0);
LcuComponent = __decorate([
    Component({
        selector: 'lcu-lcu',
        template: "<mat-card lcu id=\"lcuCard{{card.LcuId}}\" class=\"lcu-card\" (click)=\"SelectCard(card.Url)\">\r\n    <mat-card-header>\r\n        <div mat-card-avatar class=\"lcu-card-avatar\">\r\n        <mat-icon color=\"primary\">{{card.Icon}}</mat-icon>\r\n        </div>\r\n        <mat-card-title class=\"paragraph-title\">{{card.Title}}</mat-card-title>\r\n        <mat-card-subtitle class=\"plain-text\">{{card.Subtitle}}</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content class=\"lcu-card-content\">\r\n        {{card.Content}}\r\n    </mat-card-content>\r\n</mat-card>\r\n  ",
        styles: [".lcu-card{cursor:pointer;display:inline-block;margin:5px;min-height:250px}.lcu-card .lcu-card-avatar .mat-icon{font-size:40px}.lcu-card .lcu-card-content{text-align:justify;padding:5px;line-height:20px}"]
    })
], LcuComponent);
export { LcuComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGN1LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bsb3djb2RldW5pdC9sY3UtbWFwcy1jb21tb24vIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvbGN1L2xjdS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRL0UsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQU12QjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUM5QyxDQUFDO0lBRU0sUUFBUSxLQUFXLENBQUM7SUFFcEIsVUFBVSxDQUFDLEdBQVk7UUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV6QixJQUFJLEdBQUcsRUFBRTtZQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEI7SUFDSCxDQUFDO0NBRUYsQ0FBQTtBQWxCVTtJQUFSLEtBQUssRUFBRTswQ0FBdUI7QUFFckI7SUFBVCxNQUFNLEVBQUU7a0RBQXdDO0FBSnRDLFlBQVk7SUFMeEIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFNBQVM7UUFDbkIsMGxCQUFtQzs7S0FFcEMsQ0FBQztHQUNXLFlBQVksQ0FvQnhCO1NBcEJZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExjdU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xjdS5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xjdS1sY3UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9sY3UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xjdS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMY3VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgY2FyZDogTGN1TW9kZWw7XHJcblxyXG4gIEBPdXRwdXQoKSBwdWJsaWMgY2FyZFNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNhcmRTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQgeyB9XHJcblxyXG4gIHB1YmxpYyBTZWxlY3RDYXJkKHVybD86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5jYXJkU2VsZWN0ZWQuZW1pdCgpO1xyXG5cclxuICAgIGlmICh1cmwpIHtcclxuICAgICAgd2luZG93Lm9wZW4odXJsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==