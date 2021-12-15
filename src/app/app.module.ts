import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, AppRoutingModules } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/body/home/home.component';
import { MessagesComponent } from './components/body/messages/messages.component';
import { ProfileComponent } from './components/body/profile/profile.component';
import { SettingsComponent } from './components/body/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    AppRoutingModules,
    HomeComponent,
    MessagesComponent,
    ProfileComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
