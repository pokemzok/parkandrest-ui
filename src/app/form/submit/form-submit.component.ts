import {Component, Input, OnInit} from '@angular/core';
import {ControlContainer, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-submit',
  templateUrl: './form-submit.component.html',
  styleUrls: ['./form-submit.component.css']
})
export class FormSubmitComponent implements OnInit {

  @Input() description: string;
  @Input() buttonCols: number;

  inputFormGroup: FormGroup;

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit() {
    this.inputFormGroup = <FormGroup>this.controlContainer.control;
  }

  isDisabled(): boolean {
    return this.inputFormGroup.invalid || this.inputFormGroup.pending;
  }
}
