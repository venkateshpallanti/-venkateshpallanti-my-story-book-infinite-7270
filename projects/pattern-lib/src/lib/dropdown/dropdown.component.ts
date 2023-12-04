import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

// <option><input type="text" name="fname"
//     placeholder="Select here ..."></option>

@Component({
  selector: 'ztc-dropdown',
  template: `
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" integrity="sha384-4LISF5TTJX/fLmGSxO53rV4miRxdg84mZsxmO8Rx5jGtp/LbrixFETvWa5a6sESd" crossorigin="anonymous"> -->
  <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"> -->
  <h4>{{label}}</h4>
  <div class="dropdown-container col-md-1">
  
  <select  
     [(ngModel)]="selectedOption" 
     (ngModelChange)="onModelChange($event)"
     [ngClass]="size"
     >
    <option value="empty"></option>
    <option *ngFor="let option of options" [value]="option">{{option}}</option>
  </select>
  <button *ngIf="selectedOption" (click)="clearSelection()" class="clear-button">
  <i class="fa fa-close" style="font-size:16px"></i>
  </button>
</div>

  `,
  styles: [`
  .dropdown-container {
    display: flex;
    align-items: center;
  
  }
  select {
    background: none;
    margin-right: 10px;
    height :35px;
    width : 100%;
    border: 1px solid #c9c992;
    
  }
  .clear-button {
    background: none;
    border: none;
    display: flex;
    right :50px;
    padding: 3px 5px 3px 0;
    cursor: pointer;
    color: #666;
    font-size: inherit;
    margin-left: -50px;
  }
  .fa fa-close{
    display: flex;
    right :50px;
  }

  .select :focus{
    border: 1px solid green;
  }
  .medium{
    width:50%;
  }
  .small{
    width:40%;
  }
  .large{
    width:100%;
  }
  
`]

})
export class DropDownComponent implements OnInit {
  ngOnInit(): void {
   // this.setDefaultValue();
  }

  //value = 'Clear me';
  @Output() onSelectionChange = new EventEmitter<void>();

  @Input() selectedOption:string | undefined;

  @Input() options: any = [];

  //clear dropdown
  public clearSelection() {
    this.selectedOption = '';
    this.onSelectionChange.emit();
  }

  //set initial value
  public setDefaultValue() {
    this.selectedOption = this.options[1];
    this.onSelectionChange.emit(this.selectedOption as any);
  }

  //set value
  public setValue(data: any) {
    this.selectedOption = this.options[data];
    this.onSelectionChange.emit(this.selectedOption as any);
  }

  //on value change
  onModelChange(evt: any) {
    this.onSelectionChange.emit(evt);
  }
  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Authorization Type';
  // @Output()
  // onClick = new EventEmitter<Event>();
}
