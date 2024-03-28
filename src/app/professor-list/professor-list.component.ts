import {Component, Input, OnInit} from '@angular/core';
import {Professor} from "../models/professor.model";
import {ProfessorService} from "../services/professor.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.scss']
})
export class ProfessorListComponent implements OnInit {

  @Input() list_professor!: Professor[];
  subject!:string;

  constructor(private professorServices: ProfessorService, private router: Router) { }

  ngOnInit(): void {
    const url = this.router.url.split('/');
    this.subject=url[2];
    this.list_professor= this.professorServices.getProfessorBySubject(this.subject);
  }



}
