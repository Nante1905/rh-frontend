import { Question } from "../../../types/QuestionClass";

interface Diplome {
  id: number;
  name?: string;
}
interface JobDiplome {
  diplome: Diplome;
  coeff: number;
}

interface Experience {
  id: number;
}
interface JobExperience {
  experience: Experience;
  coeff: number;
}

interface Matrimoniale {
  id: number;
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
  id: number;
}
interface JobSex {
  genre: Sexe;
  coeff: number;
}

export interface Service {
  id: number;
  name?: string;
}

export interface Questionnaire {
  questions: Question[]
}

export interface JobDetail {
  title: string;
  volume: number;
  man_day: number;
  sal_min: number;
  sal_max: number;
  service: Service;
  jobDiplome: JobDiplome;
  jobExperience: JobExperience;
  jobMatrimoniale: JobMatrimoniale;
  jobNationalite: JobNationalite;
  jobSexe: JobSex;
  questionnaire: Questionnaire
}
