import { Subject } from 'rxjs/Subject';

export class MatiereService {

  matieresSubject = new Subject<any[]>();

  private matieres = [
    {
      id: 1,
      name: 'Java',
      status: 'éteint',
      like: 1,
      dislike: 1
    },
    {
      id: 2,
      name: 'Php',
      status: 'allumé',
      like: 2,
      dislike: 1
    },
    {
      id: 3,
      name: 'Faire des crêpes',
      status: 'éteint',
      like: 0,
      dislike: 1
    }
  ];

  emitMatiereSubject() {
      this.matieresSubject.next(this.matieres.slice());
    }

  switchOnAll() {
    for(let matiere of this.matieres) {
      matiere.status = 'allumé';
    }
    this.emitMatiereSubject();
  }

  switchOffAll() {
    for(let matiere of this.matieres) {
      matiere.status = 'éteint';
      this.emitMatiereSubject();
    }
  }

  allLike() {
    for(let matiere of this.matieres) {
      matiere.like = matiere.like + 1;
      this.emitMatiereSubject();
    }
  }

  allDislike() {
    for(let matiere of this.matieres) {
      matiere.dislike = matiere.dislike + 1;
      this.emitMatiereSubject();
    }
  }

  onLike(i: number) {
    this.matieres[i].like = this.matieres[i].like + 1;
    return this.matieres[i].like;
  }

  onDislike(i: number) {
    this.matieres[i].dislike = this.matieres[i].dislike + 1;
    return this.matieres[i].dislike;
  }

  switchOnOne(i: number) {
    this.matieres[i].status = 'allumé';
    this.emitMatiereSubject();
  }

  switchOffOne(i: number) {
    this.matieres[i].status = 'éteint';
    this.emitMatiereSubject();
  }

  delete(i: number){
    this.matieres.splice(i, 1);
    this.emitMatiereSubject();
  }

  getMatiereById(id: number) {
    const matiere = this.matieres.find(
        (s) => {
            return s.id === id;
        }
    );
    return matiere;
  }

  addMatiere(name: string, status: string, like: number, dislike: number) {
    const matiereObject = {
      id: 0,
      name: '',
      status: '',
      like: 0,
      dislike: 0,
    };
    matiereObject.name = name;
    matiereObject.status = status;
    matiereObject.like = like;
    matiereObject.dislike = dislike;
    matiereObject.id = this.matieres[(this.matieres.length - 1)].id + 1;
    this.matieres.push(matiereObject);
    this.emitMatiereSubject();
  }

}
