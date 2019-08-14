import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {PlanetPartComponent} from '../../shared/planet-part/planet-part.component';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static : false}) nameRef:ElementRef;
  @ViewChild('amountInput', {static : false}) amountRef:ElementRef;

  @Output() partAdded = new EventEmitter<PlanetPartComponent>();
  constructor() { }

  ngOnInit() {
  }
  onAdd() {
  const newPart = new PlanetPartComponent(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value);
  this.partAdded.emit(newPart);
  }


}
