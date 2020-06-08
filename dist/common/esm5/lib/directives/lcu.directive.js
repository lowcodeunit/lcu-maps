import { __decorate } from "tslib";
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
    __decorate([
        HostListener('mouseenter')
    ], LcuDirective.prototype, "onMouseEnter", null);
    __decorate([
        HostListener('mouseleave')
    ], LcuDirective.prototype, "onMouseLeave", null);
    LcuDirective = __decorate([
        Directive({
            selector: '[lcu]'
        })
    ], LcuDirective);
    return LcuDirective;
}());
export { LcuDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGN1LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bsb3djb2RldW5pdC9sY3UtbWFwcy1jb21tb24vIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9sY3UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFLdEQ7SUFJRSxzQkFDVSxLQUFpQixFQUNqQixRQUFtQixFQUNuQixZQUFxQztRQUZyQyxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsaUJBQVksR0FBWixZQUFZLENBQXlCO0lBQzNDLENBQUM7SUFFdUIsbUNBQVksR0FBWjtRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRTJCLG1DQUFZLEdBQVo7UUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVNLCtCQUFRLEdBQWY7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRU8sb0NBQWEsR0FBckI7UUFDRSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUN0RCxPQUFPLGVBQWUsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRU8sa0NBQVcsR0FBbkIsVUFBb0IsS0FBYSxFQUFFLFVBQWtCO1FBQ25ELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNyRDthQUFNLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNyRDtRQUVELElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7Z0JBcENnQixVQUFVO2dCQUNQLFNBQVM7Z0JBQ0wsdUJBQXVCOztJQUduQjtRQUEzQixZQUFZLENBQUMsWUFBWSxDQUFDO29EQUUxQjtJQUUyQjtRQUEzQixZQUFZLENBQUMsWUFBWSxDQUFDO29EQUUxQjtJQWhCVSxZQUFZO1FBSHhCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1NBQ2xCLENBQUM7T0FDVyxZQUFZLENBMkN4QjtJQUFELG1CQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7U0EzQ1ksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZUNvbG9yUGlja2VyU2VydmljZSB9IGZyb20gJ0BsY3UvY29tbW9uJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2xjdV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMY3VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwcml2YXRlIGN1cnJlbnRDb2xvcjogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIHRoZW1lU2VydmljZTogVGhlbWVDb2xvclBpY2tlclNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJykgb25Nb3VzZUVudGVyKCkge1xyXG4gICAgdGhpcy5ob3ZlckVmZmVjdCh0aGlzLmdldFRoZW1lQ29sb3IoKSwgJ3VuZGVybGluZScpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpIG9uTW91c2VMZWF2ZSgpIHtcclxuICAgIHRoaXMuaG92ZXJFZmZlY3QoJycsICdpbml0aWFsJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmN1cnJlbnRDb2xvciA9IHRoaXMuZ2V0VGhlbWVDb2xvcigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRUaGVtZUNvbG9yKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB0aGVtZSA9IHRoaXMudGhlbWVTZXJ2aWNlLkdldENvbG9yQ2xhc3MoKS52YWx1ZTtcclxuICAgIHJldHVybiAnY29sb3Itc3dhdGNoLScgKyB0aGVtZS5zdWJzdHJpbmcodGhlbWUuaW5kZXhPZignLScpICsgMSwgdGhlbWUubGFzdEluZGV4T2YoJy0nKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhvdmVyRWZmZWN0KGNvbG9yOiBzdHJpbmcsIGRlY29yYXRpb246IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1hdC1jYXJkLXRpdGxlJyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRpdGxlLCAndGV4dC1kZWNvcmF0aW9uJywgZGVjb3JhdGlvbik7XHJcblxyXG4gICAgaWYgKCFjb2xvciAmJiB0aGlzLmN1cnJlbnRDb2xvcikge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRpdGxlLCB0aGlzLmN1cnJlbnRDb2xvcik7XHJcbiAgICB9IGVsc2UgaWYgKGNvbG9yICE9PSB0aGlzLmN1cnJlbnRDb2xvcikge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRpdGxlLCB0aGlzLmN1cnJlbnRDb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbG9yKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGl0bGUsIGNvbG9yKTtcclxuICAgICAgdGhpcy5jdXJyZW50Q29sb3IgPSBjb2xvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==