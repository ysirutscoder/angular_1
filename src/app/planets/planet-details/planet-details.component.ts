import { Component, OnInit,Input } from '@angular/core';
import {Planet} from '../planet.modul';
import {map,tap} from 'rxjs/operators';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss'],

})
export class PlanetDetailsComponent implements OnInit {
   @Input() planets: Planet[] = [];
  constructor() { }

  ngOnInit() {
  }
}
