import { Injectable } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor() { }

  addToFavorites(hero: Hero) {
    console.log(hero);
  }
}
