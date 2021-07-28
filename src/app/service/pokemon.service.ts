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

  public getPokemonList(page: number): Observable<PagePokemon> {
    const offset = page === 1 ? 0 : (page - 1) * 20;
    console.log(offset);
    return this.http.get<PagePokemon>(
      `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
    );
  }
}
