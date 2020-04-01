import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vehicle-modal',
  templateUrl: './vehicle-modal.component.html',
  styleUrls: ['./vehicle-modal.component.css']
})
export class VehicleModalComponent implements OnInit {

  @Input() modal_title;
  @Input() modal_content;

  constructor(public activeModal: NgbActiveModal) { }



  ngOnInit(): void {
  }

}
