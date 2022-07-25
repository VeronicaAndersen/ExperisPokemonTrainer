import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.css']
})
export class TrainerPage implements OnInit {

  public username: String = "";
  get user(): User | undefined {
    return this.userService.user;
  }

  get collected(): Pokemon[]{

    if (this.userService.user) {
      return this.userService.user.collected;
    }
    
    return [];
  }

  constructor(
    private userService: UserService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    if (this.user !== undefined) {
      this.username = this.user.username;
    }
  }

  // Clears localStorage and navigate user to loginPage
  onLogoutClick(): void {
    this.router.navigateByUrl("/login");
    this.userService.userLogout;
    this.userService.user = undefined;
  }

}
