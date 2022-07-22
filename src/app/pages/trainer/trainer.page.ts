import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageKeys } from 'src/app/enums/storage-keys.enum';
import { Pokemon } from 'src/app/models/pokemon.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { StorageUtil } from 'src/app/utils/storage.util';

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
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    if (this.user !== undefined) {
      this.username = this.user.username;
    }
  }
  onLogoutClick(): void {
    window.localStorage.clear();
    this.router.navigateByUrl("/login");
    this.userService.user = undefined;
  }

}
