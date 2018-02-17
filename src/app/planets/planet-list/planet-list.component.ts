import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Planet } from '../planet';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
  @Input() planets: Planet[];
  message="";
  
  onClick (planet: Planet){
    this.message=`
      This is planet ${planet.name}, the ${planet.position} in ${planet.star_system} star system.
      ${planet.name} has ${planet.diameter} diameter, with ${planet.sentient_species}
      living on ${planet.atmosphere} atmosphere and ${planet.gravity} gravity.
    `;
    this.snackBar.open(
      this.message,
      "Planet Details",
       {
      duration: 2000,
    });
  }
  constructor(public snackBar: MatSnackBar) {}
  
  ngOnInit() {
  }

}
