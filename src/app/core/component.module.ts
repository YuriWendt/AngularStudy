import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from '../core/navbar/navbar.component';
import { PersonsComponent } from '../core/persons/persons.component';
import { EventBindComponent } from '../core/event-bind/event-bind.component';
import { NavbarEddComponent } from '../core/navbar-edd/navbar-edd.component';
import { HowWorksComponent } from './how-works/how-works.component';
import { EddCarrouselComponent } from './edd-carrousel/edd-carrousel.component';


@NgModule({
  declarations: [
    NavbarEddComponent,
    NavbarComponent,
    PersonsComponent,
    EventBindComponent,
    HowWorksComponent,
    EddCarrouselComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarEddComponent,
    NavbarComponent,
    PersonsComponent,
    EventBindComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})

export class ComponentModule { }
