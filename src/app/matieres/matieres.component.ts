import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-matieres',
  templateUrl: './matieres.component.html',
  styleUrls: ['./matieres.component.css']
})
export class MatieresComponent implements OnInit {

  @Input() matieresName: string;
  @Input() matieresStatus: string;

  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.matieresStatus;
  }

}
