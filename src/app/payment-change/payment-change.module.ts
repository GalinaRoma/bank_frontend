import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RequestComponent } from './../payment/request/request.component';
import { PayComponent } from './../payment/pay/pay.component';
import { CardComponent } from './../payment/pay/card/card.component';
import { BankComponent } from './../payment/pay/bank/bank.component';
import { AdminPanelComponent } from './../admin-panel/admin-panel.component';
import { ClientPageComponent } from './../client-page/client-page.component';
import { CardTableComponent } from './../admin-panel/table-container/card-table/card-table.component';
import { RequestTableComponent } from './../admin-panel/table-container/request-table/request-table.component';
import { AdminAuthComponent } from './../admin-panel/admin-auth/admin-auth.component';
import { TableContainerComponent } from './../admin-panel/table-container/table-container.component';

const appRoutes: Routes = [
  {path: 'main', component: ClientPageComponent, children: [
    {path: '', redirectTo: '/main/pay/card', pathMatch: 'full'},
    {path: 'request', component: RequestComponent},
    {path: 'pay', component: PayComponent, children: [
      {path: 'card', component: CardComponent },
      {path: 'bank', component: BankComponent },
      {path: '', redirectTo: '/main/pay/card', pathMatch: 'full'}]}]},
  {path: '', redirectTo: '/main/pay/card', pathMatch: 'full'},
  {path: 'admin', component: AdminPanelComponent, children: [
    {path: 'adminAuth', component: AdminAuthComponent},
    {path: 'tableContainer', component: TableContainerComponent, children: [
      {path: 'cardTable', component: CardTableComponent},
      {path: 'requestTable', component: RequestTableComponent},
      {path: '', redirectTo: '/admin/tableContainer/cardTable', pathMatch: 'full'}
    ]},
    {path: '', redirectTo: '/admin/adminAuth', pathMatch:'full'}
  ]}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class PaymentChangeModule { }
