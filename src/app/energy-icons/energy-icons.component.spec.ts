import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyIconsComponent } from './energy-icons.component';

describe('EnergyIconsComponent', () => {
  let component: EnergyIconsComponent;
  let fixture: ComponentFixture<EnergyIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergyIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
