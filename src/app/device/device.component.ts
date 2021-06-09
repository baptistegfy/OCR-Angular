import { Component, OnInit, Input } from '@angular/core';
import { DeviceService } from '../services/device.service';
import { Device } from '../types/device';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
})
export class DeviceComponent implements OnInit {
  // @Input() deviceName!: string;
  // @Input() deviceStatus!: string;
  // @Input() deviceIndex!: number;
  // @Input() id!: number;

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
    // if (this.deviceStatus === 'allumé') {
    //   return 'green';
    // } else if (this.deviceStatus === 'éteint') {
    //   return 'red';
    // } else {
    //   return 'black';
    // }
  }

  // onSwitchOn() {
  //   this.deviceService.switchOnOne(this.device.index);
  // }
  // onSwitchOff() {
  //   this.deviceService.switchOffOne(this.deviceIndex);
  // }
  onSwitch(id: number) {
    this.deviceService.toggleDeviceStatus(id);
  }
}
