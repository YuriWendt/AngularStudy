import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edd-carrousel',
  templateUrl: './edd-carrousel.component.html',
  styleUrls: ['./edd-carrousel.component.scss']
})
export class EddCarrouselComponent {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor() { }

}
