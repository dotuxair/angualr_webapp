import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AdminFooterComponent,
    AdminSidebarComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
