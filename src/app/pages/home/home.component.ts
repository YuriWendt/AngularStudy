import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor() {
  
}

getBackground(){
  return "url('https://image.freepik.com/free-vector/gradient-dynamic-blue-lines-background_23-2148995756.jpg')"
}

}
