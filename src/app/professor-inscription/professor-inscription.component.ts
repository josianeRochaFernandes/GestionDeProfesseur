import { Component, OnInit } from '@angular/core';
import {ProfessorService} from "../services/professor.service";
import {Router} from "@angular/router";
import {Professor} from "../models/professor.model";
import {map, Observable} from "rxjs";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-professor-inscription',
  templateUrl: './professor-inscription.component.html',
  styleUrls: ['./professor-inscription.component.scss']
})
export class ProfessorInscriptionComponent implements OnInit {

  professorForm!: FormGroup;
  subjectsform = new FormControl('');
  coursform = new FormControl('');
  professorPreview$!: Observable<Professor>;
  subjects!: string[];

  constructor(private professorServices: ProfessorService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.subjects=this.professorServices.getAllSubjects();

    this.professorForm = this.fb.group({
      sexe: ["F", Validators.required],
      name: [null, Validators.required],
      firstname: [null , Validators.required],
      contact: [null, Validators.required],
      subjects: this.subjectsform,
      description: [null, Validators.required],
      price: [0, Validators.required],
      typeStudy: this.coursform,
      city: [null, Validators.required],
      image: [null, Validators.required]
    },{
      updateOn: 'blur'
    });


    this.professorPreview$ = this.professorForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,

      }))
    );
  }

  onSubmitForm() {
    this.professorServices.addNewProfessor(this.professorForm.value);
    this.router.navigateByUrl("home");
  }
}
