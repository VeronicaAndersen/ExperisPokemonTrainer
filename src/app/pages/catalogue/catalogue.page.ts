import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.css']
})
export class CataloguePage implements OnInit {

  // Gets pokemons from pokemon models.
  get pokemons(): Pokemon[]{
    return this.catalogueService.pokemons;
  }

  // Gets status from loading.
  get loading(): boolean{
    return this.catalogueService.loading;
  }

  // Gets error.
  get error(): string{
    return this.catalogueService.error;
  }

  constructor(
    private readonly catalogueService: CatalogueService
  ) { }

  ngOnInit(): void {
    this.catalogueService.findAllPokemons();
  }

}
