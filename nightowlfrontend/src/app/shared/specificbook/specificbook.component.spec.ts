import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificbookComponent } from './specificbook.component';

describe('SpecificbookComponent', () => {
  let component: SpecificbookComponent;
  let fixture: ComponentFixture<SpecificbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
