import { useEffect, useState } from "react";
import ListDemandeCongeComponent from "../../components/list/list-demande-conge.component";
import "./list-conge-root.container.scss";
import { findAllDemandeConge } from "../../services/demande-conge.service";
import { useDispatch, useSelector } from "react-redux";
import { setDemandes } from "../../store/conge.reducer";
import { CongerStore } from "../../store/conge.store";

const ListCongeRoot = () => {
  const dispatch = useDispatch();
  const [chef, setChef] = useState<boolean>(false);
  const demandes = useSelector(
    (state: CongerStore) => state.congeReducer.demandes
  );

  useEffect(() => {
    findAllDemandeConge()
      .then((res) => {
        dispatch(setDemandes(res.data.data));
        setChef(res.data.auth);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="list_conge_root">
      <h1 className="title">Liste des demandes de congés de votre service</h1>
      {!chef && (
        <p className="warning">
          Seul le supérieur hiérarchique de ce service peut valider les demandes
          de congés
        </p>
      )}
      <div className="table">
        <ListDemandeCongeComponent demandes={demandes} chef={chef} />
      </div>
    </div>
  );
};

export default ListCongeRoot;
