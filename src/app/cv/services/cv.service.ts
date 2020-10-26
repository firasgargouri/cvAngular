import { Injectable } from '@angular/core';
import { LoggerService } from 'src/app/serviecs/logger.service';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  personne: Personne;
  private personnes: Personne[] = [
    new Personne(
      1,
      'sellaouti',
      'aymen',
      38,
      1234,
      'teacher',
      '        '
    ),
    new Personne(
      2,
      'sellaouti2',
      'aymen2',
      25,
      4321,
      'teacher2',
      'rotating_card_profile2.png'
    ),
    new Personne(
      2,
      'sellaouti2',
      'aymen2',
      43,
      4321,
      'teacher2',
      ''
    ),
  ];
  constructor(private loggerService: LoggerService) { }

  getPersonnes():Personne[]{
    return this.personnes;
  }

  selecteItem(personne: Personne){
    this.personne = personne;
  }

  getPersonne():Personne{
    return this.personne;
  }

}
