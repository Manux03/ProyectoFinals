import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from '../api.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  public nombreUsuario:any;
  email:any;
  password:any;
  datos: any;
  constructor(private router:Router,private http:HttpClient,private route: ActivatedRoute,public api:APIService) {


  }

  backtomenu(){
    this.router.navigate(['/menu'])
  }

  modificarUser(){
    this.api.getUsuarios().subscribe(resultados =>{

      var resultadoString = JSON.stringify(resultados);
      var usuarios = JSON.parse(resultadoString);

      for(let u in usuarios.Users){
        if(usuarios.Users[u].nombreUsuario == this.nombreUsuario){
          this.http.put("http://127.0.0.1:8000/api/usuarios/"+usuarios.Users[u].idUsuario,this.datos).subscribe((res: any)=>{
            this.datos = {
              'email': this.email,
              'password': this.password
            }
            this.router.navigate(['/menu'])
          })

        }
      } 
    })
  }
 
  eliminarUser(){
    this.api.getUsuarios().subscribe(resultados =>{

      var resultadoString = JSON.stringify(resultados);
      var usuarios = JSON.parse(resultadoString);

      for(let u in usuarios.Users){
        if(usuarios.Users[u].nombreUsuario == this.nombreUsuario){
          this.api.deleteUsuario(usuarios.Users[u].idUsuario).subscribe(res =>{
            this.router.navigate(['/menu'])
          })

        }
      } 
    })

  }
  
  ngOnInit() {
  }

  
}
