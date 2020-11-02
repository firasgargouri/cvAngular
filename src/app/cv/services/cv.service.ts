import { Injectable } from '@angular/core';
import { LoggerService } from 'src/app/serviecs/logger.service';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private personnes: Personne[] = [
    new Personne(
      1,
      'sellaouti',
      'aymen',
      38,
      1234,
      'teacher',
      ''
    ),
    new Personne(
      2,
      'sellaouti2',
      'aymen2',
      25,
      4321,
      'teacher2',
      'rotating_card_profile3.png'
    ),
    new Personne(
      3,
      'gargouri',
      'firas',
      43,
      4321,
      'etudiant',
      'rotating_card_profile2.png'
    ),
    new Personne(
      4,
      'aaa',
      'bbb',
      43,
      4321,
      'ccc',
      'rotating_card_profile.png'
    ),
    new Personne(
      5,
      'foulen',
      'ben foulen',
      43,
      4321,
      'etudiant',
      ''
    ),
  ];
  constructor(private loggerService: LoggerService) { }

  getPersonnes():Personne[]{
    return this.personnes;
  }

  // selecteItem(personne: Personne){
  //   this.personne = personne;
  // }

  getPersonne(id: number):Personne{
    return this.personnes.find((person)=>person.id==id);
  }

  deletePersonne(id: number){
    const index = this.personnes.indexOf(this.personnes.find((person)=>person.id==id), 0);
    if (index > -1) {
      this.personnes.splice(index, 1);
    }
  }

}
