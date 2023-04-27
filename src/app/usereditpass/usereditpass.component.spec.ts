import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsereditpassComponent } from './usereditpass.component';

describe('UsereditpassComponent', () => {
  let component: UsereditpassComponent;
  let fixture: ComponentFixture<UsereditpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsereditpassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsereditpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
