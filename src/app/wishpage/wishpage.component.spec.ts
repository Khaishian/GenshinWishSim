import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishpageComponent } from './wishpage.component';

describe('WishpageComponent', () => {
  let component: WishpageComponent;
  let fixture: ComponentFixture<WishpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
