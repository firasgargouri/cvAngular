import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../model/personne';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  @Input() personne: Personne = null;
  @Input() embaucheService: EmbaucheService;
  constructor() { }

  ngOnInit(): void {
  }

  embaucheDebauche(){
    this.embaucheService.embaucheDebauche(this.personne);
  }

}
