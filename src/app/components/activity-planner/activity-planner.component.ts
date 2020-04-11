import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-activity-planner',
  templateUrl: './activity-planner.component.html',
  styleUrls: ['./activity-planner.component.css']
})
export class ActivityPlannerComponent implements OnInit {

  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    // this.titleService.setTitle("Activity Planner");

  }

}
