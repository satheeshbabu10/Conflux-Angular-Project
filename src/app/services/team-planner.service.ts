import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Team } from 'src/assets/Team';

@Injectable({
  providedIn: 'root'
})

export class TeamPlannerService {

  constructor(private http: HttpClient) { }

  getTeamListFromJson() {
    return this.http.get<any>('assets/teamList.json')
      .toPromise()
      .then(res => <Team[]>res)
      .then(data => { return data; });
    }
	
  getTeamlist() {
    return this.http.get<any>('http://localhost:9000/getTeamList')
      .toPromise()
      .then(res => <Team[]>res)
      .then(data => { return data; });
  }

  addTeam(data: Team) {
	console.log("data"+data);
     return this.http.post('http://localhost:9000/addTeam', data)
	 .toPromise()
	 .then(data => {console.log(data);}
	 );
	}
}
