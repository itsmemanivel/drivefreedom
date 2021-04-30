import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RADComponent } from './rad.component';

describe('RADComponent', () => {
  let component: RADComponent;
  let fixture: ComponentFixture<RADComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RADComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RADComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
