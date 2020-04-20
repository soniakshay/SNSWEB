import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeFactsComponent } from './some-facts.component';

describe('SomeFactsComponent', () => {
  let component: SomeFactsComponent;
  let fixture: ComponentFixture<SomeFactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeFactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
