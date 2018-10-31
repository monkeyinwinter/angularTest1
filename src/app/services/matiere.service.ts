import { Subject } from 'rxjs/Subject';

export class MatiereService {

  matieresSubject = new Subject<any[]>();

  private matieres = [
    {
      id: 1,
      name: 'Java',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Php',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Faire des crepes',
      status: 'éteint'
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

  switchOnOne(i: number) {
    this.matieres[i].status = 'allumé';
    this.emitMatiereSubject();
  }

  switchOffOne(i: number) {
    this.matieres[i].status = 'éteint';
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

  addMatiere(name: string, status: string) {
    const matiereObject = {
      id: 0,
      name: '',
      status: ''
    };
    matiereObject.name = name;
    matiereObject.status = status;
    matiereObject.id = this.matieres[(this.matieres.length - 1)].id + 1;
    this.matieres.push(matiereObject);
    this.emitMatiereSubject();
  }

}
