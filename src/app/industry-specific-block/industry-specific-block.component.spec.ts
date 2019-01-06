import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrySpecificBlockComponent } from './industry-specific-block.component';

describe('IndustrySpecificBlockComponent', () => {
  let component: IndustrySpecificBlockComponent;
  let fixture: ComponentFixture<IndustrySpecificBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustrySpecificBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustrySpecificBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
