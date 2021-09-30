import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { NavbarComponent } from '../core/navbar/navbar.component';
import { PersonsComponent } from '../core/persons/persons.component';
import { EventBindComponent } from '../core/event-bind/event-bind.component';
import { HomeComponent } from './home/home.component';
import { NavbarEddComponent } from '../core/navbar-edd/navbar-edd.component';
import { EddsportsComponent } from './eddsports/eddsports.component';
import { HowWorksComponent } from '../core/how-works/how-works.component';
import { EddCarrouselComponent } from '../core/edd-carrousel/edd-carrousel.component';



@NgModule({
  declarations: [
    NavbarEddComponent,
    NavbarComponent,
    PersonsComponent,
    EventBindComponent,
    EddsportsComponent,
    EddCarrouselComponent,
    HowWorksComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    NavbarEddComponent,
    NavbarComponent,
    PersonsComponent,
    EventBindComponent,
    EddsportsComponent,
    EddCarrouselComponent,
    HowWorksComponent,
    HomeComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PagesModule { }
