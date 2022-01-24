import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageLayoutComponent } from './homePage/home-page-layout/home-page-layout.component';
import { LandingpageLayoutComponent } from './landingpage/landingpage-layout/landingpage-layout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/guards/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    component: LandingpageLayoutComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomePageLayoutComponent, canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./homePage/home-page-layout/home-page-layout.module').then(mod => mod.HomePageLayoutModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
