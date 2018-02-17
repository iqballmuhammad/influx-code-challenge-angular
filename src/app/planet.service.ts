import { Injectable } from '@angular/core';
import { Planet } from './planets/planet';
import { PLANETS } from './planets/mock-planet';
import {Http, Response} from "@angular/http";
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";

@Injectable()
export class PlanetService {
  private apiUrl= "https://influx.com/code-challenge/planets.json";

  constructor(private http: Http) {

   }
  getPlanets(): Observable<Planet[]> {
    return this.http
      .get(this.apiUrl)
      .map(
        (response: Response) =>{
          return <Planet[]>response.json().data;
        }
      ).catch(this.handleError);
  }
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
}
}
