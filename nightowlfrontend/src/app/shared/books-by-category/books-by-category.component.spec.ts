import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksByCategoryComponent } from './books-by-category.component';

describe('BooksByCategoryComponent', () => {
  let component: BooksByCategoryComponent;
  let fixture: ComponentFixture<BooksByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
