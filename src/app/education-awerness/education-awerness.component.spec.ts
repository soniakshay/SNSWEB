import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationAwernessComponent } from './education-awerness.component';

describe('EducationAwernessComponent', () => {
  let component: EducationAwernessComponent;
  let fixture: ComponentFixture<EducationAwernessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationAwernessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationAwernessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
