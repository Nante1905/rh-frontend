
import { Question } from "../../../types/QuestionClass";

export interface Diplome {
  id?: number;
  nom?: string;
}

export interface Domaine {
  id?: number,
  nom?: string
}

export interface JobDiplome {
  diplome: Diplome;
  coeff?: number;
  domaine: Domaine
}

export interface Experience {
  id?: number;
  experience?: string;
}
interface JobExperience {
  experience: Experience;
  coeff: number;
}

export interface Matrimoniale {
  id: number;
  situation?: string;
}
interface JobMatrimoniale {
  matrimonial: Matrimoniale;
  coeff: number;
}

interface Nationalite {
  id: number;
}
interface JobNationalite {
  nationalite: Nationalite;
  coeff: number;
}
interface Sexe {
  id?: number;
  nom?: string
}
interface JobSex {
  genre: Sexe;
  coeff: number;
}

export interface Service {
  id?: number;
  nom_service?: string;
}

export interface Questionnaire {
  questions: Question[]
}

export interface TypeContrat {
  id?: number;
  nom?: string;
}

export interface Ville {
  id?: number;
  nom?: string;
}

export interface JobDetail {
  title: string;
  volume: number;
  sal_min: number;
  sal_max: number;
  nbr_personne: number;
  min_age: number;
  max_age: number;
  mission: string;
  jour?: string;
  service: Service;
  jobDiplome: JobDiplome;
  jobExperience: JobExperience;
  jobMatrimoniale: JobMatrimoniale;
  jobNationalite: JobNationalite;
  jobSexe: JobSex;
  questionnaire: Questionnaire;
  typeContrat: TypeContrat;
  ville: Ville;
}
export interface TypeConge {
  id?:number;
  nom?:string;
}