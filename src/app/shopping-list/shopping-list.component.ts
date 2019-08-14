import { Component, OnInit } from '@angular/core';
import {PlanetPartComponent} from '../shared/planet-part/planet-part.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  planetParts: PlanetPartComponent[] = [
      new PlanetPartComponent('asteroid',12 ),
    new PlanetPartComponent('atmosfere',4 ),
    new PlanetPartComponent('core',1 ),
    new PlanetPartComponent('rings',8 ),
    new PlanetPartComponent('settelites',3 ),
  ];

  constructor() { }

  ngOnInit() {
  }
  onPartAdded(e) {
    this.planetParts.push(e);
  }

}
