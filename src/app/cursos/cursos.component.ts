import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  gitRepository: any;

  repos: any[] = [
    "JavaScript",
    "C#",
    "HTML",
  ];

  clickLogin(){
    
  }

  constructor(public cursosService: CursosService) {

    this.gitRepository = "https://github.com/YuriWendt";

    var servico = new CursosService();

    this.repos = this.cursosService.getCursos();
   }

  ngOnInit(): void {
  }

}
