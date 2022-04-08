import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopratedbooksComponent } from './topratedbooks.component';

describe('TopratedbooksComponent', () => {
  let component: TopratedbooksComponent;
  let fixture: ComponentFixture<TopratedbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopratedbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopratedbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
