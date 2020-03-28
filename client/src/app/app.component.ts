import { Component } from '@angular/core';
import { VehicleAddModalComponent } from './vehicle-add-modal/vehicle-add-modal.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vehicles';
  // constructor(private modalService: NgbModal) { }
  // open() {
  //   const modalRef = this.modalService.open(VehicleAddModalComponent);
  //   modalRef.componentInstance.my_modal_title = 'I your title';
  //   modalRef.componentInstance.my_modal_content = 'I am your content';
  // }

}
