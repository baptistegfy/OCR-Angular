import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { DeviceService } from '../services/device.service';
import { Device } from '../types/device';

@Component({
  selector: 'app-device-view',
  templateUrl: './device-view.component.html',
  styleUrls: ['./device-view.component.scss'],
})
export class DeviceViewComponent implements OnInit {
  isAuth = false;
  lastUpdate: Promise<Date> = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });

  devices!: Device[];
  deviceSubcription!: Subscription;

  constructor(private deviceService: DeviceService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  ngOnInit() {
    this.deviceSubcription = this.deviceService.devicesSubject.subscribe(
      (devices: Device[]) => {
        this.devices = devices;
      }
    );
    this.deviceService.emitDeviceSubject();
  }

  onTurnOn() {
    this.deviceService.switchOnAll();
  }
  onTurnOff() {
    this.deviceService.switchOffAll();
  }
}
