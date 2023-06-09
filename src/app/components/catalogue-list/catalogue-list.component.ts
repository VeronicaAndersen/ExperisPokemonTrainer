import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-catalogue-list',
  templateUrl: './catalogue-list.component.html',
  styleUrls: ['./catalogue-list.component.css']
})
export class CatalogueListComponent implements OnInit {
  // This creates an empty array from Pokemon model.
  @Input() pokemons: Pokemon[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}