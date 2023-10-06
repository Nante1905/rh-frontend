import { JobDetail } from "../components/form-annonce/types/JobCriteria";
import { AnnonceForm } from "../store/annonce/annonceSlice";
import { JobCritere } from "../store/annonce/critereSlice";
import { QcmInterface } from "../store/qcm-form/qcmSlice";

export const buildFormAnnonceData = (
  jobInfo: AnnonceForm,
  jobCritere: JobCritere,
  jobQcm: QcmInterface
): JobDetail | undefined => {
  const data: JobDetail = {
    title: jobInfo.jobTitle,
    volume: jobInfo.volumeHoraire,
    man_day: jobInfo.tauxHommeJour,
    sal_min: jobInfo.salaireMin,
    sal_max: jobInfo.salaireMax,
    service: {
      id: jobInfo.service,
    },
    jobDiplome: {
      diplome: {
        id: jobCritere.diplome,
      },
      coeff: jobCritere.diplomeCoef,
      domaine: {
        id: jobCritere.domaine
      }
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
    questionnaire: {
      questions: jobQcm.questions
    }
  };
  return data;
};
