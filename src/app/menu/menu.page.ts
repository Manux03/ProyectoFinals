import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

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

  backtoInicio(){
    this.router.navigate(['/inicio-sesion'])

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
