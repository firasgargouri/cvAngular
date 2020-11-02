import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../model/personne';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id = 0;
  person: Personne;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params)=>{
        this.id = params['id'];
      }
    );
    this.person = this.cvService.getPersonne(this.id);
  }
  deleteCV(){
    this.cvService.deletePersonne(this.person.id);
    this.router.navigate(['cv']);
  }

}
