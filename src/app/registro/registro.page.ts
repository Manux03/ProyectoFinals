import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from '../api.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  users: any = {};
  
  constructor(private router:Router,public api:APIService,private http:HttpClient) { }

  gotoInicio(){
    this.router.navigate(['/inicio-sesion'])

  }
  postUsuario() {
    this.http.post("http://127.0.0.1:8000/api/usuarios/",this.users).subscribe((res: any)=>{
      this.router.navigate(['/inicio-sesion'])
    })

  
 }
  ngOnInit() {
  }

}
