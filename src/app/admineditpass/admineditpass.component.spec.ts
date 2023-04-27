import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditpassComponent } from './admineditpass.component';

describe('AdmineditpassComponent', () => {
  let component: AdmineditpassComponent;
  let fixture: ComponentFixture<AdmineditpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineditpassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmineditpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
