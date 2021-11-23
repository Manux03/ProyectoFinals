import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { NavigationExtras} from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  nombreUsuario: any;
  mensaje: any;
  
  constructor(private router:Router,private route: ActivatedRoute, private animationCtrl:AnimationController) 
  {
    this.route.queryParams.subscribe(params=>{
      console.log('params:',params)
      if(params && params.mensaje){
        this.mensaje = params.mensaje;
      }else{
        this.mensaje = "Error inico sesion"
      }
    })

  }

  gotoServicios(){
    this.router.navigate(['/servicios'])

  }

  gotoModificar(){
    
    this.router.navigate(['/editar'])

  }
  backtoInicio(){
    this.router.navigate(['/inicio-sesion'])

  }

  
  ngOnInit() {
  }

}
