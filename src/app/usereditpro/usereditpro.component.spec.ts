import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsereditproComponent } from './usereditpro.component';

describe('UsereditproComponent', () => {
  let component: UsereditproComponent;
  let fixture: ComponentFixture<UsereditproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsereditproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsereditproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
