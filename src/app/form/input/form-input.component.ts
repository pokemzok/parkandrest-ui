import {Component, Input, OnInit} from '@angular/core';
import {ControlContainer, FormGroup} from '@angular/forms';
import {LabelPosition} from '../LabelPosition';
import {UUID} from 'angular2-uuid';

/**
 * Default params are @type = 'text', labelPosition = LabelPosition.TOP
 */
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
  @Input() inputCols: number;
  @Input() errorMsgCols: number;
  @Input() formCtrlName: string;
  @Input() errorMsg: string;
  @Input() labelPosition: LabelPosition;

  inputFormGroup: FormGroup;
  id: string =  UUID.UUID();

  constructor(private controlContainer: ControlContainer) {
    this.type = 'text';
    this.inputFormGroup = new FormGroup({});
    this.labelPosition = LabelPosition.TOP;
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

  labelTopPosition() {
    return LabelPosition.TOP === this.labelPosition;
  }

  labelLeftPosition() {
    return LabelPosition.LEFT === this.labelPosition;
  }
}