import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {


  public apiURL = 'http://127.0.0.1:8000/api/usuarios/';

  constructor(public http:HttpClient) { }

  getUsuarios(){
    return this.http.get(this.apiURL)
  }

  getUsuario(idUsuario){
    return this.http.get(`${this.apiURL}${idUsuario}`)
  }
   
  deleteUsuario(idUsuario){
    return this.http.delete(`${this.apiURL}${idUsuario}`)
  }
}