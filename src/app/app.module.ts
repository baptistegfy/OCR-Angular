import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DeviceService } from './services/device.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { UserService } from './services/user.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DeviceComponent } from './device/device.component';
import { DeviceViewComponent } from './device-view/device-view.component';
import { SingleDeviceComponent } from './single-device/single-device.component';
import { EditDeviceComponent } from './edit-device/edit-device.component';
import { AuthComponent } from './auth/auth.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes: Routes = [
  { path: 'devices', canActivate: [AuthGuard], component: DeviceViewComponent },
  {
    path: 'devices/:id',
    canActivate: [AuthGuard],
    component: SingleDeviceComponent,
  },
  { path: 'edit', canActivate: [AuthGuard], component: EditDeviceComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: NewUserComponent },
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
    UserListComponent,
    NewUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [DeviceService, AuthService, AuthGuard, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
