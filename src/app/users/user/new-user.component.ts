import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LabelPosition} from '../../form/LabelPosition';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  loginForm: FormGroup;
  labelsPosition: LabelPosition;
  constructor() {
    this.labelsPosition = LabelPosition.LEFT;
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required])
    })
  }

}
