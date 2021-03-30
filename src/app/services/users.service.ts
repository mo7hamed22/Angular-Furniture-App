import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/classes/user';

@Injectable({
  providedIn: "root",
})
export class UsersService {
  _url = "http://localhost:5555/api/Auth/register";
  _url2 = "http://localhost:5555/api/Auth/login";

  constructor(private _http: HttpClient) {}

  register(user: User) {
    console.log(user);
    return this._http.post<any>(this._url, user);
  }

  login(user: User) {
    console.log(user);
    return this._http.post<any>(this._url2, user);
  }
}
