import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectiontitleComponent } from './sectiontitle.component';

describe('SectiontitleComponent', () => {
  let component: SectiontitleComponent;
  let fixture: ComponentFixture<SectiontitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectiontitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectiontitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
