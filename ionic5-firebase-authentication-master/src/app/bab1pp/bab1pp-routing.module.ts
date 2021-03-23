import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bab1ppPage } from './bab1pp.page';

const routes: Routes = [
  {
    path: '',
    component: Bab1ppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bab1ppPageRoutingModule {}
