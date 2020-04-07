import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from 'src/assets/Team';
@Injectable({
  providedIn: 'root',
})
export class TeamPlannerService {
  constructor(private http: HttpClient) {}

  getTeamListFromJson() {
    return this.http
      .get<any>('assets/teamList.json')
      .toPromise()
      .then((res) => <Team[]>res)
      .then((data) => {
        return data;
      });
  }
  getReleaseNameFromJson() {
    return this.http
      .get<any>('assets/releaseNamesList.json')
      .toPromise()
      .then((res) => res)
      .then((data) => {
        return data;
      });
  }

  getUserNameFromJson() {
    return this.http
      .get<any>('assets/userList.json')
      .toPromise()
      .then((res) => res)
      .then((data) => {
        return data;
      });
  }

  getModelFromJson() {
    return this.http
      .get<any>('assets/modelList.json')
      .toPromise()
      .then((res) => res)
      .then((data) => {
        return data;
      });
  }

  getRoleFromJson() {
    return this.http
      .get<any>('assets/roleList.json')
      .toPromise()
      .then((res) => res)
      .then((data) => {
        return data;
      });
  }
  getAvailabilityFromJson() {
    return this.http
      .get<any>('assets/availabilityList.json')
      .toPromise()
      .then((res) => res)
      .then((data) => {
        return data;
      });
  }

  // From servers
  getTeamlist() {
    return this.http
      .get<any>('http://localhost:9000/getTeamList')
      .toPromise()
      .then((res) => <Team[]>res)
      .then((data) => {
        return data;
      });
  }

  addTeam(data: Team) {
    console.log('data' + data);
    return this.http
      .post('http://localhost:9000/addTeam', data)
      .toPromise()
      .then((data) => {
        console.log(data);
      });
  }
}
