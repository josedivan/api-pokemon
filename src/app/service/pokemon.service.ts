import { logging } from 'protractor';
import { PagePokemon } from './../models/pagePokemon.model';

import { Pokemon } from './../models/pokemon.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  public getPokemons(): Observable<PagePokemon> {
    return this.http.get<PagePokemon>(`https://pokeapi.co/api/v2/pokemon`);
  }
}
