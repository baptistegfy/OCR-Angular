import { Component, OnInit, Input } from '@angular/core';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
})
export class DeviceComponent implements OnInit {
  @Input() deviceName!: string;
  @Input() deviceStatus!: string;
  @Input() deviceIndex!: number;

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {}

  getStatus() {
    return this.deviceStatus;
  }

  getColor() {
    switch (this.deviceStatus) {
      case 'allumé':
        return 'green';
        break;
      case 'éteint':
        return 'red';
        break;
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

  onSwitchOn() {
    this.deviceService.switchOnOne(this.deviceIndex);
  }
  onSwitchOff() {
    this.deviceService.switchOffOne(this.deviceIndex);
  }
}
