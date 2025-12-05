import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemons = [
    { nome: 'Bulbasaur', tipo: 'Grass/Poison', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { nome: 'Charmander', tipo: 'Fire', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    { nome: 'Squirtle', tipo: 'Water', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
    { nome: 'Pikachu', tipo: 'Electric', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' },
    { nome: 'Jigglypuff', tipo: 'Fairy', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png' },
    { nome: 'Meowth', tipo: 'Normal', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png' },
    { nome: 'Psyduck', tipo: 'Water', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png' },
    { nome: 'Machop', tipo: 'Fighting', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png' },
    { nome: 'Geodude', tipo: 'Rock/Ground', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png' },
    { nome: 'Eevee', tipo: 'Normal', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png' },
    { nome: 'Vulpix', tipo: 'Fire', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png' },
    { nome: 'Oddish', tipo: 'Grass/Poison', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png' },
    { nome: 'Gengar', tipo: 'Ghost/Poison', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png' },
    { nome: 'Onix', tipo: 'Rock/Ground', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png' },
    { nome: 'Snorlax', tipo: 'Normal', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png' },
    { nome: 'Magikarp', tipo: 'Water', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png' },
    { nome: 'Dratini', tipo: 'Dragon', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png' },
    { nome: 'Mewtwo', tipo: 'Psychic', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png' },
    { nome: 'Articuno', tipo: 'Ice/Flying', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png' },
    { nome: 'Zapdos', tipo: 'Electric/Flying', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png' },
    { nome: 'Moltres', tipo: 'Fire/Flying', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png' },
    { nome: 'Caterpie', tipo: 'Bug', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' },
    { nome: 'Metapod', tipo: 'Bug', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' },
    { nome: 'Butterfree', tipo: 'Bug/Flying', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' },
    { nome: 'Pidgey', tipo: 'Normal/Flying', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' },
    { nome: 'Rattata', tipo: 'Normal', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png' },
    { nome: 'Fearow', tipo: 'Normal/Flying', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png' },
    { nome: 'Arbok', tipo: 'Poison', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png' },
    { nome: 'Sandshrew', tipo: 'Ground', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png' },
    { nome: 'Nidoran♀', tipo: 'Poison', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png' },
    { nome: 'Nidoran♂', tipo: 'Poison', imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png' }
  ];

  constructor() {
    this.pokemons.sort((a, b) => a.nome.localeCompare(b.nome));
  }

  getPokemons() {
    return this.pokemons;
  }

}