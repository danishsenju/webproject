import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JadualPage } from './jadual.page';

const routes: Routes = [
  {
    path: '',
    component: JadualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JadualPageRoutingModule {}
