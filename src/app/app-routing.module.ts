import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { AboutPagiBrothersComponent } from './about-pagi-brothers/about-pagi-brothers.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { OurProfileComponent } from './our-profile/our-profile.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurMissionVissionComponent } from './our-mission-vission/our-mission-vission.component';
import { SomeFactsComponent } from './some-facts/some-facts.component';
import { ConservationComponent } from './conservation/conservation.component';
import { EducationAwernessComponent } from './education-awerness/education-awerness.component';
import { RescueCampaignsComponent } from './rescue-campaigns/rescue-campaigns.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'profile', component: OurProfileComponent },
  { path: 'missionandvision', component: OurMissionVissionComponent },
  { path: 'ourTeam', component: OurTeamComponent },
  { path: 'aboutPagiBrothers', component: AboutPagiBrothersComponent },
  { path: 'lifeCycle', component: LifeCycleComponent },
  { path: 'someFacts', component: SomeFactsComponent },
  { path: 'conservation', component: ConservationComponent },
  { path: 'eductionAwerness', component: EducationAwernessComponent},
  { path: 'campaigns', component: RescueCampaignsComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
