import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewoderComponent } from './viewoder.component';

describe('ViewoderComponent', () => {
  let component: ViewoderComponent;
  let fixture: ComponentFixture<ViewoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewoderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
