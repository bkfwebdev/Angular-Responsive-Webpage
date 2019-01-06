import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressiveStatsComponent } from './impressive-stats.component';

describe('ImpressiveStatsComponent', () => {
  let component: ImpressiveStatsComponent;
  let fixture: ComponentFixture<ImpressiveStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpressiveStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpressiveStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
