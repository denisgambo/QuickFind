import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailMaisonPageRoutingModule } from './detail-maison-routing.module';

import { DetailMaisonPage } from './detail-maison.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailMaisonPageRoutingModule
  ],
  declarations: [DetailMaisonPage]
})
export class DetailMaisonPageModule {}
