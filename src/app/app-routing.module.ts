import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyHomeComponent } from './components/body-home/body-home.component';
import { BodyMessagesComponent } from './components/body-messages/body-messages.component';
import { BodyProfileComponent } from './components/body-profile/body-profile.component';
import { BodySettingsComponent } from './components/body-settings/body-settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: BodyHomeComponent },
  { path: 'messages', component: BodyMessagesComponent},
  { path: 'profile', component: BodyProfileComponent},
  { path: 'settings', component: BodySettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const AppRoutingModules = [
  BodyHomeComponent,
  BodyMessagesComponent,
  BodyProfileComponent,
  BodySettingsComponent
]
