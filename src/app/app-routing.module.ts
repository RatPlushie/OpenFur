import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/body/home/home.component';
import { MessagesComponent } from './components/body/messages/messages.component';
import { ProfileComponent } from './components/body/profile/profile.component';
import { SettingsComponent } from './components/body/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'messages', component: MessagesComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const AppRoutingModules = [
  HomeComponent,
  MessagesComponent,
  ProfileComponent,
  SettingsComponent
]
