import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEddComponent } from './navbar-edd.component';

describe('NavbarEddComponent', () => {
  let component: NavbarEddComponent;
  let fixture: ComponentFixture<NavbarEddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarEddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarEddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
