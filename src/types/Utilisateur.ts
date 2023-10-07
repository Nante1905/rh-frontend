
interface Ville {
    id?: number,
    nom: string
}

interface Nationalite {
    id: number,
    nationalite: string,
    valide?: boolean
}

interface Genre {
    id: number,
    nom: string,
    valide?: boolean
}

export interface Utilisateur {
    id?: number,
    nom: string,
    prenom: string,
    naissance: string,
    email: string,
    telephone: string,
    mdp?: string,
    ville: Ville,
    nationalite: Nationalite,
    genre: Genre
}