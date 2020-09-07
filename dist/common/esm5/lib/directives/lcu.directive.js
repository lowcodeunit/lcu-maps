import { Directive, OnInit, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ThemeColorPickerService } from '@lcu/common';
var LcuDirective = /** @class */ (function () {
    function LcuDirective(elRef, renderer, themeService) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.themeService = themeService;
    }
    LcuDirective.prototype.onMouseEnter = function () {
        this.hoverEffect(this.getThemeColor(), 'underline');
    };
    LcuDirective.prototype.onMouseLeave = function () {
        this.hoverEffect('', 'initial');
    };
    LcuDirective.prototype.ngOnInit = function () {
        this.currentColor = this.getThemeColor();
    };
    LcuDirective.prototype.getThemeColor = function () {
        var theme = this.themeService.GetColorClass().value;
        return 'color-swatch-' + theme.substring(theme.indexOf('-') + 1, theme.lastIndexOf('-'));
    };
    LcuDirective.prototype.hoverEffect = function (color, decoration) {
        var title = this.elRef.nativeElement.querySelector('.mat-card-title');
        this.renderer.setStyle(title, 'text-decoration', decoration);
        if (!color && this.currentColor) {
            this.renderer.removeClass(title, this.currentColor);
        }
        else if (color !== this.currentColor) {
            this.renderer.removeClass(title, this.currentColor);
        }
        if (color) {
            this.renderer.addClass(title, color);
            this.currentColor = color;
        }
    };
    LcuDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ThemeColorPickerService }
    ]; };
    LcuDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[lcu]'
                },] }
    ];
    LcuDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ThemeColorPickerService }
    ]; };
    LcuDirective.propDecorators = {
        onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
        onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
    };
    return LcuDirective;
}());
export { LcuDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGN1LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bsb3djb2RldW5pdC9sY3UtbWFwcy1jb21tb24vIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9sY3UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV0RDtJQU9FLHNCQUNVLEtBQWlCLEVBQ2pCLFFBQW1CLEVBQ25CLFlBQXFDO1FBRnJDLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixpQkFBWSxHQUFaLFlBQVksQ0FBeUI7SUFDM0MsQ0FBQztJQUV1QixtQ0FBWSxHQUF4QztRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFMkIsbUNBQVksR0FBeEM7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sK0JBQVEsR0FBZjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFTyxvQ0FBYSxHQUFyQjtRQUNFLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ3RELE9BQU8sZUFBZSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFFTyxrQ0FBVyxHQUFuQixVQUFvQixLQUFhLEVBQUUsVUFBa0I7UUFDbkQsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3JEO2FBQU0sSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3JEO1FBRUQsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDM0I7SUFDSCxDQUFDOztnQkFwQ2dCLFVBQVU7Z0JBQ1AsU0FBUztnQkFDTCx1QkFBdUI7OztnQkFWaEQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxPQUFPO2lCQUNsQjs7O2dCQUwyQixVQUFVO2dCQUFnQixTQUFTO2dCQUN0RCx1QkFBdUI7OzsrQkFlN0IsWUFBWSxTQUFDLFlBQVk7K0JBSXpCLFlBQVksU0FBQyxZQUFZOztJQTZCNUIsbUJBQUM7Q0FBQSxBQTlDRCxJQThDQztTQTNDWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRoZW1lQ29sb3JQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnQGxjdS9jb21tb24nO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbGN1XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIExjdURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHByaXZhdGUgY3VycmVudENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgdGhlbWVTZXJ2aWNlOiBUaGVtZUNvbG9yUGlja2VyU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKSBvbk1vdXNlRW50ZXIoKSB7XHJcbiAgICB0aGlzLmhvdmVyRWZmZWN0KHRoaXMuZ2V0VGhlbWVDb2xvcigpLCAndW5kZXJsaW5lJyk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJykgb25Nb3VzZUxlYXZlKCkge1xyXG4gICAgdGhpcy5ob3ZlckVmZmVjdCgnJywgJ2luaXRpYWwnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY3VycmVudENvbG9yID0gdGhpcy5nZXRUaGVtZUNvbG9yKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRoZW1lQ29sb3IoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHRoZW1lID0gdGhpcy50aGVtZVNlcnZpY2UuR2V0Q29sb3JDbGFzcygpLnZhbHVlO1xyXG4gICAgcmV0dXJuICdjb2xvci1zd2F0Y2gtJyArIHRoZW1lLnN1YnN0cmluZyh0aGVtZS5pbmRleE9mKCctJykgKyAxLCB0aGVtZS5sYXN0SW5kZXhPZignLScpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaG92ZXJFZmZlY3QoY29sb3I6IHN0cmluZywgZGVjb3JhdGlvbjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubWF0LWNhcmQtdGl0bGUnKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGl0bGUsICd0ZXh0LWRlY29yYXRpb24nLCBkZWNvcmF0aW9uKTtcclxuXHJcbiAgICBpZiAoIWNvbG9yICYmIHRoaXMuY3VycmVudENvbG9yKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGl0bGUsIHRoaXMuY3VycmVudENvbG9yKTtcclxuICAgIH0gZWxzZSBpZiAoY29sb3IgIT09IHRoaXMuY3VycmVudENvbG9yKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGl0bGUsIHRoaXMuY3VycmVudENvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29sb3IpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aXRsZSwgY29sb3IpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRDb2xvciA9IGNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19