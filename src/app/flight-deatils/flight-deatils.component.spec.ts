import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightDeatilsComponent } from './flight-deatils.component';

describe('FlightDeatilsComponent', () => {
  let component: FlightDeatilsComponent;
  let fixture: ComponentFixture<FlightDeatilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightDeatilsComponent]
    });
    fixture = TestBed.createComponent(FlightDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
