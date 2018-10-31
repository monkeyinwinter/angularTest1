import { Component, OnInit } from '@angular/core';
import { MatiereService } from './services/matiere.service';
import { interval} from 'rxjs/observable/interval';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuth = false;

  matieres: any[];

  secondes: number;

  counterSubscription: Subscription;

  lastUpdate = new Promise((resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    });

  constructor(private matiereService: MatiereService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
      //this.matieres = this.matiereService.matieres;
      const counter = interval(1000);

      this.counterSubscription = counter.subscribe(
        (value) => {
          this.secondes = value;
          console.log('ok ça tourne'/* + this.secondes*/);
        },
        (error) => {
          console.log('Uh-oh, an error occurred! : ' + error);
        },
        () => {
          console.log('Observable complete!');
        }
      );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }

}
