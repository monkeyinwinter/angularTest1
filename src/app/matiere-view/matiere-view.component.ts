import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatiereService } from '../services/matiere.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-matiere-view',
  templateUrl: './matiere-view.component.html',
  styleUrls: ['./matiere-view.component.css']
})

export class MatiereViewComponent implements OnInit, OnDestroy {

  matieres: any[];
  matiereSubscription: Subscription;
  isAuth: false;

  constructor(private matiereService: MatiereService) { }

  ngOnInit() {
    this.matiereSubscription = this.matiereService.matieresSubject.subscribe(
      (matieres: any[]) => {
        this.matieres = matieres;
      }
    );
    this.matiereService.emitMatiereSubject();
  }

  allLike() {
    this.matiereService.allLike();
  }

  allDislike() {
    this.matiereService.allDislike();
  }

  onAllumer() {
    this.matiereService.switchOnAll();
  }

  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre toutes vos matieres ?')) {
      this.matiereService.switchOffAll();
    } else {
      return null;
    }
  }

  ngOnDestroy() {
    this.matiereSubscription.unsubscribe();
  }

}
