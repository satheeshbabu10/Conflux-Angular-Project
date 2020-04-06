import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Team {
  releaseName;
  userName;
  model;
  role;
  availability;
}

@Injectable({
  providedIn: 'root',
})
export class ActivityPlannerService {
  constructor(private http: HttpClient) {}

  getTeamList() {
    return this.http
      .get<any>('assets/team-list.json')
      .toPromise()
      .then((res) => <Team[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
