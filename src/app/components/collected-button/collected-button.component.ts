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

  /* Creates a variable for the loading that are false from beginning. */
  public loading: boolean = false;

  /* Creates a variable for the collected btn that are false from start */
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
    /* When btn is clicked it will set loading to true.  */
    this.loading = true;

    /* Adds the pokemon to collected */
    this.collectedService.addToCollected(this.pokemonId)
      .subscribe({
        next: (user: User) => {
          this.loading = false; /* Sets loading back to false. */
          this.isCollected = this.userService.inCollected(this.pokemonId); /* Render interface when adding a pokemon. */
        },
        error: (error: HttpErrorResponse) => {
          console.log("ERROR ", error.message);
        }
      })
  }

}
