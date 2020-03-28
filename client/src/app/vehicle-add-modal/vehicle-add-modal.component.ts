import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vehicle-add-modal',
  templateUrl: './vehicle-add-modal.component.html',
  styleUrls: ['./vehicle-add-modal.component.css']
})
export class VehicleAddModalComponent implements OnInit {

  @Input() my_modal_title;
  @Input() my_modal_content;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
