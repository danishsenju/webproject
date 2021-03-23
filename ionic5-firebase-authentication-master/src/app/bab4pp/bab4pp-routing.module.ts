import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bab4ppPage } from './bab4pp.page';

const routes: Routes = [
  {
    path: '',
    component: Bab4ppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bab4ppPageRoutingModule {}
