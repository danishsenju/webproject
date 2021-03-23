import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KimiaPage } from './kimia.page';

const routes: Routes = [
  {
    path: '',
    component: KimiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KimiaPageRoutingModule {}
