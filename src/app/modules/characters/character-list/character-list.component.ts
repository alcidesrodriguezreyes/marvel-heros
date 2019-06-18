import { Component, OnInit } from '@angular/core';

import { HeroService } from "../services/hero.service";
import { Hero } from 'src/app/interfaces/hero';
import { ResponseObject } from 'src/app/interfaces/response-object';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  heroList: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService
      .getCharacters()
      .subscribe((response: ResponseObject) => this.heroList = response.data.results);
  }

}
