import { Pokemon } from './../../models/pokemon.model';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  providers: [PokemonService],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.listarPokemons();
  }

  listarPokemons() {
    this.pokemonService.listaPokemon().subscribe((res: any) => {
      console.log(res);
    });
  }
  //console.log(this.pokemonService.getPokemon());
}
