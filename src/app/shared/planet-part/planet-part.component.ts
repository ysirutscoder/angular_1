import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planet-part',
  templateUrl: './planet-part.component.html',
  styleUrls: ['./planet-part.component.scss']
})
export class PlanetPartComponent implements OnInit {
  public name: string;
  public amount: number;
  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }

  ngOnInit() {
  }

}
