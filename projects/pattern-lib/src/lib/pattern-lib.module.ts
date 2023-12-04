import { NgModule } from '@angular/core';
import { PatternLibComponent } from './pattern-lib.component';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropDownComponent } from './dropdown/dropdown.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SplitbuttonComponent } from './splitbutton/splitbutton.component';


@NgModule({
  declarations: [
    PatternLibComponent,
    ButtonComponent,DropDownComponent, CheckboxComponent, SplitbuttonComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
  ],
  exports: [
    PatternLibComponent,ButtonComponent,DropDownComponent,CheckboxComponent
  ]
})
export class PatternLibModule { }
