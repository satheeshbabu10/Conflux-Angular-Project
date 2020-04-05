import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDataComponent } from './components/book-data/book-data.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { TeamPlannerComponent } from './components/team-planner/team-planner.component';

const routes: Routes = [
  { path: 'teamPlannerList', component: TeamPlannerComponent },
  { path: 'activityPlannerList', component: TeamPlannerComponent },
  { path: 'skillsetPlannerList', component: TeamPlannerComponent },
  { path: 'availabilityList', component: TeamPlannerComponent },
  // { path: '', redirectTo: 'team-planner', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
