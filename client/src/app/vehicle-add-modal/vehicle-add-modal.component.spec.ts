import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleAddModalComponent } from './vehicle-add-modal.component';

describe('VehicleAddModalComponent', () => {
  let component: VehicleAddModalComponent;
  let fixture: ComponentFixture<VehicleAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
