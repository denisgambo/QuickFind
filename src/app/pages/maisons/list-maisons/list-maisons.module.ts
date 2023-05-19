import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListMaisonsPageRoutingModule } from './list-maisons-routing.module';

import { ListMaisonsPage } from './list-maisons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListMaisonsPageRoutingModule
  ],
  declarations: [ListMaisonsPage]
})
export class ListMaisonsPageModule {}
