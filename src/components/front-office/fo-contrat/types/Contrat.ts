import { Utilisateur, Ville } from "../../../../types/Utilisateur";
import { Avantage, Categorie } from "../../../contrat/types/contrat.interface";
import { Service } from "../../../form-annonce/types/JobCriteria";

export interface JobMin {
    idJob: number,
    title: string,
    service: Service,
    ville: Ville,
    volume: number,
    mission: string
}

interface Type {
    id: number,
    nom: string
}

export interface Contrat {
    id: number,
    utilisateur: Utilisateur,
    job: JobMin,
    type: Type,
    salaireBrut: number,
    debut: string,
    fin: string,
    anciennete: string,
    creation: string,
    avantages: Avantage[],
    categorie: Categorie
}