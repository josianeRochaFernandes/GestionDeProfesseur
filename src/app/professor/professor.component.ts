import {Component, Input, OnInit} from '@angular/core';
import {Professor} from "../models/professor.model";
import {ProfessorService} from "../services/professor.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss']
})
export class ProfessorComponent implements OnInit {

  @Input() professor!: Professor;

  constructor(private professorServices : ProfessorService, private router: Router) { }

  ngOnInit(): void {
    const url = this.router.url.split('/');
    const id = url[2];
    this.professor = this.professorServices.getProfessorById(id);
  }

}
