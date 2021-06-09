import { Subject } from 'rxjs';
import { Device } from '../types/device';

export class DeviceService {
  devicesSubject = new Subject<Device[]>();
  private devices: Device[] = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint',
    },
    {
      id: 2,
      name: 'Télévision',
      status: 'allumé',
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'allumé',
    },
    {
      id: 4,
      name: 'Téléphone',
      status: 'allumé',
    },
    {
      id: 5,
      name: 'Enceinte',
      status: 'allumé',
    },
    {
      id: 6,
      name: 'Vidéo projecteur',
      status: 'éteint',
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
      device.status = 'allumé';
    });
    this.emitDeviceSubject();
  }

  switchOffAll() {
    this.devices.forEach((device) => {
      device.status = 'éteint';
    });
    this.emitDeviceSubject();
  }
  toggleDeviceStatus(id: number) {
    const device = this.getDeviceById(id);
    device.status = device.status === 'allumé' ? 'éteint' : 'allumé';
  }
}
