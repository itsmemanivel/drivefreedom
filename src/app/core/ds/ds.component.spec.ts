import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DSComponent } from './ds.component';

describe('DSComponent', () => {
  let component: DSComponent;
  let fixture: ComponentFixture<DSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
