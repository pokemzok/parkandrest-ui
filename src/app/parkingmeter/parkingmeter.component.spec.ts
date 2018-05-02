import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingMeterComponent } from './parkingmeter.component';

describe('ParkingMeterComponent', () => {
  let component: ParkingMeterComponent;
  let fixture: ComponentFixture<ParkingMeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingMeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
