import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactivepageComponent } from './inactivepage.component';

describe('InactivepageComponent', () => {
  let component: InactivepageComponent;
  let fixture: ComponentFixture<InactivepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InactivepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InactivepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
