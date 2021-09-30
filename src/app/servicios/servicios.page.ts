import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {

  constructor(private router:Router) { }

  goToAgendarHora(){
    this.router.navigate(['/servicios/reserva-hora'])

  }

  backtomenu(){
    this.router.navigate(['/menu/'])

  }

  ngOnInit() {
  }

}
