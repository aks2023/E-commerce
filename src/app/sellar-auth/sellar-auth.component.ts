import { Component } from '@angular/core';
import { SellarService } from '../services/sellar.service';
import { Router } from '@angular/router';
import { DataType, DataTypeLogin } from '../data-type';

@Component({
  selector: 'app-sellar-auth',
  templateUrl: './sellar-auth.component.html',
  styleUrl: './sellar-auth.component.css'
})
export class SellarAuthComponent {

  showLogin = false;
  authError: string = ''

  constructor(private sellarService: SellarService, private router: Router) {

  }

  ngOnInit() {
    this.sellarService.reloadSellar()
  }

  signUp(data: DataType): void {
    console.warn(data);
    this.sellarService.userSignUp(data);
  }

  openLogin() {
    this.showLogin = true;
  }

  openSignp() {
    this.showLogin = false;
  }

  login(data: DataTypeLogin) {
    this.sellarService.userLogin(data);
    this.sellarService.isLoginError.subscribe((isError) => {
      if (isError) {
        this.authError = "User email or paswword is invalid";
      }
    })
  }


}
