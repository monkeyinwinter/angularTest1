import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatiereService } from '../services/matiere.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-matiere',
  templateUrl: './edit-matiere.component.html',
  styleUrls: ['./edit-matiere.component.css']
})
export class EditMatiereComponent implements OnInit {

  defaultOnOff = 'éteint';

  constructor(private matiereService: MatiereService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
      console.log(form.value);
      const name = form.value['name'];
      const status = form.value['status'];
      const like = form.value['like'];
      const dislike = form.value['dislike'];
      this.matiereService.addMatiere(name, status, like, dislike);
      this.router.navigate(['/matieres']);
  }

}
