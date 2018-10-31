import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {

  @HostBinding('class.open')isOpen=false;
 @HostListener('click')toggleOpend()
 {
   this.isOpen=!this.isOpen;
 }
  constructor() { }

}
