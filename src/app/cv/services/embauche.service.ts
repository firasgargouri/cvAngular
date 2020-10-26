import { Injectable } from '@angular/core';
import { LoggerService } from 'src/app/serviecs/logger.service';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  embauche: Personne[]=[];
  constructor(private loggerService: LoggerService) { }

  getEmbauche():Personne[]{
    return this.embauche;
  }

  embaucheDebauche(personne: Personne){
    const index = this.embauche.indexOf(personne);
    if(index>-1){
      this.embauche.splice(index, 1);
    }else{
      // if (!this.embauche.length) {
      //   personne.id = 1;
      // } else {
      //   todo.id = this.todos[this.todos.length - 1].id + 1;
      // }
      this.embauche.push(personne);
    }
  }
}
