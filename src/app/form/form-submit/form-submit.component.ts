import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-submit',
  templateUrl: './form-submit.component.html',
  styleUrls: ['./form-submit.component.css']
})
export class FormSubmitComponent implements OnInit {

  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }
  /*TODO: host event*/
}
