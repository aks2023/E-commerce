import { Component } from '@angular/core';
import { SellarService } from '../services/sellar.service';
import { Router } from '@angular/router';
import { DataType } from '../data-type';

@Component({
  selector: 'app-sellar-auth',
  templateUrl: './sellar-auth.component.html',
  styleUrl: './sellar-auth.component.css'
})
export class SellarAuthComponent {

  constructor(private Sellar: SellarService, private router: Router) {

  }

  signUp(data: DataType): void {
    console.warn(data);
    this.Sellar.userSignUp(data).subscribe(
      result => {
        if (result) {
          this.router.navigate(['sellar-home']);
        }
      }
    );
  }

}
