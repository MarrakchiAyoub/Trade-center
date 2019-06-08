import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { PartnersComponent } from './partners/partners.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'angular-highcharts';
import { PaysService } from 'src/services/pays.service';
import { ExportsComponent } from './exports/exports.component';
import { ImportsComponent } from './imports/imports.component';
import { RootComponent } from './root/root.component';

const appRoutes : Routes =[
  {path: '', component: RootComponent},
  {path:'partners', component: PartnersComponent},
  {path: 'exports', component: ExportsComponent},
  {path: 'imports', component: ImportsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    PartnersComponent,
    ExportsComponent,
    ImportsComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ChartModule
  ],
  providers: [
    PaysService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
