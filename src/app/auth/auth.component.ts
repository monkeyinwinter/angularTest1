import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn() {
    this.authService.signIn().then(
      () => {
        console.log('Sign in successful!');
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['matieres']);
      }
    );
  }

  onSignOut() {
    console.log('Sign off successful!');
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

  onSubmit(form: NgForm) {
      const password = form.value['password'];
      if (password === 'password'){
        console.log('Sign in successful!');
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['/matieres']);
      }
      else{
        console.log('Sign in pas bon!');
        this.router.navigate(['/auth']);
      }
  }

}
