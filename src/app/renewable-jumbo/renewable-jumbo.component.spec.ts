import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewableJumboComponent } from './renewable-jumbo.component';

describe('RenewableJumboComponent', () => {
  let component: RenewableJumboComponent;
  let fixture: ComponentFixture<RenewableJumboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewableJumboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewableJumboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
