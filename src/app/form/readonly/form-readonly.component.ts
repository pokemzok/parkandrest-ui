import {Component, Input, OnInit} from '@angular/core';
import {UUID} from 'angular2-uuid';

@Component({
  selector: 'app-form-readonly',
  templateUrl: './form-readonly.component.html',
  styleUrls: ['./form-readonly.component.css']
})
export class FormReadonlyComponent implements OnInit {

  @Input() value: string;
  @Input() inputCols: number;
  @Input() label: string;

  id: string =  UUID.UUID();

  constructor() { }

  ngOnInit() {
  }

}
