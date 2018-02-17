import { Injectable } from '@angular/core';
import { Planet } from './planets/planet';
import { PLANETS } from './planets/mock-planet';
import {Http, Response} from "@angular/http";
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";
import { Config } from './planets/config';

@Injectable()
export class PlanetService {

  constructor(private http: Http) {

   }
  getPlanets(apiUrl): Observable<Config> {
      return this.http
      .get(apiUrl)
      .map(
        (response: Response) =>{
          return <Config[]>response.json();
        }
      ).catch(this.handleError);
  }
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
