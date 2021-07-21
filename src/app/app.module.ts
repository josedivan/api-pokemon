import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PokemonService } from './service/pokemon.service';


@NgModule({
  declarations: [AppComponent, PokemonCardComponent, PokemonListComponent],

  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [PokemonService , HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
