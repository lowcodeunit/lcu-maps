import { Component, Input, Output, EventEmitter } from '@angular/core';
var LcuComponent = /** @class */ (function () {
    function LcuComponent() {
        this.cardSelected = new EventEmitter();
    }
    LcuComponent.prototype.ngOnInit = function () { };
    LcuComponent.prototype.SelectCard = function (url) {
        this.cardSelected.emit();
        if (url) {
            window.open(url);
        }
    };
    LcuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lcu-lcu',
                    template: "<mat-card lcu id=\"lcuCard{{card.LcuId}}\" class=\"lcu-card\" (click)=\"SelectCard(card.Url)\">\r\n    <mat-card-header>\r\n        <div mat-card-avatar class=\"lcu-card-avatar\">\r\n        <mat-icon color=\"primary\">{{card.Icon}}</mat-icon>\r\n        </div>\r\n        <mat-card-title class=\"paragraph-title\">{{card.Title}}</mat-card-title>\r\n        <mat-card-subtitle class=\"plain-text\">{{card.Subtitle}}</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content class=\"lcu-card-content\">\r\n        {{card.Content}}\r\n    </mat-card-content>\r\n</mat-card>\r\n  ",
                    styles: [".lcu-card{cursor:pointer;display:inline-block;margin:5px;min-height:250px}.lcu-card .lcu-card-avatar .mat-icon{font-size:40px}.lcu-card .lcu-card-content{text-align:justify;padding:5px;line-height:20px}"]
                },] }
    ];
    LcuComponent.ctorParameters = function () { return []; };
    LcuComponent.propDecorators = {
        card: [{ type: Input }],
        cardSelected: [{ type: Output }]
    };
    return LcuComponent;
}());
export { LcuComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGN1LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bsb3djb2RldW5pdC9sY3UtbWFwcy1jb21tb24vIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvbGN1L2xjdS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcvRTtJQVdFO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBQzlDLENBQUM7SUFFTSwrQkFBUSxHQUFmLGNBQTBCLENBQUM7SUFFcEIsaUNBQVUsR0FBakIsVUFBa0IsR0FBWTtRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXpCLElBQUksR0FBRyxFQUFFO1lBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNsQjtJQUNILENBQUM7O2dCQXZCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLDBsQkFBbUM7O2lCQUVwQzs7Ozt1QkFHRSxLQUFLOytCQUVMLE1BQU07O0lBZ0JULG1CQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0FwQlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTGN1TW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvbGN1Lm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGN1LWxjdScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xjdS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbGN1LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExjdUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBjYXJkOiBMY3VNb2RlbDtcclxuXHJcbiAgQE91dHB1dCgpIHB1YmxpYyBjYXJkU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuY2FyZFNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7IH1cclxuXHJcbiAgcHVibGljIFNlbGVjdENhcmQodXJsPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmNhcmRTZWxlY3RlZC5lbWl0KCk7XHJcblxyXG4gICAgaWYgKHVybCkge1xyXG4gICAgICB3aW5kb3cub3Blbih1cmwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19