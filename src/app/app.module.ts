import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { BookDataComponent } from './components/book-data/book-data.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CarListComponent } from './components/car-list/car-list.component';
import { RootNavComponent } from './components/root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TeamPlannerComponent } from './components/team-planner/team-planner.component';
import { ActivityPlannerComponent } from './components/activity-planner/activity-planner.component';
import { SkillsetPlannerComponent } from './components/skillset-planner/skillset-planner.component';
import { AddRowDirective } from './components/team-planner/add-row.directive';
import { TeamAvailabilityComponent } from './components/team-availability/team-availability.component';

// PrimeNg
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import {AutoCompleteModule} from 'primeng/autocomplete';


@NgModule({
  declarations: [  //For Components
    AppComponent,
    BookDataComponent,
    CarListComponent,
    RootNavComponent,
    TeamPlannerComponent,

    ActivityPlannerComponent,
    SkillsetPlannerComponent,
    AddRowDirective,
    TeamAvailabilityComponent

  ],
  imports: [ //For Modules and other third party dependency modules like PrimeNg
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    DialogModule,
    BrowserAnimationsModule,
    ButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DropdownModule,
    ConfirmDialogModule,
    AutoCompleteModule
    
    
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule { }
