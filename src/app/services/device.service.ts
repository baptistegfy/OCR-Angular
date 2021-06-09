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
    //   for (let device of this.devices) {
    //     device.status = 'allumé';
    //   }
  }

  switchOffAll() {
    this.devices.forEach((device) => {
      device.status = 'éteint';
    });
    // for (let device of this.devices) {
    //   device.status = 'éteint';
    // }
  }
  toggleDeviceStatus(id: number) {
    const device = this.getDeviceById(id);
    device.status = 'allumé' ? 'éteint' : 'allumé';
    // this.devices[index].status = 'allumé';
  }
}
