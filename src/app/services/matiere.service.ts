export class MatiereService {

  matieres = [
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

  getMatiereById(id: number) {
    const matiere = this.matieres.find(
        (s) => {
            return s.id === id;
        }
    );
    return matiere;
}

}
