import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bab3ppPage } from './bab3pp.page';

const routes: Routes = [
  {
    path: '',
    component: Bab3ppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bab3ppPageRoutingModule {}
