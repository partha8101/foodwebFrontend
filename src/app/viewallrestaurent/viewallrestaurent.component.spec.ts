import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallrestaurentComponent } from './viewallrestaurent.component';

describe('ViewallrestaurentComponent', () => {
  let component: ViewallrestaurentComponent;
  let fixture: ComponentFixture<ViewallrestaurentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallrestaurentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallrestaurentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
