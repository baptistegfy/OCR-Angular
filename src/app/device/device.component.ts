import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
})
export class DeviceComponent implements OnInit {
  deviceName: string = 'Machine à laver';
  deviceStatus: string = 'éteint';

  constructor() {}

  ngOnInit(): void {}

  getStatus() {
    return this.deviceStatus;
  }
}
