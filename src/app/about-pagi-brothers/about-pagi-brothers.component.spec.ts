import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPagiBrothersComponent } from './about-pagi-brothers.component';

describe('AboutPagiBrothersComponent', () => {
  let component: AboutPagiBrothersComponent;
  let fixture: ComponentFixture<AboutPagiBrothersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPagiBrothersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPagiBrothersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
