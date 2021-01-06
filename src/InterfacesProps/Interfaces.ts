export interface NameURLInterface {
    name: string
    url: string
}

interface Abilities{
    ability: NameURLInterface
    is_hidden: boolean
}
interface Types{
    type: NameURLInterface
}
interface Stats{
    base_stat: number
    effort: number
    stat: NameURLInterface
}

export interface GetPokemonDataInterface {
    abilities: Abilities[]
    base_experience: number
    height: number
    id: number
    is_default: boolean
    location_area_encounters: string
    name: string
    order: number
    species: NameURLInterface
    types: Types[]
    weight: number
    stats: Stats[]
}


export interface GetPokemonList {
    results: NameURLInterface[]
}


interface FlavorTextEntry{
    flavor_text: string
    language: {name: string, url:string}

}

interface Genera{
    genus: string
    language: {
        name: string
        url: string
    }
}

export interface GetPokemonSpeciesDataInterface {
    base_happiness: number
    capture_rate: number
    evolution_chain: {url: string}
    flavor_text_entries: FlavorTextEntry[]
    gender_rate: number
    generation: {name: string, url: string}
    growth_rate: {name: string, url: string}
    is_legendary: boolean
    is_mythical: boolean
    shape: {name: string, url: string}
    genera: Genera[]
}

interface Chain{
    is_baby: boolean;
    species: NameURLInterface;
    evolution_details: {
        item: NameURLInterface;
        trigger: NameURLInterface;
        gender: number;
        held_item: NameURLInterface;
        known_move: NameURLInterface;
        known_move_type: NameURLInterface;
        location: NameURLInterface;
        min_level: NameURLInterface;
        min_happiness: NameURLInterface;
        min_beauty: NameURLInterface;
        min_affection: NameURLInterface;
        needs_overworldRain: boolean;
        party_species: NameURLInterface;
        party_type: NameURLInterface;
        relative_physicalStats: number;
        time_of_day: string;
        trade_species: NameURLInterface;
        turn_upside_down: boolean;
    }[];
    evolves_to: Chain[];
    
}

export interface GetPokemonEvolutionChainInterface{
    baby_trigger_item: null
    chain: Chain
}


export interface ModalCardProps{
    speciesdata: GetPokemonSpeciesDataInterface | null
    pokemondata: GetPokemonDataInterface | null
}
export interface ModalCardStateProps{
    speciesData: GetPokemonSpeciesDataInterface | null
    pokemonData: GetPokemonDataInterface | null
}

export interface CardInterface{
    id: number
  }
  
export interface ActualCardInterface{
    pokemondata: GetPokemonDataInterface
}