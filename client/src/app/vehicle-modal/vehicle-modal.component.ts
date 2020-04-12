import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vehicle-modal',
  templateUrl: './vehicle-modal.component.html',
  styleUrls: ['./vehicle-modal.component.css']
})
export class VehicleModalComponent implements OnInit {

  @Input() modal_title;
  @Input() modal_content;

  myForm: FormGroup
  vehicles$: Observable<any>;

  uploadedFiles: Array<File>;

  constructor(public activeModal: NgbActiveModal, public fb: FormBuilder, private vs: VehicleService) {
    this.vehicle()

  }


  vehicle() {

    this.myForm = this.fb.group({
      vehicleNickName: ['', Validators.required],
      modelYear: ['', Validators.required],
      modelName: ['', Validators.required],
      // ignitionType: ['', Validators.required],
      vehicleCategory: ['', Validators.required],
      mileage: ['', Validators.required],
      nextServiceMiles: ['', Validators.required],
      diagnosticsIssues: ['', Validators.required],
      // chargeLevelPct: ['', Validators.required],
      batteryStatus: ['', Validators.required],
      drivingRangeMiles: ['', Validators.required],
      status: ['', Validators.required],
      // imageName: ['', Validators.required],
      imageName: [null]
    })

  }

  public submitForm() {
    this.vs.createVehicle(this.myForm.value)
    this.activeModal.close()
    window.location.reload()
  }

  ngOnInit(): void {

  }

  // file upload
  fileChange(event) {
    this.uploadedFiles = event.target.files[0].name;
    console.log(this.uploadedFiles)
  }

}
