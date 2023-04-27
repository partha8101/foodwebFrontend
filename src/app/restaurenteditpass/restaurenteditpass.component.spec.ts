import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurenteditpassComponent } from './restaurenteditpass.component';

describe('RestaurenteditpassComponent', () => {
  let component: RestaurenteditpassComponent;
  let fixture: ComponentFixture<RestaurenteditpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurenteditpassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurenteditpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
