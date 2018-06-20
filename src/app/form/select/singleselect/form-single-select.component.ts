import {Component, Input, OnInit} from '@angular/core';
import {LabelPosition} from '../../LabelPosition';
import {UUID} from 'angular2-uuid';
import {SelectOption} from '../options/select-option';
import {ControlContainer, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-single-select',
  templateUrl: './form-single-select.component.html',
  styleUrls: ['./form-single-select.component.css']
})
export class FormSingleSelectComponent implements OnInit {

  @Input() label: string;
  @Input() inputPlaceholder: string;
  @Input() inputCols: number;
  @Input() formCtrlName: string;
  @Input() labelPosition: LabelPosition;
  @Input() options: SelectOption[];

  inputFormGroup: FormGroup;
  id: string =  UUID.UUID();

  constructor(private controlContainer: ControlContainer) {
    this.labelPosition = LabelPosition.TOP;
  }

  ngOnInit() {
    this.inputFormGroup = <FormGroup>this.controlContainer.control;
  }

}
