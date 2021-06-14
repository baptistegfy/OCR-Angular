import { Component, OnInit, Input } from '@angular/core';
import { DeviceService } from '../services/device.service';
import { Color, Device, DeviceStatus } from '../types/device';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
})
export class DeviceComponent implements OnInit {
  @Input() device!: Device;
  deviceStatus = DeviceStatus;

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {}

  getColor(): string {
    // enum ?
    switch (this.device.status) {
      case DeviceStatus.on:
        return Color.green;

      case DeviceStatus.off:
        return Color.red;

      default:
        return Color.black;
    }
  }

  onSwitch(id: number) {
    this.deviceService.toggleDeviceStatus(id);
  }
}
