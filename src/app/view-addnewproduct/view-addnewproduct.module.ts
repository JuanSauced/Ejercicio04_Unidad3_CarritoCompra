import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAddnewproductPageRoutingModule } from './view-addnewproduct-routing.module';

import { ViewAddnewproductPage } from './view-addnewproduct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAddnewproductPageRoutingModule
  ],
  declarations: [ViewAddnewproductPage]
})
export class ViewAddnewproductPageModule {}