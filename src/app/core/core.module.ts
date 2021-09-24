import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonsComponent } from './persons/persons.component';
import { EventBindComponent } from './event-bind/event-bind.component';



@NgModule({
  declarations: [
    NavbarComponent,
    PersonsComponent,
    EventBindComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    PersonsComponent,
    EventBindComponent,
  ]
})
export class CoreModule { }
