import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';
import { VehicleService } from '../vehicle.service';
import { VehicleModalComponent } from '../vehicle-modal/vehicle-modal.component';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  // products: any = []
  // vehicles: any = []
  data: any
  form: FormGroup;
  showHide = true
  vehicles$: Observable<any>;

  constructor(private modalService: NgbModal, private vs: VehicleService, private fb: FormBuilder, private router: Router) {
    // this.showHide = true
    this.form = this.fb.group({
      checkArray: this.fb.array([], [Validators.required])
    });

  }

  // checkbox
  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
    // console.log('=======>', e.target.checked)
    if (e.target.checked) {
      console.log('=======>', e.target.checked)
      this.showHide = false
      checkArray.push(new FormControl(e.target.value));
    } else {
      console.log('=======>', e.target.checked)
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  submitForm() {
    this.data = this.form.value
    this.vs.deleteRecord(this.data)
    this.getVehiclesUsingAsyncPipe()
    this.router.navigate([''])
    // window.location.reload()

  }
  cancelSelected() {
    this.showHide = true
  }
  // open modal
  open() {
    const modalRef = this.modalService.open(VehicleModalComponent, { size: 'lg', centered: true });
    modalRef.componentInstance.modal_title = 'Add your vehicle';
    modalRef.componentInstance.modal_content = 'vehicle content';
  }

  public getVehiclesUsingAsyncPipe() {
    this.vehicles$ = this.vs.getVehicles()
    console.log('========>', this.vehicles$)
  }

  ngOnInit() {
    // this.vs.getVehicles().subscribe(data => {
    //   this.vehicles = data
    //   console.log('======vehicle', data)
    // })
    this.getVehiclesUsingAsyncPipe();

  }

}
