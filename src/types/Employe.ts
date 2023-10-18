import { Contrat } from "../components/front-office/fo-contrat/types/Contrat";
import { Utilisateur } from "./Utilisateur";

export interface Employe {
    id: number,
    utilisateur: Utilisateur,
    matricule: string,
    contrat: Contrat
}