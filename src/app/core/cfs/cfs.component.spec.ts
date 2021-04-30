import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CFSComponent } from './cfs.component';

describe('CFSComponent', () => {
  let component: CFSComponent;
  let fixture: ComponentFixture<CFSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CFSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CFSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
