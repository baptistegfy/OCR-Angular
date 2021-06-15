import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Device, DeviceStatus } from '../types/device';

@Injectable()
export class DeviceService {
  devicesSubject = new Subject<Device[]>();
  private devices: Device[] = [
    {
      id: 1,
      name: 'MacBook Pro',
      status: 'on',
    },
  ];

  constructor(private httpClient: HttpClient) {}
  emitDeviceSubject() {
    this.devicesSubject.next(this.devices.slice());
  }

  getDeviceById(id: number): Device {
    const device = this.devices.find((obj) => {
      return obj.id === id;
    });
    return <Device>device;
  }

  switchOnAll() {
    this.devices.forEach((device) => {
      device.status = DeviceStatus.on;
    });
    this.emitDeviceSubject();
  }

  switchOffAll() {
    this.devices.forEach((device) => {
      device.status = DeviceStatus.off;
    });
    this.emitDeviceSubject();
  }

  toggleDeviceStatus(id: number) {
    const device = this.getDeviceById(id);
    device.status =
      device.status === DeviceStatus.on ? DeviceStatus.off : DeviceStatus.on;
  }

  addDevice(name: string, status: string) {
    const deviceObject = {
      id: 0,
      name: '',
      status: '',
    };
    deviceObject.name = name;
    deviceObject.status = status;
    deviceObject.id = this.devices[this.devices.length - 1].id + 1;

    this.devices.push(deviceObject);
    this.emitDeviceSubject();
  }

  saveDevicesToServer() {
    this.httpClient
      .put(
        'https://ocr-angular-e2ebe-default-rtdb.europe-west1.firebasedatabase.app/devices.json',
        this.devices
      )
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getDevicesFromServer() {
    this.httpClient
      .get<Device[]>(
        'https://ocr-angular-e2ebe-default-rtdb.europe-west1.firebasedatabase.app/devices.json'
      )
      .subscribe(
        (response) => {
          this.devices = response;
          this.emitDeviceSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}
