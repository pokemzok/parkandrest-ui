import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-accountmonitor',
  templateUrl: './accountmonitoring.component.html',
  styleUrls: ['./accountmonitoring.component.css']
})
export class AccountMonitoringComponent implements OnInit {

  reportForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.reportForm = new FormGroup({
      'reportDate': new FormControl(null, [Validators.required]) // TODO: create DateValidator
    })
  }


}
