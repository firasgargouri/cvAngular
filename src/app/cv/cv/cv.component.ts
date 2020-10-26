import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';
import { CvService } from '../services/cv.service';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  personnesEmbauchees:Personne[];
  selectedPersonne: Personne = null;
  constructor(public cvService: CvService,public embaucheService:EmbaucheService) {}

  ngOnInit(): void {
    this.personnesEmbauchees=this.embaucheService.getEmbauche();
  }

  getSelectedPersonne(selectedPersonne: Personne) {
    this.selectedPersonne = selectedPersonne;
  }
}
