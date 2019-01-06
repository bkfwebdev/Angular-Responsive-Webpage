import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindJumboComponent } from './wind-jumbo.component';

describe('WindJumboComponent', () => {
  let component: WindJumboComponent;
  let fixture: ComponentFixture<WindJumboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindJumboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindJumboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
