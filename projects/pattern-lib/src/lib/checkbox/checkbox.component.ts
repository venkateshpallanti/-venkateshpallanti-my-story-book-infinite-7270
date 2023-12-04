import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";


export enum CheckboxState {
  Init,
  Indeterminate,
  Checked,
  Unchecked
}

@Component({
  selector: 'ztc-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent {

  @Input() disabled = true;

  @Input() hideLabel = false;

  @Input() label: string="Check";

  @Input() set indeterminate(indeterminate: boolean) {
    if (indeterminate === this._indeterminate) {
      return;
    }

    this._indeterminate = indeterminate;

    if (this._indeterminate) {
      this.transitionCheckboxState(CheckboxState.Indeterminate);
    } else {
      this.transitionCheckboxState(this.checked ? CheckboxState.Checked : CheckboxState.Unchecked);
    }

    if (this.inputCheckbox && this.inputCheckbox.nativeElement) {
      this.inputCheckbox.nativeElement.indeterminate = indeterminate;
    }
    this.changeDetectorRef.markForCheck();
   // this.indeterminateChange.emit(this._indeterminate);
  }

  get indeterminate() {
    return this._indeterminate;
  }
  @Input() checked=true;


  @Output() changedState = new EventEmitter<boolean>();

  //@Output() indeterminateChange = new EventEmitter<boolean>();

  _checked = false;

  _indeterminate = false;

  currentCheckboxState = CheckboxState.Init;

  @ViewChild("inputCheckbox") inputCheckbox: ElementRef | undefined;

  constructor(protected changeDetectorRef: ChangeDetectorRef) {
    
  }

  stateChanges(evt: any) {
    this.changedState.emit(evt.target.checked);
  }

   transitionCheckboxState(newState: CheckboxState) {
    this.currentCheckboxState = newState;
  }

   ngAfterViewInit() {
    if (this.indeterminate && this.inputCheckbox && this.inputCheckbox.nativeElement) {
      this.inputCheckbox.nativeElement.indeterminate = true;
    }
  }

}
