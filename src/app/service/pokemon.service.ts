import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  //public apiUrl = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20';

  constructor(private http: HttpClient) {}

  listaPokemon() {
    //pegar pokemons

    return this.http.get(
      `https://pokeapi.co/api/v2/pokemon?offset=20&limit=20`
    );
  }
}
