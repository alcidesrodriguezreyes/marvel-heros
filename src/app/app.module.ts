import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { FavoritesService } from './shared/services/favorites.service';
import { FavoriteListComponent } from './shared/components/favorite-list/favorite-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    FavoriteListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [FavoritesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
