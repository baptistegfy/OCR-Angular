import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Devices } from '../models/Devices.model';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-edit-device',
  templateUrl: './edit-device.component.html',
  styleUrls: ['./edit-device.component.scss'],
})
export class EditDeviceComponent implements OnInit {
  useForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private deviceService: DeviceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.useForm = this.formBuilder.group({
      name: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  onSubmit() {
    const formValue = this.useForm.value;
    const newDevice = new Devices(
      formValue.name,
      formValue.status,
      formValue.id
    );
    this.deviceService.addDevice(newDevice);
    console.log('newDevice:', newDevice);
    this.router.navigate(['/devices']);
  }
}
