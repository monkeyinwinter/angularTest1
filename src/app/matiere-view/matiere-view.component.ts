import { Component, OnInit } from '@angular/core';
import { MatiereService } from '../services/matiere.service';

@Component({
  selector: 'app-matiere-view',
  templateUrl: './matiere-view.component.html',
  styleUrls: ['./matiere-view.component.css']
})

export class MatiereViewComponent implements OnInit {

  matieres: any[];

  isAuth: false;
  // lastUpdate = new Promise((resolve, reject) => {
  //   const date = new Date();
  //   setTimeout(
  //     () => {
  //       resolve(date);
  //     }, 2000
  //   );
  // });

  constructor(private matiereService: MatiereService) { }

  ngOnInit() {
    this.matieres = this.matiereService.matieres;
  }

  onAllumer() {
    this.matiereService.switchOnAll();
  }

  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre toutes vos matiereS ?')) {
      this.matiereService.switchOffAll();
    } else {
      return null;
    }
  }

}
