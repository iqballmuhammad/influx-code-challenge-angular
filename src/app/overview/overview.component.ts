import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  columnsToDisplay = ['parameter', 'type', 'description'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
export interface Element {
  parameter: string;
  type: string;
  description: string;
}
const ELEMENT_DATA: Element[] = [
  {parameter: 'page', type: 'integer', description: 'page of results to retrieve (starting at 1)'},
  {parameter: 'name', type: 'string', description: 'Search by planet name'},
  {parameter: 'star_system', type: 'string', description: 'Search by star system'}
];
