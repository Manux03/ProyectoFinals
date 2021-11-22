import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {


  public apiURL = 'https://b631-186-35-95-210.ngrok.io/api/usuarios/';

  constructor(public http:HttpClient) { }

  getUsuarios(){
    return this.http.get(this.apiURL)
  }
}