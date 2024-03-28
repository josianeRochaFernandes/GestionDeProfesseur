import {Component, Input, OnInit} from '@angular/core';
import {Professor} from "../models/professor.model";
import {ProfessorService} from "../services/professor.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-professor-details',
  templateUrl: './professor-details.component.html',
  styleUrls: ['./professor-details.component.scss']
})
export class ProfessorDetailsComponent implements OnInit {

  @Input() professor!: Professor;

  constructor(private professorServices: ProfessorService, private router: Router) { }

  ngOnInit(): void {

  }

  getDetails(id: string |undefined){
    this.router.navigateByUrl("professor/"+id);
  }

}
