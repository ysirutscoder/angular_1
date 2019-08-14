import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetPartComponent } from './planet-part.component';

describe('PlanetPartComponent', () => {
  let component: PlanetPartComponent;
  let fixture: ComponentFixture<PlanetPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
