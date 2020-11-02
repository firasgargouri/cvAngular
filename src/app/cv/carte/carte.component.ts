import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  embaucheDebauche(){
    this.embaucheService.embaucheDebauche(this.personne);
  }

  details(){
    this.router.navigate(['cv',this.personne.id]);
  }

}
