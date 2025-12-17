import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPokemonComponent } from './cadastrar-pokemon.component';

describe('CadastrarPokemonComponent', () => {
  let component: CadastrarPokemonComponent;
  let fixture: ComponentFixture<CadastrarPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
