import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotakimiaPage } from './notakimia.page';

const routes: Routes = [
  {
    path: '',
    component: NotakimiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotakimiaPageRoutingModule {}
