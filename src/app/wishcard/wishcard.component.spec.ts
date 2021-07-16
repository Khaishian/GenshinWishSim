import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishcardComponent } from './wishcard.component';

describe('WishcardComponent', () => {
  let component: WishcardComponent;
  let fixture: ComponentFixture<WishcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
