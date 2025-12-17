import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

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
  this.pokemonService.getPokemons().subscribe({
    next: (data: any[]) => {
      console.log("Dados recebidos da API:", data);
      this.pokemons = data;
      this.pokemons.sort((a, b) => a.nome.localeCompare(b.nome));
      if (this.pokemons.length > 0) {
        this.pokemonAtual = this.pokemons[0];
      }
    },
    error: (err: any) => {
      console.error('Erro ao buscar pokémons', err);
    }
  });
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
