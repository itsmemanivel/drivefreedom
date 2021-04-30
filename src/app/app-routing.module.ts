import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { RADComponent } from './core/rad/rad.component';
import { CFSComponent } from './core/cfs/cfs.component';
import { DSComponent } from './core/ds/ds.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'request-add', component: RADComponent },
  { path: 'price-car-sale', component:CFSComponent },
  { path: 'driver-pricing', component: DSComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
