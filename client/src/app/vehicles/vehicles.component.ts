import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { HttpClient } from '@angular/common/http';
import { VehicleService } from '../vehicle.service';
import { VehicleModalComponent } from '../vehicle-modal/vehicle-modal.component';


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  products: any = []
  constructor(private modalService: NgbModal, private httpClient: HttpClient, private vs: VehicleService) { }

  open() {
    const modalRef = this.modalService.open(VehicleModalComponent, { size: 'sm', centered: true });
    modalRef.componentInstance.modal_title = 'Add your vehicle';
    modalRef.componentInstance.modal_content = 'I am your content';
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
