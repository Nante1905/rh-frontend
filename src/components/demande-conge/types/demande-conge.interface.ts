import { Employe } from "../../../types/Employe";

export interface DemandeConge {
  id: number;
  emp: Employe;
  debut: string;
  fin: string;
  motif: string;
  type: TypeConge;
  status: number;
}

export interface TypeConge {
  id: number;
  nom: string;
  duree: number;
}
