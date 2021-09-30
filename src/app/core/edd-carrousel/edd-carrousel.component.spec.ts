import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EddCarrouselComponent } from './edd-carrousel.component';

describe('EddCarrouselComponent', () => {
  let component: EddCarrouselComponent;
  let fixture: ComponentFixture<EddCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EddCarrouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EddCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
