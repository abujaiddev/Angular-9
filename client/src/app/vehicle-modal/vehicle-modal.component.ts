import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VehicleService } from '../vehicle.service';


@Component({
  selector: 'app-vehicle-modal',
  templateUrl: './vehicle-modal.component.html',
  styleUrls: ['./vehicle-modal.component.css']
})
export class VehicleModalComponent implements OnInit {

  @Input() modal_title;
  @Input() modal_content;
  selectedFile: File
  myForm: FormGroup

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
      imageName: ['', Validators.required],
    })

  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]

    // console.log(this.selectedFile)
  }

  public submitForm() {
    const formData = new FormData()
    formData.append('imageName', this.selectedFile)
    console.log('=========formdaata', formData)

    // this.vs.createVehicle(this.myForm.value)
    // this.activeModal.close(this.myForm.value)
    // console.log('=========formvalue', this.myForm.value)
    // window.location.reload()
  }

  ngOnInit(): void {

  }

}
