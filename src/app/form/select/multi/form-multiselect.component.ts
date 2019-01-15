import {Component, Input, OnInit} from '@angular/core';
import {LabelPosition} from '../../label-position';
import {UUID} from 'angular2-uuid';
import {SelectOption} from '../options/select-option';
import {ControlContainer, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-multiselect',
  templateUrl: './form-multiselect.component.html',
  styleUrls: ['./form-multiselect.component.css']
})
export class FormMultiselectComponent implements OnInit {

  @Input() label: string;
  @Input() inputCols: number;
  @Input() formCtrl: FormControl;
  @Input() labelPosition: LabelPosition;
  @Input() options: SelectOption[];

  inputFormGroup: FormGroup;
  id: string =  UUID.UUID();

  constructor(private controlContainer: ControlContainer) {
    this.labelPosition = LabelPosition.TOP;
    this.inputCols = 4;
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
