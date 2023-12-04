import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ztc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = true;

  @Input()
  disable = false;

  
  @Input()
  hover = false;

  
  @Input()
  active = false;

  /**
   * What background color to use
   */
  // @Input()
  // backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'small';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'SEARCH';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    debugger
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    const hover = this.hover ? 'btn-hover' : '';
    const active = this.active ? 'btn-active' : '';
    if(hover || active){
      return [`storybook-button--${this.size}`,hover,active];
    }else{
    return ['storybook-button', `storybook-button--${this.size}`, mode,];
    }
  }
}
