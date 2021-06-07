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
    {
      name: 'Téléphone',
      status: 'allumé',
    },
    {
      name: 'Enceinte',
      status: 'allumé',
    },
    {
      name: 'Vidéo projecteur',
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
  switchOnOne(index: number) {
    this.devices[index].status = 'allumé';
  }
  switchOffOne(index: number) {
    this.devices[index].status = 'éteint';
  }
}
