import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EddsportsComponent } from '../app/pages/eddsports/eddsports.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'eddsports', component: EddsportsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
