export class DeviceService {
  devices = [
    {
      name: 'Machine à laver',
      status: 'éteint',
    },
    {
      name: 'Télévision',
      status: 'éteint',
    },
    {
      name: 'Ordinateur',
      status: 'allumé',
    },
  ];

  switchOnAll() {
    for (let device of this.devices) {
      device.status = 'allumé';
    }
  }

  switchOffAll() {
    for (let device of this.devices) {
      device.status = 'éteint';
    }
  }
}
