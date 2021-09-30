import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router, private animationCtrl:AnimationController) {}

  gotoInicio(){
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
