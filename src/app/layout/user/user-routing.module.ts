import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { WalletComponent } from './wallet/wallet.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { SendMoneyComponent } from './send-money/send-money.component';
import { ProfileComponent } from './profile/profile.component';
import { DepositComponent } from './deposit/deposit.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AllTeamComponent } from './all-team/all-team.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'wallet', component: WalletComponent },
      { path: 'withdraw', component: WithdrawComponent },
      { path: 'send-money', component: SendMoneyComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'deposit', component: DepositComponent },
      { path: 'change-password', component: ChangePasswordComponent },
      { path: 'team', component: AllTeamComponent },
      { path: 'notification', component: NotificationComponent },


    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
