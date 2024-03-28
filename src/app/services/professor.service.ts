import { Injectable } from '@angular/core';
import {Professor} from "../models/professor.model";

@Injectable({
  providedIn: 'root'
})

export class ProfessorService {

  list_professor: Professor[] = [
    {id: '1', name : "Dupont", firstname : "James", city: "Paris", sexe: "M", contact: "+33 123456789", image: "https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg", description: "Bonjour je suis prof de math", price: 20, typeStudy: "presence", subjects: ["Math", "Physique"]},
    {id: '2', name : "Philip", firstname : "François", city: "Paris", sexe: "M", contact: "+33 098765432", image: "https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg", description: "Bonjour je suis prof de math", price: 21, typeStudy: "presence", subjects:["Math"]}
  ];

  list_subjects: string[] = [
    'Math',"Informatique","Physique","Geographie","Biologie","Anglais","Français","Allemand","Latin","Espagnol"];

  getAllProfessor(): Professor[] {return this.list_professor;}

  getAllSubjects(): string[]{return this.list_subjects;}


  getProfessorBySubject(subject: String): Professor[]{
    const list : Professor[] = [];
    for (let professor of this.list_professor) {
        for(let s of professor.subjects) {
          if (s == subject) {
            if (!list.find(prof => prof == professor)) {
              list.push(professor);
            }
          }
        }
    }

    if(list.length==0){ throw Error('Professor not found')}
    else return list;
  }

  getProfessorById(id:string): Professor{
    let prof!: Professor;
    for (let professor of this.list_professor) {
      if(professor.id==id){
        prof=professor
      }
    }
    return prof;
  }

  addNewProfessor(prof: Professor){
    const id = this.list_professor.length+1;
    const newProf = {id: id.toString(), name : prof.name, firstname : prof.firstname, city: prof.city, sexe: prof.sexe, contact: prof.contact, image: prof.image, description: prof.description, price: prof.price, typeStudy: prof.typeStudy, subjects: prof.subjects};
    this.list_professor.push(newProf);
  }
}

