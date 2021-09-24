import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.scss']
})
export class EventBindComponent implements OnInit {

  charmander: any = 'https://www.anime-planet.com/images/characters/174638.jpg'
  charmeleon: any = 'https://i.pinimg.com/564x/f3/fa/0d/f3fa0ddb5171c498ae196aca99fa2710.jpg'
  charizard: any = 'https://i.pinimg.com/564x/51/e6/bd/51e6bd60bbe9564ba856e7498b8afcdf.jpg'
  currentValue: string = '';
  imgSrc: any = "https://i.pinimg.com/564x/2d/e2/e0/2de2e0892fc7bc282968b37e10d7add4.jpg";
  imgSrc2: any = "https://www.anime-planet.com/images/characters/174638.jpg?t=1574798413";

  clickButton(){
    alert("Click")
  }

  buttonEvolution(){
    this.imgSrc2 = this.charizard;
  }

  buttonRevert(){
    if (this.imgSrc2 === this.charizard){
      this.imgSrc2 = this.charmeleon
    } else {
      this.imgSrc2 = this.charmander;
    }
  }

  onKeyUp(evento: KeyboardEvent){
    this.currentValue = (<HTMLInputElement>evento.target).value;
  }

  onMouseOver(){
    this.imgSrc = "https://i.pinimg.com/originals/bf/a5/3b/bfa53b2488eb224410ac1edfbecb2a34.png";
  }

  onMouseOut(){
    this.imgSrc = "https://i.pinimg.com/564x/2d/e2/e0/2de2e0892fc7bc282968b37e10d7add4.jpg";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
