import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { DeviceComponent } from './device/device.component';
import { DeviceService } from './services/device.service';
import { AuthComponent } from './auth/auth.component';
import { DeviceViewComponent } from './device-view/device-view.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'devices', component: DeviceViewComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: DeviceViewComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    DeviceComponent,
    AuthComponent,
    DeviceViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [DeviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
