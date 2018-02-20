import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 template: `
   <h1>PRIMER PROGRAMA</h1>
   <app-video></app-video>
   <div class="row">
     <div class="col-xs-12 col-sm-12 col-md-12 col-lg-5">
       Left Component
     </div>
     <div class="col-xs-12 col-sm-12 col-md-12 col-lg-5">
       Right Component
     </div>
   </div>
   <app-footer></app-footer>
 `
})
export class AppComponent {
  title = 'app';
}
