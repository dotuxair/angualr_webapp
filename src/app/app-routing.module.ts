import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './layout/auth/auth.module';
import { AdminModule } from './layout/admin/admin.module';

import { HomeComponent } from './shared/home/home.component';
import { UserModule } from './layout/user/user.module';

const routes: Routes = [

  {path : 'auth' , loadChildren:()=> AuthModule , data: { showHeader: false }},
  {path : 'admin' , loadChildren:()=> AdminModule , data :{ showHeader : false}},
  {path : 'user' , loadChildren:()=> UserModule , data :{ showHeader : false}},

  {path : "home" , component : HomeComponent},
  {path : "" , component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
