import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResdashComponent } from './resdash.component';

describe('ResdashComponent', () => {
  let component: ResdashComponent;
  let fixture: ComponentFixture<ResdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
