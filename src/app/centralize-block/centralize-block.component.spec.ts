import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralizeBlockComponent } from './centralize-block.component';

describe('CentralizeBlockComponent', () => {
  let component: CentralizeBlockComponent;
  let fixture: ComponentFixture<CentralizeBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralizeBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralizeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
