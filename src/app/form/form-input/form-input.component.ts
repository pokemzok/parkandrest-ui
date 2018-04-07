import {Component, Input, OnInit} from '@angular/core';

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
  @Input() inputName: string;

  id: string = Math.random().toString(36).substring(2);

  /*FIXME uuid */

  constructor() {
    this.type = 'text';
  }

  ngOnInit() {

  }

}
