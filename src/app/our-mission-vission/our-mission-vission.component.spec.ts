import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMissionVissionComponent } from './our-mission-vission.component';

describe('OurMissionVissionComponent', () => {
  let component: OurMissionVissionComponent;
  let fixture: ComponentFixture<OurMissionVissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurMissionVissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurMissionVissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
