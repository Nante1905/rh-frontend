export interface TypeContrat {
  id: number;
  name: string;
}

export interface Avantage {
  id: number;
  nom: string;
}

export interface ContratForm {
  typeContrat: number;
  debut: string;
  fin: string;
  salaireBrut: number;
  poste: number;
  categorie: number;
  avantages: Avantage[];
}

export interface Categorie {
  id: number;
  nom: string;
}
