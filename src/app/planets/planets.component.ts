import { Component, OnInit } from '@angular/core';
import {Planet} from './planet.modul';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  selectedPlanet: Planet;
  constructor() { }

  ngOnInit() {
  }

}
