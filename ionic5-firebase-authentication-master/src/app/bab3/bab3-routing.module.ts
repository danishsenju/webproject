import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bab3Page } from './bab3.page';

const routes: Routes = [
  {
    path: '',
    component: Bab3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bab3PageRoutingModule {}
