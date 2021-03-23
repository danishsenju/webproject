import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bab4Page } from './bab4.page';

const routes: Routes = [
  {
    path: '',
    component: Bab4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bab4PageRoutingModule {}
