import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-device',
  templateUrl: './edit-device.component.html',
  styleUrls: ['./edit-device.component.scss'],
})
export class EditDeviceComponent implements OnInit {
  defaultOnOff: string = 'off';
  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
