import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomePageLayoutComponent } from './homePage/home-page-layout/home-page-layout.component';
import { HomePageLayoutModule } from './homePage/home-page-layout/home-page-layout.module';
import { LandingpageLayoutComponent } from './landingpage/landingpage-layout/landingpage-layout.component';
import { LandingpageLayoutModule } from './landingpage/landingpage-layout/landingpage-layout.module';
import { AppRoutingModule } from './app-routing.module';
import { AllPatientsComponent } from './homePage/all-patients/all-patients.component';
import { TenderComponent } from './homePage/tender/tender.component';
import { TenderingNavabarComponent } from './homePage/tendering-navabar/tendering-navabar.component';
import { TendersComponent } from './homePage/tenders/tenders.component';
import { TenderReportComponent } from './homePage/tender-report/tender-report.component';
import {ChartsModule} from 'ng2-charts';
import { LoginComponent } from './login/login.component'
import { AuthGuard } from './service/guards/auth-guard.service';
import {JwtModule} from '@auth0/angular-jwt';


export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageLayoutComponent,
    LandingpageLayoutComponent,
    AllPatientsComponent,
    TenderComponent,
    TenderingNavabarComponent,
    TendersComponent,
    TenderReportComponent,
    LoginComponent,
    
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
    LandingpageLayoutModule,
    ChartsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:44392"],
        disallowedRoutes: []
      }
    })
  ],

  providers: [ AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
