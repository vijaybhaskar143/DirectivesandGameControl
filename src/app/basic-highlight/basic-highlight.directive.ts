import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }
  ngOnInit(){
    const ele= this.elementRef.nativeElement.style;
    ele.backgroundColor="blue";
    ele.color="yellow";
    ele.fontWeight="bold";
    ele.textAlign="center";
  }
}
