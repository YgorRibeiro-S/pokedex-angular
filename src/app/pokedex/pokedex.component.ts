import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokemons: any[] = [];
  index: number = 0;
  pokemonAtual: any = null;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemons = this.pokemonService.getPokemons();
    if (this.pokemons.length > 0) {
      this.pokemonAtual = this.pokemons[this.index];
    }
  }

  proximo(): void {
    if (this.pokemons.length === 0) return;
    this.index = (this.index + 1) % this.pokemons.length;
    this.pokemonAtual = this.pokemons[this.index];
  }

  anterior(): void {
    if (this.pokemons.length === 0) return;
    this.index = (this.index - 1 + this.pokemons.length) % this.pokemons.length;
    this.pokemonAtual = this.pokemons[this.index];
  }

}
