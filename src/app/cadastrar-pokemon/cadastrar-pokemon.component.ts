import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-cadastrar-pokemon',
  templateUrl: './cadastrar-pokemon.component.html',
  styleUrls: ['./cadastrar-pokemon.component.css']
})
export class CadastrarPokemonComponent {

  pokemon = {
    nome: '',
    tipo: '',
    imagem: ''
  };

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) {}

  cadastrarPokemon() {
    console.log('clicou no cadastrar');
    this.pokemonService.cadastrarPokemon(this.pokemon).subscribe(
      () => {
        this.pokemon = {
          nome: '',
          tipo: '',
          imagem: ''
        };
        this.router.navigate(['/']);
      },
      (err) => {
        console.error(err);
        alert('Erro ao cadastrar Pokémon.');
      }
    );
  }

  voltar() {
    this.router.navigate(['/']);
  }
}
