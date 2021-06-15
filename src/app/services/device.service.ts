import { Subject } from 'rxjs';
import { Device, DeviceStatus } from '../types/device';

export class DeviceService {
  devicesSubject = new Subject<Device[]>();
  private devices: Device[] = [
    {
      id: 1,
      name: 'Machine à laver',
      status: DeviceStatus.off,
    },
    {
      id: 2,
      name: 'Télévision',
      status: DeviceStatus.on,
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: DeviceStatus.on,
    },
    {
      id: 4,
      name: 'Téléphone',
      status: DeviceStatus.on,
    },
    {
      id: 5,
      name: 'Enceinte',
      status: DeviceStatus.on,
    },
    {
      id: 6,
      name: 'Vidéo projecteur',
      status: DeviceStatus.off,
    },
  ];

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
}
