export interface TypeConge {
    id: number,
    nom: string,
    deductible: boolean,
    jour: number | null,
    genre: string
}

export interface CongeMin {
    id: number,
    idEmp: number,
    motif: string,
    type: TypeConge,
    status: string,
    debut: string,
    fin: string
}