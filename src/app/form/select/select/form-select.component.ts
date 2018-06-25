import {Component, Input, OnInit} from '@angular/core';
import {LabelPosition} from '../../LabelPosition';
import {UUID} from 'angular2-uuid';
import {SelectOption} from '../options/select-option';
import {ControlContainer, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent implements OnInit {

  @Input() label: string;
  @Input() inputPlaceholder: string;
  @Input() inputCols: number;
  @Input() formCtrlName: string;
  @Input() labelPosition: LabelPosition;
  @Input() options: SelectOption[];
  @Input() multiselect: boolean;

  inputFormGroup: FormGroup;
  id: string =  UUID.UUID();

  // TODO: show placeholder (select does not support placeholder for some reason)
  constructor(private controlContainer: ControlContainer) {
    this.labelPosition = LabelPosition.TOP;
    this.multiselect = null;
  }

  ngOnInit() {
    this.inputFormGroup = <FormGroup>this.controlContainer.control;
  }

  labelTopPosition() {
    return LabelPosition.TOP === this.labelPosition;
  }

  labelLeftPosition() {
    return LabelPosition.LEFT === this.labelPosition;
  }

}
