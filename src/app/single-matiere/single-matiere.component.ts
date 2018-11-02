import { Component, OnInit } from '@angular/core';
import { MatiereService } from '../services/matiere.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-matiere',
  templateUrl: './single-matiere.component.html',
  styleUrls: ['./single-matiere.component.css']
})
export class SingleMatiereComponent implements OnInit {

  name: string = 'Matiere';
  status: string = 'Statut';
  like: number = 0;
  dislike: number = 0;

  constructor(private matiereService: MatiereService, private route: ActivatedRoute) { }

  ngOnInit() {
      const id = this.route.snapshot.params['id'];
      this.name = this.matiereService.getMatiereById(+id).name;
      this.status = this.matiereService.getMatiereById(+id).status;
      this.like = this.matiereService.getMatiereById(+id).like;
      this.dislike = this.matiereService.getMatiereById(+id).dislike;
  }

}
