import { Component, OnInit } from '@angular/core';
import {ProfessorService} from "../services/professor.service";
import {Professor} from "../models/professor.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  list_prof!: Professor[];
  selected = "Math";
  subjects!: String[];
  prof!: Professor;

  constructor(private professorServices: ProfessorService, private router: Router) { }

  ngOnInit(): void {
    this.list_prof=this.professorServices.getProfessorBySubject(this.selected);
    this.subjects = this.professorServices.getAllSubjects();
  }

  getListProfessor(subject:string){
    this.router.navigateByUrl("professors/"+subject);
  }


}
