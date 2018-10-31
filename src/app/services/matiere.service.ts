export class MatiereService {

  matieres = [
    {
      name: 'Java',
      status: 'éteint'
    },
    {
      name: 'Php',
      status: 'allumé'
    },
    {
      name: 'Faire des crepes',
      status: 'éteint'
    }
  ];

  switchOnAll() {
    for(let matiere of this.matieres) {
      matiere.status = 'allumé';
    }
  }

  switchOffAll() {
    for(let matiere of this.matieres) {
      matiere.status = 'éteint';
    }
  }

  switchOnOne(i: number) {
    this.matieres[i].status = 'allumé';
  }

  switchOffOne(i: number) {
    this.matieres[i].status = 'éteint';
  }

}
