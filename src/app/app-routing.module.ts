import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './pokedex/pokedex.component';
import { CadastrarPokemonComponent } from './cadastrar-pokemon/cadastrar-pokemon.component';

const routes: Routes = [
  { path: '', component: PokedexComponent },
  { path: 'cadastrar', component: CadastrarPokemonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
