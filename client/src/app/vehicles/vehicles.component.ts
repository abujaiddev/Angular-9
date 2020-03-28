import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VehicleAddModalComponent } from '../vehicle-add-modal/vehicle-add-modal.component';
import { HttpClient } from '@angular/common/http';
import { VehicleService } from '../vehicle.service';


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  products: any = []


  fullImagePath: String
  constructor(private modalService: NgbModal, private httpClient: HttpClient, private vs: VehicleService) {

  }
  open() {
    const modalRef = this.modalService.open(VehicleAddModalComponent, { size: 'lg', centered: true });
    modalRef.componentInstance.my_modal_title = 'Add your vehicle';
    modalRef.componentInstance.my_modal_content = 'I am your content';
  }


  ngOnInit() {

    this.vs
      .getProducts()
      .subscribe((data: any) => {
        console.log('=============', data.payload.vehicleInfoList)
        this.products = data.payload.vehicleInfoList;
      });

  }

}
