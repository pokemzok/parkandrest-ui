import {Component, Input, OnInit} from '@angular/core';
import {ControlContainer, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

  @Input() label: string;
  @Input() inputPlaceholder: string;
  @Input() description: string;
  @Input() type: string;
  @Input() formCtrlName: string;

  inputFormGroup: FormGroup;
  id: string = Math.random().toString(36).substring(2); /*FIXME uuid */

  constructor(private controlContainer: ControlContainer) {
    this.type = 'text';
    this.inputFormGroup = new FormGroup({})
  }

  ngOnInit() {
    this.inputFormGroup = <FormGroup>this.controlContainer.control;
  }

  isFormInvalid() {
    return this.inputFormGroup.get(this.formCtrlName).invalid && this.inputFormGroup.get(this.formCtrlName).touched;
  }

  isFormValid() {
    return this.inputFormGroup.get(this.formCtrlName).valid;
  }

}
