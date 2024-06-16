import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataType } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class SellarService {

  constructor(private http: HttpClient) { }

  userSignUp(data: DataType) {
    return this.http.post('http://localhost:3000/sellar', data)
  }
}
