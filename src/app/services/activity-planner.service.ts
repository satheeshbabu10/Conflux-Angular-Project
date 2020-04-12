import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup , FormControl, Validators } from "@angular/forms";

import { Activity } from 'src/assets/Activity';

@Injectable({
  providedIn: 'root',
})

export class ActivityPlannerService {
  constructor(private http: HttpClient) {}

  getActivityListFromJson() {
    return this.http
      .get<any>('assets/activityList.json')
      .toPromise()
      .then((res) => <Activity[]>res)
      .then((data) => {
        return data;
      });
  }
  
    form : FormGroup = new FormGroup({

    $key : new FormControl(null),
    releaseName : new FormControl('1', Validators.required),
    sprintName : new FormControl('', Validators.required),
    userName : new FormControl('', Validators.required),
    activity : new FormControl('', Validators.required),
    plannedEffort : new FormControl('', Validators.required)
  });
  
    initializeFormGroup() {
    this.form.setValue({
      $key: null,
      releaseName: '1',
      sprintName: '',
      userName: '',
      activity: '',
      plannedEffort: ''
    });
  }
  
}
