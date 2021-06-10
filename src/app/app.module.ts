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
import { AuthService } from './services/auth.service';
import { SingleDeviceComponent } from './single-device/single-device.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditDeviceComponent } from './edit-device/edit-device.component';

const appRoutes: Routes = [
  { path: 'devices', canActivate: [AuthGuard], component: DeviceViewComponent },
  {
    path: 'devices/:id',
    canActivate: [AuthGuard],
    component: SingleDeviceComponent,
  },
  { path: 'edit', canActivate: [AuthGuard], component: EditDeviceComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: DeviceViewComponent },
  { path: 'error404', component: NotFoundComponent },
  { path: '**', redirectTo: 'auth', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    DeviceComponent,
    AuthComponent,
    DeviceViewComponent,
    SingleDeviceComponent,
    NotFoundComponent,
    EditDeviceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [DeviceService, AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
