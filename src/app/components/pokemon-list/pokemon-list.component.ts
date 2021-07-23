import { Pokemon } from './../../models/pokemon.model';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';
import { PagePokemon } from 'src/app/models/pagePokemon.model';
import { url } from 'inspector';

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
        data.results.map((item) => {
          const idObj = parseInt(item.url.slice(34, -1));
          item.id = idObj;
          item.image = `https://pokeres.bastionbot.org/images/pokemon/${item.id}.png`;
        });
        this.pokemons = data.results;
        console.log(this.pokemons);
      },

      (error: any) => {
        this.error = error;
        console.error('ERRO:', error);
      }
    );
  }
}
