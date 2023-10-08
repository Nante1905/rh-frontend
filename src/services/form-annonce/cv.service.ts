import { http } from "../../interceptors/requestInterceptor";
import { Cv } from "../../types/Utilisateur";

export const getAllCvOf = (
  resolve: (arg0: Cv[]) => void,
  reject: (arg0: string) => void
) => {
  http
    .get("/user/cv")
    .then((res) => {
      const data = res.data;
      console.log(data);
      if (data.OK) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const dataCv: any[] = data.cv;
        const cv: Cv[] = [];
        dataCv.map((e) => {
          const toAdd: Cv = {
            id: e.id,
            nom: e.nom,
            creation: e.creation,
          };
          cv.push(toAdd);
        });
        resolve(cv);
      } else {
        reject(data.err);
      }
    })
    .catch((err) => {
      reject(err);
    });
};
