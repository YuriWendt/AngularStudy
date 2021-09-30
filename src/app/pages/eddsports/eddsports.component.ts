import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eddsports',
  templateUrl: './eddsports.component.html',
  styleUrls: ['./eddsports.component.scss'],
})
export class EddsportsComponent implements OnInit {

  constructor() { }

  getBackground() {
    return "url('../../../assets/edd-background')"
  }

  ngOnInit(): void {
  }

}
