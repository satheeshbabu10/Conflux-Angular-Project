import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";


// Interface
import { Activity } from 'src/assets/Activity';

// PrimeNG
import { SelectItem } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Confirmation } from 'primeng/api';
import { ActivityPlannerService } from 'src/app/services/activity-planner.service';


@Component({
  selector: 'app-activity-planner',
  templateUrl: './activity-planner.component.html',
  styleUrls: ['./activity-planner.component.css']
})

export class ActivityPlannerComponent implements OnInit {
  
  activityList: Activity[];
  
  activity: Activity;

  clonedActivity: { [s: string]: Activity; } = {};

  cols: any[];

  confirmDialogVisible = false;

  constructor(private confirmationservice: ConfirmationService,public activityPlannerService :ActivityPlannerService) { }
  
  ngOnInit() {

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
  onRowEditInit(activity: Activity) {
    console.log("Activity keyReference: " + activity.keyReference);
    this.clonedActivity[activity.keyReference] = { ...activity};
  }
  onRowEditCancel(activity: Activity, index: number) {
    this.activityList[index] = this.clonedActivity[activity.keyReference];
    delete this.clonedActivity[activity.keyReference];
  }

  onRowEditDelete(activity: Activity) {
    //this.messageService.add({severity:'success', summary: 'Success', detail:'Car is updated'});

    this.confirmationservice.confirm({
      message: 'Are you sure you want to delete this record?',
      accept: () => {
        let index = this.activityList.indexOf(activity);
        this.activityList = this.activityList.filter((val, i) => i != index);

      },
      reject: () => {

      }
    });
  }

  onRowEditSave(activity: Activity) {
    
    console.log("team userName: " + activity.userName);
    activity.keyReference = activity.releaseName + activity.sprintName + activity.userName + activity.activity;
    if (activity.keyReference) {

    } else {

    }

    //this.messageService.add({severity:'success', summary: 'Success', detail:'Car is updated'});

  }



  public onClear() {
    this.activityPlannerService.form.reset();
    this.activityPlannerService.initializeFormGroup();
  }

  public onSubmit() {
    if(this.activityPlannerService.form.valid) {
	  console.log("for value activity : "+this.activityPlannerService.form.value.activity);
    
	  let releaseName = this.activityPlannerService.form.value.releaseName;
	  let sprintName = this.activityPlannerService.form.value.sprintName;
    let userName = this.activityPlannerService.form.value.userName;
	  let activity = this.activityPlannerService.form.value.activity;
    let plannedEffort = this.activityPlannerService.form.value.plannedEffort;
    
    let sprintNameArray = sprintName.toString().split(","); 
    let userNameArray = userName.toString().split(","); 
    let activityArray =  activity.toString().split(",");

    console.log(sprintNameArray);
    console.log(userNameArray);
    console.log(activityArray);

    for(var i=0; i<sprintNameArray.length; i++) {
      for(var j=0; j<userNameArray.length; j++) {
        for(var k=0; k<activityArray.length; k++) {
          let temp = {...this.activity};
      
          temp.releaseName = releaseName;
          temp.sprintName = sprintNameArray[i];
          temp.userName = userNameArray[j];
          temp.activity = activityArray[k];
          temp.plannedEffort = plannedEffort;
          temp.keyReference = temp.releaseName + temp.sprintName + temp.userName + temp.activity;
          
          this.activityList.push(temp);
        }  
      }
    }
        //  console.log(typeof temp);   

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
    {label : "R6.05 Lot 31", value : "R6.05 Lot 31"},
    {label : "R6.05 Lot 32", value : "R6.05 Lot 32"},
    {label : "R6.05 Lot 33", value : "R6.05 Lot 33"},
    {label : "R6.05 Lot 34", value : "R6.05 Lot 34"}
  ];

  public userArray = [
    {label : "Satheesh Babu", value : "Satheesh Babu"},
    {label : "Bala Sudhakar", value : "Bala Sudhakar"},
    {label : "Naresh Yarammareddy", value : "Naresh Yarammareddy"},
    {label : "Guna seelan", value : "Guna seelan"},
    {label : "Aashiq Ahmed", value : "Aashiq Ahmed"}
  ];

  public sprintArray = [
    {label : "Sprint 1", value : "Sprint 1"},
    {label : "Sprint 2", value : "Sprint 2"},
	  {label : "Sprint 3", value : "Sprint 3"},
	  {label : "Sprint 4", value : "Sprint 4"},
	  {label : "Sprint 5", value : "Sprint 5"}
  ];

  public activitiesArray = [
    {label : "Leave", value : "Leave"},
    {label : "Support", value : "Support"},
    {label : "Training", value : "Training"},
    {label : "Others", value : "Others"}
  ];

}
