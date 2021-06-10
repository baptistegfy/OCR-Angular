import { Subject } from 'rxjs';
import { Device } from '../types/device';

export class DeviceService {
  devicesSubject = new Subject<Device[]>();
  private devices: Device[] = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'off',
    },
    {
      id: 2,
      name: 'Télévision',
      status: 'on',
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'on',
    },
    {
      id: 4,
      name: 'Téléphone',
      status: 'on',
    },
    {
      id: 5,
      name: 'Enceinte',
      status: 'on',
    },
    {
      id: 6,
      name: 'Vidéo projecteur',
      status: 'off',
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
      device.status = 'on';
    });
    this.emitDeviceSubject();
  }

  switchOffAll() {
    this.devices.forEach((device) => {
      device.status = 'off';
    });
    this.emitDeviceSubject();
  }
  toggleDeviceStatus(id: number) {
    const device = this.getDeviceById(id);
    device.status = device.status === 'on' ? 'off' : 'on';
  }
}
