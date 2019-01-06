import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexibilityBlockComponent } from './flexibility-block.component';

describe('FlexibilityBlockComponent', () => {
  let component: FlexibilityBlockComponent;
  let fixture: ComponentFixture<FlexibilityBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexibilityBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexibilityBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
