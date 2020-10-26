import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Personne } from '../model/personne';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() cvService: CvService;
  personnes: Personne[]=[];
  @Output() fowardSelectedPerson = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.personnes = this.cvService.getPersonnes();
  }

  forwardPersonne(selectedPersonne: Personne) {
    this.fowardSelectedPerson.emit(selectedPersonne);
  }
}
