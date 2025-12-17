import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'http://localhost:8080/Pokemons';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  cadastrarPokemon(pokemon: any): Observable<any> {
    return this.http.post(this.apiUrl, pokemon);
  }
}