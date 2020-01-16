import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpodosComponent } from './cuerpodos.component';

describe('CuerpodosComponent', () => {
  let component: CuerpodosComponent;
  let fixture: ComponentFixture<CuerpodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuerpodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
