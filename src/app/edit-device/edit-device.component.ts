import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-edit-device',
  templateUrl: './edit-device.component.html',
  styleUrls: ['./edit-device.component.scss'],
})
export class EditDeviceComponent implements OnInit {
  defaultOnOff: string = 'off';
  constructor(private deviceService: DeviceService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const name = form.value['name'];
    const status = form.value['status'];
    this.deviceService.addDevice(name, status);
    this.router.navigate(['/devices']);
  }
}
