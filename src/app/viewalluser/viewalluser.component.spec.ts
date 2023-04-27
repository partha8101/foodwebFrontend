import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewalluserComponent } from './viewalluser.component';

describe('ViewalluserComponent', () => {
  let component: ViewalluserComponent;
  let fixture: ComponentFixture<ViewalluserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewalluserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewalluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
