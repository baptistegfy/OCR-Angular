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

@NgModule({
  declarations: [AppComponent, MyFirstComponent, DeviceComponent, AuthComponent, DeviceViewComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [DeviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
