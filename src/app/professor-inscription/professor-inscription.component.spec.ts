import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorInscriptionComponent } from './professor-inscription.component';

describe('ProfessorInscriptionComponent', () => {
  let component: ProfessorInscriptionComponent;
  let fixture: ComponentFixture<ProfessorInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorInscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
