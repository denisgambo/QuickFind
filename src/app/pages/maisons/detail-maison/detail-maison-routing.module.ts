import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailMaisonPage } from './detail-maison.page';

const routes: Routes = [
  {
    path: '',
    component: DetailMaisonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailMaisonPageRoutingModule {}
