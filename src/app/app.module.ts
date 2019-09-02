import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetListComponent } from './planets/planet-list/planet-list.component';
import { PlanetDetailsComponent } from './planets/planet-details/planet-details.component';
import { PlanetItemComponent } from './planets/planet-list/planet-item/planet-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {HttpClientModule} from '@angular/common/http';
import { PlanetPartComponent } from './shared/planet-part/planet-part.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlanetsComponent,
    PlanetListComponent,
    PlanetDetailsComponent,
    PlanetItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    PlanetPartComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
