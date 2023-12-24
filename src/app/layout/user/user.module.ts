import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    UserLayoutComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
