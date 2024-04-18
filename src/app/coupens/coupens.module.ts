import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoupensRoutingModule } from './coupens-routing.module';
import {CoupensComponent} from "./coupens.component";
import { CoupenListComponent } from './coupen-list/coupen-list.component';
import { CoupenCreateComponent } from './coupen-create/coupen-create.component';
import { CoupenDeleteComponent } from './coupen-delete/coupen-delete.component';


@NgModule({
  declarations: [
    CoupensComponent,
    CoupenListComponent,
    CoupenCreateComponent,
    CoupenDeleteComponent
  ],
  imports: [
    CommonModule,
    CoupensRoutingModule
  ]
})
export class CoupensModule { }
