import { Pokemon } from './../../models/pokemon.model';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';
import { PagePokemon } from 'src/app/models/pagePokemon.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  providers: [],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[];
  page = 1;
  totalPokemons: number;

  pokeList$: Observable<any>;

  error: any;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getter();
  }

  getter() {
    this.pokemonService.getPokemonList(this.page).subscribe(
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

  pagePrevious(): void {
    this.page = this.page === 1 ? this.page : this.page - 1;
    console.log('pagina: ', this.page);
    this.getter();
  }

  pageNext(): void {
    this.page = this.page + 1;
    console.log('pagina: ', this.page);
    this.getter();
  }
}
