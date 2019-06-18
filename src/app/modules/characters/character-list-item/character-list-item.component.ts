import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import { FavoritesService } from 'src/app/shared/services/favorites.service';

@Component({
  selector: 'app-character-list-item',
  templateUrl: './character-list-item.component.html',
  styleUrls: ['./character-list-item.component.css']
})
export class CharacterListItemComponent implements OnInit {

  @Input() hero: Hero;

  constructor(private favoriteService: FavoritesService) { }

  ngOnInit() {
  }

  addToFavorites(hero: Hero) {
    this.favoriteService.addToFavorites(hero);
  }

}
