import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { SectiontitleComponent } from './sectiontitle/sectiontitle.component';
import { OurProfileComponent } from './our-profile/our-profile.component';
import { OurMissionVissionComponent } from './our-mission-vission/our-mission-vission.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { AboutPagiBrothersComponent } from './about-pagi-brothers/about-pagi-brothers.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { SomeFactsComponent } from './some-facts/some-facts.component';
import { ConservationComponent } from './conservation/conservation.component';
import { EducationAwernessComponent } from './education-awerness/education-awerness.component';
import { RescueCampaignsComponent } from './rescue-campaigns/rescue-campaigns.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    SectiontitleComponent,
    OurProfileComponent,
    OurMissionVissionComponent,
    OurTeamComponent,
    AboutPagiBrothersComponent,
    LifeCycleComponent,
    SomeFactsComponent,
    ConservationComponent,
    EducationAwernessComponent,
    RescueCampaignsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
