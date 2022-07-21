import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-catalogue-list-item',
  templateUrl: './catalogue-list-item.component.html',
  styleUrls: ['./catalogue-list-item.component.css']
})
export class CatalogueListItemComponent implements OnInit {

  @Input() pokemon?: Pokemon

  constructor() { }

  ngOnInit(): void {
  }

}
