import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterCoeComponent } from './enter-coe.component';

describe('EnterCoeComponent', () => {
  let component: EnterCoeComponent;
  let fixture: ComponentFixture<EnterCoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterCoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterCoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
