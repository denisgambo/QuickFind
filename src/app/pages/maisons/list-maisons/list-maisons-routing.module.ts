import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListMaisonsPage } from './list-maisons.page';

const routes: Routes = [
  {
    path: '',
    component: ListMaisonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListMaisonsPageRoutingModule {}
