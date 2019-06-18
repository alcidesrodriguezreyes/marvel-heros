import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterListItemComponent } from './character-list-item/character-list-item.component';
import { HeroService } from "./services/hero.service";
import { MatchHeightDirective } from 'src/app/directives/match-height.directive';

const routes: Routes = [
  {path: '', component: CharacterListComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [CharacterListComponent, CharacterListItemComponent, MatchHeightDirective],
  providers: [HeroService]
})
export class CharactersModule { }
