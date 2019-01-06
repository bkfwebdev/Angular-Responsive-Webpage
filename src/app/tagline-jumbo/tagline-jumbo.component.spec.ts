import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaglineJumboComponent } from './tagline-jumbo.component';

describe('TaglineJumboComponent', () => {
  let component: TaglineJumboComponent;
  let fixture: ComponentFixture<TaglineJumboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaglineJumboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaglineJumboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
