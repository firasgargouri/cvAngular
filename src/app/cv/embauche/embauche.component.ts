import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../model/personne';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {

  @Input() personnesEmbauchees: Personne[];
  constructor() { }

  ngOnInit(): void {
  }

}
