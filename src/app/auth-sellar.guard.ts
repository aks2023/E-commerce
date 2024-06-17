import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SellarService } from './services/sellar.service';

@Injectable({
  providedIn: 'root'
})
export class authSellarGuard implements CanActivate {

  constructor(private router: Router, private sellarService: SellarService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (localStorage.getItem('sellar')) {
      return true
    }

    return this.sellarService.isSellarLoggedIn;
  }
}