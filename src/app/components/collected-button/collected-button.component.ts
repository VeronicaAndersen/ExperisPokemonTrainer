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

  public isCollected: boolean = false;
  @Input() pokemonId: number = 0;

  get loading(): boolean {
    return this.collectedService.loading;
  }

  constructor(
    private userService: UserService,
    private readonly collectedService: CollectedService
  ) { }

  ngOnInit(): void {
    // Inputs are resolved!
    this.isCollected = this.userService.inCollected(this.pokemonId);
  }

  onCollectedClick(): void {
    // Add the pokemon to collected
   this.collectedService.addToCollected(this.pokemonId)
    .subscribe({
      next: (responese: User) => {
        console.log("NEXT ", responese)
      }, 
        error: (error: HttpErrorResponse) => {
          console.log("ERROR ", error.message);
        }
    })
  }

}
