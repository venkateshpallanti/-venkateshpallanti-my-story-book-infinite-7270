import { Component, Input } from '@angular/core';
//import '~bootstrap-icons/font/bootstrap-icons.css';
//import '!style-loader!css-loader!sass-loader!./styles.scss';
@Component({
  selector: 'tc-splitbutton',
  //templateUrl: './splitbutton.component.html',
  //styleUrls: ['./splitbutton.component.scss']
  template: `
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" integrity="sha384-4LISF5TTJX/fLmGSxO53rV4miRxdg84mZsxmO8Rx5jGtp/LbrixFETvWa5a6sESd" crossorigin="anonymous">
  <button type="button" class="ztc-split-button-layout-lg" [ngClass]="classes" [disabled]="disabled">
    <span class="icon-layout" [ngClass]="{'icon-prefix-disabled': preFixIconDisabled }">
        <i class="bi bi-{{prefixIcon}}"></i>
    </span>
    <span class="btn-label">{{label ? label : "No Label provided 🧐"}}</span>
    <span class="icon-layout" [ngClass]="{'icon-postfix-disabled': postFixIconDisabled }">
        <i class="bi bi-{{postfixIcon}}"></i>
    </span>
</button>
  `,
  styleUrls: ['./splitbutton.component.scss']

})
export class SplitbuttonComponent {

  @Input()
  primary = false;

  @Input()
  secondary = false;

  @Input()
  destructive = false;

  @Input()
  disabled = false;


  @Input()
  size: 'sm' | 'lg' = 'lg';

  @Input()
  label = 'SEARCH';

  @Input() prefixIcon = 'plus';
  @Input() postfixIcon = 'caret-down-fill';

  @Input() preFixIconDisabled: boolean = false;
  @Input() postFixIconDisabled: boolean = false;

  public get classes(): string[] {
    const mode = this.primary ? 'ztc-split-button-primary' :
      (this.secondary ? 'ztc-split-button-secondary' :
        (this.destructive ? 'ztc-split-button-destructive' : ''));
    if (this.size == 'sm') {
      return [`ztc-split-button-layout-${this.size}`, mode];
    } else {
      return [`ztc-split-button-layout-${this.size}`, mode];
    }
  }
}
