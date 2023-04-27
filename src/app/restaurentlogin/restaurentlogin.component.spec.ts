import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentloginComponent } from './restaurentlogin.component';

describe('RestaurentloginComponent', () => {
  let component: RestaurentloginComponent;
  let fixture: ComponentFixture<RestaurentloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurentloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurentloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
