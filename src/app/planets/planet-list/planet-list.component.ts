import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Planet} from '../planet.modul';
import {map,tap} from 'rxjs/operators';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss'],

})
export class PlanetListComponent implements OnInit {

  @Output() planetWasSelected = new EventEmitter<Planet>();

  public apiUrl = 'https://swapi.co/api/planets/?page=';
  planets: Planet[] = [];
  constructor(public http: HttpClient) { }
    getPlanet() {
    for ( let k = 1; k < 8 ; k++) {
      this.http.get(this.apiUrl + k).subscribe((res: any[]) => {
        console.log(res);
        this.planets = res;
      });
      }
    }
  ngOnInit() {
    this.getPlanet();
  }
  onPlanetSelected(planetion:Planet) {
    this.planetWasSelected.emit(planetion);
  }
}
