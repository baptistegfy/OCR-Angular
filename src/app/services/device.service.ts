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
