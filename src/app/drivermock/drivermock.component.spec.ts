import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivermockComponent } from './drivermock.component';

describe('DrivermockComponent', () => {
  let component: DrivermockComponent;
  let fixture: ComponentFixture<DrivermockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivermockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivermockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
