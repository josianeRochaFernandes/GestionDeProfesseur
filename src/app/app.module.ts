import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfessorComponent } from './professor/professor.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import { ProfessorListComponent } from './professor-list/professor-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatTabsModule} from "@angular/material/tabs";
import { ProfessorInscriptionComponent } from './professor-inscription/professor-inscription.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { ProfessorDetailsComponent } from './professor-details/professor-details.component';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";

@NgModule({
  declarations: [
    AppComponent,
    ProfessorComponent,
    ProfessorListComponent,
    LandingPageComponent,
    ProfessorInscriptionComponent,
    ProfessorDetailsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NoopAnimationsModule,
        MatCardModule,
        MatListModule,
        MatFormFieldModule,
        MatIconModule,
        FormsModule,
        MatOptionModule,
        MatSelectModule,
        MatTabsModule,
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatRadioModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
