import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  nombreUsuario: string;

  constructor(private router:Router,private animationCtrl:AnimationController) { }

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

