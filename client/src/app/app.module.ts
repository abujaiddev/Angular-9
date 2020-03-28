import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { AddVehiclesComponent } from './add-vehicles/add-vehicles.component';
import { VehicleAddModalComponent } from './vehicle-add-modal/vehicle-add-modal.component';
import { FooterComponent } from './footer/footer.component';
import { AwardsComponent } from './awards/awards.component';
import { VehicleService } from './vehicle.service';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    AddVehiclesComponent,
    VehicleAddModalComponent,
    FooterComponent,
    AwardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  entryComponents: [
    VehicleAddModalComponent
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
