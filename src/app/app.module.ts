import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BodyComponent} from './body/body.component';
import { CategoriesComponent } from './components/categories/categories.component'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component'
import { TransactionTableComponent } from './components/transaction-table/transaction-table.component'
import {SidenavComponent} from './sidenav/sidenav.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {PagesComponent} from './pages/pages.component';
import {MediaComponent} from './media/media.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SublevelMenuComponent} from './sidenav/sublevel-menu.component';
import {HttpClientModule} from '@angular/common/http';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {HeaderComponent} from "./header/header.component";

// import  {MatIconModule} from '@angular'

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    StatisticsComponent,
    PagesComponent,
    MediaComponent,
    SublevelMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule, AngularSvgIconModule.forRoot(), HeaderComponent, LoginComponent, RegisterComponent, TransactionFormComponent, TransactionTableComponent, CategoriesComponent
  ],
  providers: [],
  exports: [
    SidenavComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
