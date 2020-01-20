import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private elementRef: ElementRef,
    private renderer: Renderer2) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'white');
    }
    @HostListener('mouseover') onMouseOver() {
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'gray');
    }
    @HostListener('mouseout') onMouseOut() {
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'white');
    }
}
