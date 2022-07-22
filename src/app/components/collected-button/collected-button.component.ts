import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { CollectedService } from 'src/app/services/collected.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-collected-button',
  templateUrl: './collected-button.component.html',
  styleUrls: ['./collected-button.component.css']
})
export class CollectedButtonComponent implements OnInit {


  public loading: boolean = false;

  public isCollected: boolean = false;
  @Input() pokemonId: number = 0;

  constructor(
    private userService: UserService,
    private readonly collectedService: CollectedService
  ) { }

  ngOnInit(): void {
    // Inputs are resolved!
    this.isCollected = this.userService.inCollected(this.pokemonId);
  }

  onCollectedClick(): void {
    this.loading = true;
    // Add the pokemon to collected
    this.collectedService.addToCollected(this.pokemonId)
      .subscribe({
        next: (user: User) => {
          this.loading = false;
          this.isCollected = this.userService.inCollected(this.pokemonId); // Render interface when adding a pokemon.
        },
        error: (error: HttpErrorResponse) => {
          console.log("ERROR ", error.message);
        }
      })
  }

}
