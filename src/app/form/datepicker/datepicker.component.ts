import {Component, Input, OnInit} from '@angular/core';
import {UUID} from 'angular2-uuid';
import {ControlContainer, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  @Input() label: string;
  @Input() datepickerPholder: string;
  @Input() datepickerCols: number;
  @Input() formCtrlName: string;
  @Input() errorMsg: string;

  inputFormGroup: FormGroup;
  id: string =  UUID.UUID();

  constructor(private controlContainer: ControlContainer) {
    this.inputFormGroup = new FormGroup({});
  }

  ngOnInit() {
    this.inputFormGroup = <FormGroup>this.controlContainer.control;
  }

  isFormInvalid(): boolean {
    return this.inputFormGroup.get(this.formCtrlName).invalid && this.inputFormGroup.get(this.formCtrlName).touched;
  }

  isFormValid(): boolean {
    return this.inputFormGroup.get(this.formCtrlName).valid;
  }

}
