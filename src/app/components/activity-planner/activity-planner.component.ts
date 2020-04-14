// import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Component, OnInit, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { ActivityPlannerService } from 'src/app/services/activity-planner.service';

// Interface
import { Activity } from 'src/assets/Activity';

// PrimeNG

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

    activityList: Activity[];

    activity: Activity;

    cols: any[];

    constructor(public activityPlannerService : ActivityPlannerService) { }

    ngOnInit(): void {
      this.activityPlannerService.getActivityListFromJson().then((activityList) => (this.activityList = activityList));

      this.cols = [
        { field: 'keyReference', header: 'Key Reference' },
        { field: 'releaseName', header: 'Release Name' },
        { field: 'sprintName', header: 'Sprint Name' },
        { field: 'userName', header: 'User Name' },
        { field: 'activity', header: 'Activity' },
        { field: 'plannedEffort', header: 'Planned Effort' }
      ];

    }

   public onClear() {
    this.activityPlannerService.form.reset();
    this.activityPlannerService.initializeFormGroup();
  }

  public onSubmit() {
    if (this.activityPlannerService.form.valid) {
      console.log("for value activity : " + this.activityPlannerService.form.value.activity);
      let temp = { ...this.activity };

      temp.releaseName = this.activityPlannerService.form.value.releaseName;
      temp.sprintName = this.activityPlannerService.form.value.sprintName;
      temp.userName = this.activityPlannerService.form.value.userName;
      temp.activity = this.activityPlannerService.form.value.activity;
      temp.plannedEffort = this.activityPlannerService.form.value.plannedEffort;
      temp.keyReference = temp.releaseName + temp.sprintName + temp.userName + temp.activity;

      this.activityList.push(temp);


      this.activityPlannerService.form.reset();
      this.activityPlannerService.initializeFormGroup();
      this.onClose();
    }
  }

  public onClose() {
    this.activityPlannerService.form.reset();
    this.activityPlannerService.initializeFormGroup();
  }

  public releaseArray = [
    { label: "R6.05 Lot 31", value: "R6.05 Lot 31" },
    { label: "R6.05 Lot 32", value: "R6.05 Lot 32" },
    { label: "R6.05 Lot 33", value: "R6.05 Lot 33" },
    { label: "R6.05 Lot 34", value: "R6.05 Lot 34" }
  ];

  public userArray = [
    { label: "Satheesh Babu", value: "Satheesh Babu" },
    { label: "Bala Sudhakar", value: "Bala Sudhakar" },
    { label: "Naresh Yarammareddy", value: "Naresh Yarammareddy" },
    { label: "Guna seelan", value: "Guna seelan" },
    { label: "Aashiq Ahmed", value: "Aashiq Ahmed" }
  ];

  public sprintArray = [
    { label: "Sprint 1", value: "Sprint 1" },
    { label: "Sprint 1", value: "Sprint 2" },
    { label: "Sprint 3", value: "Sprint 3" },
    { label: "Sprint 4", value: "Sprint 4" },
    { label: "Sprint 5", value: "Sprint 5" }
  ];

  public activitiesArray = [
    { label: "Leave", value: "Leave" },
    { label: "Support", value: "Support" },
    { label: "Training", value: "Training" },
    { label: "Others", value: "Others" }
  ];

}
