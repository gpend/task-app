import { Component } from '@angular/core';
import { Ihero } from '../interfaces/Ihero';
import { HEROES } from '../mock-heros';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {
  heros = HEROES;
  selectedHero? : Ihero;
  onSelect(hero:Ihero):void{
    this.selectedHero = hero
  }
}
