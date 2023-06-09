import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  // Emitt event to the parent component is hosting the login form
  @Output() login: EventEmitter<void> = new EventEmitter();

// Dependencis
  constructor(
    private readonly loginService: LoginService,
    private readonly userService: UserService,
    ) { }

  
  public loginSubmit(loginForm: NgForm): void{

    //* Takes the value from the input & declares it to username */
    const {username} = loginForm.value;
    
    this.loginService.login(username)
    .subscribe({
        next: (user: User) => {
          this.userService.user = user; 
          this.login.emit();
        },
        error: () => {
          // Handle that locally
        }
    })
  }

}
