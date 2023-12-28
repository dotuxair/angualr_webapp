import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { SendMoneyComponent } from './send-money/send-money.component';
import { WalletComponent } from './wallet/wallet.component';
import { AllTeamComponent } from './all-team/all-team.component';
import { ProfileComponent } from './profile/profile.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    UserLayoutComponent,
    SendMoneyComponent,
    WalletComponent,
    AllTeamComponent,
    ProfileComponent,
    DepositComponent,
    WithdrawComponent,
    ChangePasswordComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
