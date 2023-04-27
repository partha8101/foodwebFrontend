import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentregComponent } from './restaurentreg.component';

describe('RestaurentregComponent', () => {
  let component: RestaurentregComponent;
  let fixture: ComponentFixture<RestaurentregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurentregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurentregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
