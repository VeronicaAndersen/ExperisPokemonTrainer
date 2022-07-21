import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collected-button',
  templateUrl: './collected-button.component.html',
  styleUrls: ['./collected-button.component.css']
})
export class CollectedButtonComponent implements OnInit {

  @Input() pokemonId: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onCollectedClick(): void {
    // Add the pokemon to collected
    alert("Clicked collected " + this.pokemonId)
  }

}
