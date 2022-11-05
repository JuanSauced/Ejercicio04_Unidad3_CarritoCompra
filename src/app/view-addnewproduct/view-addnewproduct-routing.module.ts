import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAddnewproductPage } from './view-addnewproduct.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAddnewproductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAddnewproductPageRoutingModule {}
