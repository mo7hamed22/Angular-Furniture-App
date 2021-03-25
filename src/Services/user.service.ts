import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from 'src/classes/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

 _url = "http://localhost:3000/";
  constructor(private _http: HttpClient) {}

  register(user:User) {
    return this._http.post<string>(this._url, user);
  }

}

