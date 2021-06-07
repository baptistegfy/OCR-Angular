import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
})
export class DeviceComponent implements OnInit {
  @Input() deviceName!: string;
  deviceStatus: string = 'éteint';

  constructor() {}

  ngOnInit(): void {}

  getStatus() {
    return this.deviceStatus;
  }
}
