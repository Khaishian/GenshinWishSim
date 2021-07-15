import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishboardComponent } from './wishboard.component';

describe('WishboardComponent', () => {
  let component: WishboardComponent;
  let fixture: ComponentFixture<WishboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
