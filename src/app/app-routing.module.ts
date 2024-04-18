import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SettingsComponent} from "./settings/settings.component";
import {MediaComponent} from "./media/media.component";
import {PagesComponent} from "./pages/pages.component";
import {CoupensComponent} from "./coupens/coupens.component";
import {ProductsComponent} from "./products/products.component";
import {StatisticsComponent} from './statistics/statistics.component'
export const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch: 'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'coupens',component:CoupensComponent},
  {path:'products',component:ProductsComponent},
  {path:'pages',component:PagesComponent},
  {path:'media',component:MediaComponent},
  {path:'login',component:LoginComponent},
  {path:"settings", component:SettingsComponent},
  {path:'register',component:RegisterComponent},
  {path:'settings',loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
