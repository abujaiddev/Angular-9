import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { FooterComponent } from './footer/footer.component';
import { AwardsComponent } from './awards/awards.component';
import { VehicleService } from './vehicle.service';
import { VehicleModalComponent } from './vehicle-modal/vehicle-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    FooterComponent,
    AwardsComponent,
    VehicleModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  entryComponents: [
    VehicleModalComponent
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
