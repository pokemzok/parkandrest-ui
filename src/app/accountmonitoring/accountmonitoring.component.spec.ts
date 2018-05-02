import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMonitoringComponent } from './accountmonitoring.component';

describe('AccountMonitoringComponent', () => {
  let component: AccountMonitoringComponent;
  let fixture: ComponentFixture<AccountMonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountMonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
