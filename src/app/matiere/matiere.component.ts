import { Component, Input, OnInit } from '@angular/core';
import { MatiereService } from '../services/matiere.service';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})
export class MatiereComponent implements OnInit {

  @Input() matiereName: string;
  @Input() matiereStatus: string;
  @Input() matiereLike: number;
  @Input() matiereDislike: number;
  @Input() index: number;
  @Input() id: number;


  constructor(private matiereService: MatiereService) {

  }
  onSwitch() {
    if(this.matiereStatus === 'allumé') {
      this.matiereService.switchOffOne(this.index);
    } else if(this.matiereStatus === 'éteint') {
      this.matiereService.switchOnOne(this.index);
    }
  }

  delete(){
    console.log('delete');
     this.matiereService.delete(this.index);
  }

  onLike(){
    console.log('+1');
     this.matiereLike = this.matiereService.onLike(this.index);
  }

  onDislike(){
    console.log('-1');
    this.matiereDislike = this.matiereService.onDislike(this.index);
  }

  ngOnInit() {
  }

  getStatus() {
    return this.matiereStatus;
  }

  getColor() {
      if(this.matiereStatus === 'allumé') {
        return 'green';
      } else if(this.matiereStatus === 'éteint') {
        return 'red';
      }
  }

  getLike() {
    return this.matiereLike;
  }
  getDislike() {
    return this.matiereDislike;
  }

}
