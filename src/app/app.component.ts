import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Date();

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

  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }
  onAllumer() {
    console.log('On allume tout !');
  }
}
