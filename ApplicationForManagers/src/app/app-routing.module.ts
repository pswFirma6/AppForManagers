import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageLayoutComponent } from './homePage/home-page-layout/home-page-layout.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageLayoutComponent,
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
