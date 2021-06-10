import { Component, OnInit, Input } from '@angular/core';
import { DeviceService } from '../services/device.service';
import { Device } from '../types/device';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
})
export class DeviceComponent implements OnInit {
  @Input() device!: Device;

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {}

  getColor(): string {
    // enum ?
    switch (this.device.status) {
      case 'allumé':
        return 'green';

      case 'éteint':
        return 'red';

      default:
        return 'black';
    }
  }

  onSwitch(id: number) {
    this.deviceService.toggleDeviceStatus(id);
  }
}
