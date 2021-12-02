import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomePageLayoutComponent } from './homePage/home-page-layout/home-page-layout.component';
import { HomePageLayoutModule } from './homePage/home-page-layout/home-page-layout.module';
import { LandingpageLayoutComponent } from './landingpage/landingpage-layout/landingpage-layout.component';
import { LandingpageLayoutModule } from './landingpage/landingpage-layout/landingpage-layout.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomePageLayoutComponent,
    LandingpageLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    HomePageLayoutModule,
    LandingpageLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
