interface Abilities{
    ability: {
        name: string,
        url: string
    }
}
interface Types{
    type: {
        name: string,
        url: string
    }

}
interface Stats{
    
        base_stat: number
        effort: number
        stat: {
            name: string
            url: string
        }
       
    
}

export interface GetPokemonDataInterface {
    abilities: Abilities[]
    base_experience: number
    forms: []
    game_indices: []
    height: number
    held_items: []
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: []
    name: string
    order: number
    species: {name: string, url: string}
    sprites: {front_default: string | undefined, front_female: string | undefined}
    types: Types[]
    weight: number
    stats: Stats[]
}
export interface GetPokemonArrayInterface {
    name: string
    url: string
}

export interface GetPokemonList {
    results: GetPokemonArrayInterface[]
}

// export interface GetPokemonArrayInterface {
//     name: string;
//     url: string;
// }

