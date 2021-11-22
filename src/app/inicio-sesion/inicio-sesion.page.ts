import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { APIService } from '../api.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  nombreUsuario: string;
  passUsuario:string;
  public email:any;
  public contraseña:any;
  public idUsuario:any;

  constructor(private router:Router,private animationCtrl:AnimationController,public api:APIService) { }
  goToMenu(){
    if(this.nombreUsuario == null){
      let navigationExtras:NavigationExtras = {
        queryParams:{
            mensaje: '-----'
        }
      }
      this.router.navigate(['/menu'],navigationExtras)

    }else{
    let navigationExtras:NavigationExtras = {
      queryParams:{
          mensaje: this.nombreUsuario
      }
    }
    this.router.navigate(['/menu'],navigationExtras)
    }

  }

  buscarUsuario(){
    this.api.getUsuarios().subscribe(resultado => {

      var resultadoString = JSON.stringify(resultado);
      var usuarios = JSON.parse(resultadoString);
      for(let u in usuarios.Users){
        if((usuarios.Users[u].nombreUsuario == this.nombreUsuario)){
          if(usuarios.Users[u].password = this.passUsuario){
            console.log("conexion");
          }else{
            console.log("error pass");
          }
          break;
        }else{
          console.log("usuarios no encontrado");
          break;
        }
      }


    });

  }

  ngAfterViewInit(){
    const animation = this.animationCtrl.create().
    addElement(document.querySelector('.nombreTaller'))
    .duration(2000)
    .iterations(Infinity)
    .keyframes([
    { offset: 0, transform: 'scale(1)' },
    { offset: 0.5, transform: 'scale(1.5)' },
    { offset: 1, transform: 'scale(1)' }
    ]);
    animation.play() 
  }

  ngOnInit() {
  }




}