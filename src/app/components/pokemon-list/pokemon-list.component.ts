import { Pokemon } from './../../models/pokemon.model';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';
import { PagePokemon } from 'src/app/models/pagePokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  providers: [],
})
export class PokemonListComponent implements OnInit {
  public pokemons: Pokemon[];
  error: any;

  constructor(private pokemonService: PokemonService) {
    this.getter();
  }

  ngOnInit(): void {}

  getter() {
    this.pokemonService.getPokemons().subscribe(
      (data: PagePokemon) => {
        this.pokemons = data.results;

        console.log('a data que rebemos', data);
        console.log('a variavel que preenchemos', this.pokemons);
      },
      (error: any) => {
        this.error = error;
        console.error('ERRO:', error);
      }
    );
  }
}
