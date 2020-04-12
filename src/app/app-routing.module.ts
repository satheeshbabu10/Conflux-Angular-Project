import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDataComponent } from './components/book-data/book-data.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { TeamPlannerComponent } from './components/team-planner/team-planner.component';
import { ActivityPlannerComponent } from './components/activity-planner/activity-planner.component';
import { SkillsetPlannerComponent } from './components/skillset-planner/skillset-planner.component';
import { TeamAvailabilityComponent } from './components/team-availability/team-availability.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/teamPlannerList',
    pathMatch: 'full'
  }
  , { path: 'teamPlannerList', component: TeamPlannerComponent },
  { path: 'activityPlannerList', component: ActivityPlannerComponent },
  { path: 'skillsetPlannerList', component: SkillsetPlannerComponent },
  { path: 'availabilityList', component: TeamAvailabilityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
