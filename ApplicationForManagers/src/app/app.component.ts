import { Component } from '@angular/core';
import { IPharmacy } from './pharmacy';

@Component({
  selector: 'app-root',
  template: `
    <div class="wrapper">
      <div class="sidebar">
          <div class="sidebar-background">
              <sidebar></sidebar>
          </div>
      </div>

      <div class="main-panel">
          <router-outlet></router-outlet>
      </div>

    </div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {

}
