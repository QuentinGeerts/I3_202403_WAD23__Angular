import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() appHighlight!: string;
  @Input() fontSize: number = 16;

  defaultColor: string = "white";
  defaultSize: number = 16;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.appHighlight = this.appHighlight === "" ? "yellow" : this.appHighlight;
  }

  @HostListener('mouseenter')
  onMouseEnter () {
    console.log("Déclenchement de onMouseEnter sur ", this.el.nativeElement);
    this.el.nativeElement.style.backgroundColor = this.appHighlight;
    this.el.nativeElement.style.fontSize = this.fontSize + "px";
    
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    console.log("Déclenchement de onMouseLeave sur ", this.el.nativeElement);
    this.el.nativeElement.style.backgroundColor = this.defaultColor;
    this.el.nativeElement.style.fontSize = this.defaultSize + "px";
    
  }

  @HostListener('click')
  onClick () {
    console.log("Déclenchement de onClick sur ", this.el.nativeElement);
    
  }

}
