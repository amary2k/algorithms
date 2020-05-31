import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberArrayGuiComponent } from './number-array-gui.component';

describe('NumberArrayGuiComponent', () => {
  let component: NumberArrayGuiComponent;
  let fixture: ComponentFixture<NumberArrayGuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberArrayGuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberArrayGuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
