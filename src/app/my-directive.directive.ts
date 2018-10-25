import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[customDir]'
})
export class MyDirective implements OnInit {
    @Input() customDir: any;

    constructor(private el: ElementRef, private renderer: Renderer2) {
       renderer.addClass(el.nativeElement, 'testClass');
    }

    ngOnInit() {
      console.log(this.customDir);
      this.el.nativeElement.innerHTML = this.customDir;
    }
}
