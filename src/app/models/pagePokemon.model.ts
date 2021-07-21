import { Pokemon } from './pokemon.model';

export class PagePokemon {
  public count: number;
  public next: string;
  public previous: string;
  public results: Pokemon[];
  static map: any;
  static results: any;
}
