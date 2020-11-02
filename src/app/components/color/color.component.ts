import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggerService } from './../../serviecs/logger.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  defaultColor = 'blue';
  color = this.defaultColor;
  constructor(
    private loggerService: LoggerService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loggerService.logger('Bienvenu dans color component');
    this.activatedRoute.params.subscribe(
      (couleur) =>{
        this.color = couleur['couleur'];
      }
    )
  }
  changeColor(newColor: string ) {
    this.color = newColor;
  }
  reset() {
    this.color = this.defaultColor;
  }

}
