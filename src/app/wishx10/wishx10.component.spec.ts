import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wishx10Component } from './wishx10.component';

describe('Wishx10Component', () => {
  let component: Wishx10Component;
  let fixture: ComponentFixture<Wishx10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wishx10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wishx10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
