interface Pet {
    id?: string,
    name: string,
    species: string,
    favFoods: string[],
    birthYear: number,
}


export interface Dog extends Pet{
    animalType:"Dog";
}

export interface Cat extends Pet{
    animalType:"Cat";

}

