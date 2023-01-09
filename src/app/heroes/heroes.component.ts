import { Component } from '@angular/core';
import { Ihero } from '../interfaces/Ihero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  hero: Ihero ={
    id: 1,
    name: 'windStorm'
  }
}
