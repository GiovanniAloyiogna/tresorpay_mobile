export interface ParamData{
    id?: number,
    code?: string,
    libelle?: string,
    slug?: string,
    photo?: string,
    nbChildren?: number,
    motifPaiementList?: MotifPaiement[]
}

export interface MotifPaiement{
    id?: number,
    code?: string,
    libelle?: string,
    slug?: string,
    montant?: number,
}

export interface ModePaiement{
    id?: number,
    slug?: string,
    photo?: string,
    libelle?: string
}