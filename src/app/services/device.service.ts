import { Device } from '../types/device';

export class DeviceService {
  devices: Device[] = [
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

  getDeviceById(id: number): any {
    const device = this.devices.find((obj) => {
      return obj.id === id;
    });
    return device;
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
  switchOnOne(index: number) {
    this.devices[index].status = 'allumé';
  }
  switchOffOne(index: number) {
    this.devices[index].status = 'éteint';
  }
}
