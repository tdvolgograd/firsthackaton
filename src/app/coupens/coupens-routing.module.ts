import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoupensComponent} from "./coupens.component";
import {CoupenListComponent} from "./coupen-list/coupen-list.component";
import {CoupenDeleteComponent} from "./coupen-delete/coupen-delete.component";

const routes: Routes = [
  {path: '', redirectTo: '/create', pathMatch: 'full'},
  {
    path: 'create',
    component: CoupensComponent
  },
  {
    path: 'list',
    component: CoupenListComponent
  },
  {
    path: 'delete',
    component:CoupenDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoupensRoutingModule { }
