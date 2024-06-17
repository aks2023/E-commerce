import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { DataType, DataTypeLogin } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellarService {

  isSellarLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);

  constructor(private http: HttpClient, private router: Router) { }

  userSignUp(data: DataType) {
    this.http.post('http://localhost:3000/sellar', data, { observe: 'response' }).subscribe(
      (result) => {
        if (result) {

          localStorage.setItem('sellar', JSON.stringify(result.body))
          this.router.navigate(['sellar-home']);
        }


      });

  }

  reloadSellar() {
    if (localStorage.getItem('sellar')) {
      this.isSellarLoggedIn.next(true);
      this.router.navigate(['sellar-home']);
    }
  }

  userLogin(data: DataTypeLogin) {
    this.http.get(`http://localhost:3000/sellar?email=${data.email}&password=${data.password}`,
      { observe: 'response' }).subscribe((result: any) => {
        console.warn(result)
        if (result && result.body && result.body.length === 1) {
          this.isLoginError.emit(false)
          localStorage.setItem('sellar', JSON.stringify(result.body))
          this.router.navigate(['sellar-home'])
        } else {
          console.warn("login failed");
          this.isLoginError.emit(true)
        }
      })
  }


}
