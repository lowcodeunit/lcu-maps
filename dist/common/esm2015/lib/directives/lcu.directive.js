import { Directive, OnInit, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ThemeColorPickerService } from '@lcu/common';
export class LcuDirective {
    constructor(elRef, renderer, themeService) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.themeService = themeService;
    }
    onMouseEnter() {
        this.hoverEffect(this.getThemeColor(), 'underline');
    }
    onMouseLeave() {
        this.hoverEffect('', 'initial');
    }
    ngOnInit() {
        this.currentColor = this.getThemeColor();
    }
    getThemeColor() {
        const theme = this.themeService.GetColorClass().value;
        return 'color-swatch-' + theme.substring(theme.indexOf('-') + 1, theme.lastIndexOf('-'));
    }
    hoverEffect(color, decoration) {
        const title = this.elRef.nativeElement.querySelector('.mat-card-title');
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
    }
}
LcuDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ThemeColorPickerService }
];
LcuDirective.decorators = [
    { type: Directive, args: [{
                selector: '[lcu]'
            },] }
];
LcuDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ThemeColorPickerService }
];
LcuDirective.propDecorators = {
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGN1LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bsb3djb2RldW5pdC9sY3UtbWFwcy1jb21tb24vIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9sY3UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUt0RCxNQUFNLE9BQU8sWUFBWTtJQUl2QixZQUNVLEtBQWlCLEVBQ2pCLFFBQW1CLEVBQ25CLFlBQXFDO1FBRnJDLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixpQkFBWSxHQUFaLFlBQVksQ0FBeUI7SUFDM0MsQ0FBQztJQUV1QixZQUFZO1FBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFMkIsWUFBWTtRQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sUUFBUTtRQUNiLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFTyxhQUFhO1FBQ25CLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ3RELE9BQU8sZUFBZSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFFTyxXQUFXLENBQUMsS0FBYSxFQUFFLFVBQWtCO1FBQ25ELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNyRDthQUFNLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNyRDtRQUVELElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7O1lBcENnQixVQUFVO1lBQ1AsU0FBUztZQUNMLHVCQUF1Qjs7O1lBVmhELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsT0FBTzthQUNsQjs7O1lBTDJCLFVBQVU7WUFBZ0IsU0FBUztZQUN0RCx1QkFBdUI7OzsyQkFlN0IsWUFBWSxTQUFDLFlBQVk7MkJBSXpCLFlBQVksU0FBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRoZW1lQ29sb3JQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnQGxjdS9jb21tb24nO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbGN1XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIExjdURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHByaXZhdGUgY3VycmVudENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgdGhlbWVTZXJ2aWNlOiBUaGVtZUNvbG9yUGlja2VyU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKSBvbk1vdXNlRW50ZXIoKSB7XHJcbiAgICB0aGlzLmhvdmVyRWZmZWN0KHRoaXMuZ2V0VGhlbWVDb2xvcigpLCAndW5kZXJsaW5lJyk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJykgb25Nb3VzZUxlYXZlKCkge1xyXG4gICAgdGhpcy5ob3ZlckVmZmVjdCgnJywgJ2luaXRpYWwnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY3VycmVudENvbG9yID0gdGhpcy5nZXRUaGVtZUNvbG9yKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRoZW1lQ29sb3IoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHRoZW1lID0gdGhpcy50aGVtZVNlcnZpY2UuR2V0Q29sb3JDbGFzcygpLnZhbHVlO1xyXG4gICAgcmV0dXJuICdjb2xvci1zd2F0Y2gtJyArIHRoZW1lLnN1YnN0cmluZyh0aGVtZS5pbmRleE9mKCctJykgKyAxLCB0aGVtZS5sYXN0SW5kZXhPZignLScpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaG92ZXJFZmZlY3QoY29sb3I6IHN0cmluZywgZGVjb3JhdGlvbjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubWF0LWNhcmQtdGl0bGUnKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGl0bGUsICd0ZXh0LWRlY29yYXRpb24nLCBkZWNvcmF0aW9uKTtcclxuXHJcbiAgICBpZiAoIWNvbG9yICYmIHRoaXMuY3VycmVudENvbG9yKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGl0bGUsIHRoaXMuY3VycmVudENvbG9yKTtcclxuICAgIH0gZWxzZSBpZiAoY29sb3IgIT09IHRoaXMuY3VycmVudENvbG9yKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGl0bGUsIHRoaXMuY3VycmVudENvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29sb3IpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aXRsZSwgY29sb3IpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRDb2xvciA9IGNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19