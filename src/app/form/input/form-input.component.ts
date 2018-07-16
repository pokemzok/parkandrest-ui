import {Component, Input, OnInit} from '@angular/core';
import {ControlContainer, FormGroup} from '@angular/forms';
import {LabelPosition} from '../LabelPosition';
import {UUID} from 'angular2-uuid';
import {AbstractControl} from '@angular/forms/src/model';
import {isNullOrUndefined} from 'util';

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
  @Input() genericErrorMsg: string;
  @Input() specificErrorMsgCodes: string[];
  @Input() labelPosition: LabelPosition;
  @Input() inputClasses: string;

  inputFormGroup: FormGroup;
  currentControl: AbstractControl;

  id: string =  UUID.UUID();

  constructor(private controlContainer: ControlContainer) {
    this.type = 'text';
    this.labelPosition = LabelPosition.TOP;
    this.inputClasses = 'form-control';
    this.errorMsgCols = 3;
    this.inputCols = 4;
    this.specificErrorMsgCodes = [];
  }

  ngOnInit() {
    this.inputFormGroup = <FormGroup>this.controlContainer.control;
    this.currentControl = this.inputFormGroup.get(this.formCtrlName);
  }

  isControlInvalid(): boolean {
    console.log(this.currentControl.errors);
    return this.currentControl.invalid && this.currentControl.touched;
  }

  isControlValid(): boolean {
    return this.currentControl.valid;
  }

  labelTopPosition() {
    return LabelPosition.TOP === this.labelPosition;
  }

  labelLeftPosition() {
    return LabelPosition.LEFT === this.labelPosition;
  }

  shouldRender(code: string): boolean {
    if (!isNullOrUndefined(this.currentControl.errors)) {
      return this.currentControl.errors[code];
    }
  }
}
