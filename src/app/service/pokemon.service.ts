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
  image: any;
  results: any;
  constructor(private http: HttpClient) {}

  public getPokemons(): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon`);
  }
}
