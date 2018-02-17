import { Component, OnInit } from '@angular/core';
import { Planet } from './planet';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets: Planet[];

  getPlanets(): void {
    this.planetService.getPlanets().subscribe(
      planets => this.planets = planets);
  }
  constructor(private planetService: PlanetService) { }

  ngOnInit() {
    this.getPlanets();
  }

}
