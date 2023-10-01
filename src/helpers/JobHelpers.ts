import { JobDetail } from "../components/form-annonce/types/JobCriteria";
import { AnnonceForm } from "../store/annonce/annonceSlice";
import { JobCritere } from "../store/annonce/critereSlice";

export const buildFormAnnonceData = (
  jobInfo: AnnonceForm,
  jobCritere: JobCritere
): JobDetail | undefined => {
  const data: JobDetail = {
    title: jobInfo.jobTitle,
    volume: jobInfo.volumeHoraire,
    man_day: jobInfo.tauxHommeJour,
    sal_min: jobInfo.salaireMin,
    sal_max: jobInfo.salaireMax,
    service: {
      idService: jobInfo.service,
    },
    jobDiplome: {
      diplome: {
        id: jobCritere.diplome,
      },
      coeff: jobCritere.diplomeCoef,
    },
    jobExperience: {
      experience: {
        id: jobCritere.experience,
      },
      coeff: jobCritere.experienceCoef,
    },
    jobMatrimoniale: {
      matrimonial: {
        id: jobCritere.matrimonial,
      },
      coeff: jobCritere.matrimonialCoef,
    },
    jobNationalite: {
      nationalite: {
        id: jobCritere.nationalite,
      },
      coeff: jobCritere.nationaliteCoef,
    },
    jobSexe: {
      genre: {
        id: jobCritere.genre,
      },
      coeff: jobCritere.genreCoef,
    },
  };
  return data;
};
