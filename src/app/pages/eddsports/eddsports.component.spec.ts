import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EddsportsComponent } from './eddsports.component';

describe('EddsportsComponent', () => {
  let component: EddsportsComponent;
  let fixture: ComponentFixture<EddsportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EddsportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EddsportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
