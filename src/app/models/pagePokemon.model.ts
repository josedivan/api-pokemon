import { Pokemon } from './pokemon.model';

export class PagePokemon {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}
