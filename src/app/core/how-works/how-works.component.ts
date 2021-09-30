import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-works',
  templateUrl: './how-works.component.html',
  styleUrls: ['./how-works.component.scss']
})
export class HowWorksComponent implements OnInit {

  video: any = "https://www.youtube.com/watch?v=cjAjqQUEsbI"
  text: any = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta mattis libero in fringilla. Mauris mauris ipsum, suscipit sit amet metus non, molestie scelerisque quam. Aenean sollicitudin, lorem eget cursus aliquet, augue nisl posuere diam, sed dictum quam dui eu justo. Nam dignissim dui id erat vehicula, eu maximus purus tempor. Quisque lobortis nisi eros, ut maximus lorem finibus ut. Proin suscipit dictum nunc, at consequat ante pharetra ac. Sed dignissim augue facilisis, tincidunt nunc congue, finibus neque. Nulla eros tortor, feugiat sed commodo ut, consectetur vitae nulla. Nam pretium tempor leo, non sollicitudin turpis pulvinar nec. Etiam cursus arcu vel tellus condimentum vulputate. Etiam orci ligula, ultrices id ipsum a, iaculis vulputate odio. Aliquam augue erat, placerat quis diam quis, pellentesque lobortis nisl. Curabitur tincidunt non est et laoreet. Pellentesque venenatis vulputate mi."


  constructor() { }

  ngOnInit(): void {
  }

}
