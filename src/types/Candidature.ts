import { Domaine, Experience, JobDiplome, Matrimoniale } from "../components/form-annonce/types/JobCriteria"
import { Utilisateur } from "./Utilisateur"

interface CvCritere {
    valide: boolean
}

interface CvDiplome extends JobDiplome, CvCritere { }

interface CvMatrimoniale extends Matrimoniale, CvCritere { }

interface CvExperience extends Experience, CvCritere { }

interface Fichier {
    diplome: string,
    certificat: string
}


export interface Candidature {
    id: number,
    depot: string,
    utilisateur: Utilisateur,
    diplome: CvDiplome,
    domaine: Domaine,
    matrimonial: CvMatrimoniale
    experience: CvExperience,
    fichier: Fichier
    note: number
}