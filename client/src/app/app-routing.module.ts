import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { AddVehiclesComponent } from './add-vehicles/add-vehicles.component';
import { AwardsComponent } from './awards/awards.component';


const routes: Routes = [
  { path: '', component: VehiclesComponent, data: { title: 'vehicles' } },
  { path: 'awards', component: AwardsComponent },
  { path: 'vehicles', component: VehiclesComponent, data: { title: 'vehicles' } },
  { path: 'add-vehicles', component: AddVehiclesComponent, data: { title: 'add vehicles' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
