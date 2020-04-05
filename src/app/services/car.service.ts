import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Car {
  vin?;
  year?;
  brand?;
  color?;
}

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getCarlist() {
    return this.http.get<any>('http://localhost:9000/getCarsList')
      .toPromise()
      .then(res => <Car[]>res)
      .then(data => { return data; });
  }
	
	/*addCar(data: Car): Observable<any> {
		console.log("data"+data);
     return this.http.post('http://localhost:9000/addCar', data)
	 .toPromise()
	 .then(this.extractData)
        .catch(this.handleError);
	}
	*/
	
	addCar(data: Car) {
	console.log("data"+data);
     return this.http.post('http://localhost:9000/addCar', data)
	 .toPromise()
	 .then(data => {console.log(data);}
	 );
	}
	
}
