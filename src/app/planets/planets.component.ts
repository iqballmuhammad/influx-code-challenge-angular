import { Component, OnInit } from '@angular/core';
import { Planet } from './planet';
import { PlanetService } from '../planet.service';
import { Config } from './config';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  config: Config;
  planets: Planet[];
  show = false;
  apiUrl= "https://influx.com/code-challenge/planets.json";
  page=1;
  totalPage=1;
  name="";
  star="";

  getInitialPlanets(): void {
    this.name ="";
    this.star= "";
    this.planetService.getPlanets(this.apiUrl).subscribe(
      config => {
        this.planets = config.data;
        this.page = config.page;
        this.totalPage = config.pages;
        this.show = true;
      }
    );
  }

  getNextPlanets(): void {
    this.planetService.getPlanets(this.apiUrl+"?name=" + this.name + "&star_system=" + this.star +"&page=" + (this.page+1)).subscribe(
      config => {
        this.planets = config.data;
        this.page = config.page;
        this.totalPage = config.pages;
      }
    );
  }

  getPrevPlanets(): void {
    this.planetService.getPlanets(this.apiUrl+"?name=" + this.name + "&star_system=" + this.star + "&page=" + (this.page-1)).subscribe(
      config => {
        this.planets = config.data;
        this.page = config.page;
        this.totalPage = config.pages;
      }
    );
  }

  searchName(name: string){
    this.star = "";
    this.name = name;
    this.planetService.getPlanets(this.apiUrl+"?name=" + name).subscribe(
      config => {
        this.planets = config.data;
        this.page = config.page;
        this.totalPage = config.pages;
        this.show = true;
      }
    );
  }
  searchStar(star: string){
    this.name = "";
    this.star = star;
    this.planetService.getPlanets(this.apiUrl+"?star_system=" + star).subscribe(
      config => {
        this.planets = config.data;
        this.page = config.page;
        this.totalPage = config.pages;
        this.show = true;
      }
    );
  }
    
  constructor(private planetService: PlanetService) { }

  ngOnInit() {
  }

}
