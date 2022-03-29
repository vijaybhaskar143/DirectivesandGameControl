import { Directive, Renderer2, ElementRef, OnInit, RendererStyleFlags2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private renderer: Renderer2, private eleRef: ElementRef) { }

  @Input() defaultColor: string;
  @Input() highlightColor: string;

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string ="blue";

  ngOnInit(){
    this.backgroundColor=this.defaultColor;
    // this.renderer.setStyle(this.eleRef.nativeElement,"background-color","black", RendererStyleFlags2.Important);
    // this.renderer.setStyle(this.eleRef.nativeElement,"color","yellow", RendererStyleFlags2.Important);
    this.renderer.setStyle(this.eleRef.nativeElement,"font-weight","bold", RendererStyleFlags2.DashCase);
    this.renderer.setStyle(this.eleRef.nativeElement,"text-align","center", RendererStyleFlags2.DashCase);
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    //this.renderer.setStyle(this.eleRef.nativeElement,"background-color","black", RendererStyleFlags2.Important);
    // this.renderer.setStyle(this.eleRef.nativeElement,"color","yellow", RendererStyleFlags2.Important);
    this.backgroundColor= this.highlightColor;
    this.color="yellow";
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.eleRef.nativeElement,"background-color","white", RendererStyleFlags2.Important);
    // this.renderer.setStyle(this.eleRef.nativeElement,"color","blue", RendererStyleFlags2.Important);
    this.backgroundColor=this.defaultColor;
    this.color="blue";
  }
}
