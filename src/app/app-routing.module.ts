import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {ProfessorInscriptionComponent} from "./professor-inscription/professor-inscription.component";
import {ProfessorListComponent} from "./professor-list/professor-list.component";
import {ProfessorComponent} from "./professor/professor.component";

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component: LandingPageComponent},
  {path: 'inscription', component: ProfessorInscriptionComponent},
  {path: 'professors/:subject', component: ProfessorListComponent},
  {path: 'professor/:id', component: ProfessorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
