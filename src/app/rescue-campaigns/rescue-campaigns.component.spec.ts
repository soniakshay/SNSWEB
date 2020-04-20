import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RescueCampaignsComponent } from './rescue-campaigns.component';

describe('RescueCampaignsComponent', () => {
  let component: RescueCampaignsComponent;
  let fixture: ComponentFixture<RescueCampaignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RescueCampaignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RescueCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
