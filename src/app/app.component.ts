import { Component, OnInit } from '@angular/core';
import { MatiereService } from './services/matiere.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuth = false;

  // matieresOne = 'java';
  // matieresTwo = 'php';
  // matieresthree = 'faire des crêpes';


  // matieres = [
  //   {
  //     name: 'Java',
  //     status: 'éteint'
  //   },
  //   {
  //     name: 'Php',
  //     status: 'allumé'
  //   },
  //   {
  //     name: 'Faire des crepes',
  //     status: 'éteint'
  //   }
  // ];


  matieres: any[];

  constructor(private matiereService: MatiereService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
      this.matieres = this.matiereService.matieres;
  }
  //
  // onAllumer() {
  //     console.log('On allume tout !');
  //     this.matiereService.switchOnAll();
  // }
  //
  // onEteindre() {
  //     if(confirm('Etes-vous sûr de vouloir éteindre toutes vos matieres ?')) {
  //       this.matiereService.switchOffAll();
  //     } else {
  //       return null;
  //     }
  // }

}
