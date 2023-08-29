import { Directive, ElementRef,Input } from '@angular/core';

@Directive({
  selector: '[appChangeMe]'
})
export class ChangeMeDirective {
@Input() myColor='';
  constructor(private el:ElementRef) { 
    this.el.nativeElement.style.color="red";
    this.el.nativeElement.style.backgroundColor="yellow";
    //this.el.nativeElement.innerHtml='hello from innerhtml';
  }
  ngOnInit()
  {
    this.el.nativeElement.style.color=this.myColor;
  }

}
