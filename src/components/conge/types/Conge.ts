export interface TypeConge {
    id: number,
    nom: string,
    deductible: boolean,
    jour: number | null,
    genre: string
}

interface Etat {
    cumul: number,
    consomme: number,
    reste: number
}

export interface CongeMin {
    id: number,
    idEmp: number,
    motif: string,
    type: TypeConge,
    codeStatus: number,
    status: string,
    debut: string,
    fin: string
}

export interface EtatConge {
    etat: Etat,
    conge: CongeMin[]
}