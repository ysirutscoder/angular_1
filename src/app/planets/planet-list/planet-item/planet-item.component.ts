import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Planet} from '../../planet.modul';

@Component({
  selector: 'app-planet-item',
  templateUrl: './planet-item.component.html',
  styleUrls: ['./planet-item.component.scss']
})
export class PlanetItemComponent implements OnInit {
  @Input() planet: Planet ;
  @Output() planetSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  onSelected() {
    this.planetSelected.emit();

  }

}
