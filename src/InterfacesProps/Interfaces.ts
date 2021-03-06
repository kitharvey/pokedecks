export interface NameURLInterface {
  name: string
  url: string
}

interface PokemonAbilities {
  ability: NameURLInterface
  is_hidden: boolean
}
export interface PokemonTypes {
  slot: number
  type: NameURLInterface
}
interface PokemonStats {
  base_stat: number
  effort: number
  stat: NameURLInterface
}

export interface GetPokemonDataInterface {
  abilities: PokemonAbilities[]
  base_experience: number
  height: number
  id: number
  is_default: boolean
  location_area_encounters: string
  name: string
  order: number
  species: NameURLInterface
  types: PokemonTypes[]
  weight: number
  stats: PokemonStats[]
}

export interface GetPokemonList {
  results: NameURLInterface[]
}

interface FlavorTextEntry {
  flavor_text: string
  language: { name: string; url: string }
}

interface Genera {
  genus: string
  language: {
    name: string
    url: string
  }
}

export interface GetPokemonSpeciesDataInterface {
  base_happiness: number
  capture_rate: number
  evolution_chain: { url: string }
  flavor_text_entries: FlavorTextEntry[]
  gender_rate: number
  generation: { name: string; url: string }
  growth_rate: { name: string; url: string }
  is_legendary: boolean
  is_mythical: boolean
  shape: { name: string; url: string }
  genera: Genera[]
}

interface Chain {
  is_baby: boolean
  species: NameURLInterface
  evolution_details: {
    item: NameURLInterface
    trigger: NameURLInterface
    gender: number
    held_item: NameURLInterface
    known_move: NameURLInterface
    known_move_type: NameURLInterface
    location: NameURLInterface
    min_level: NameURLInterface
    min_happiness: NameURLInterface
    min_beauty: NameURLInterface
    min_affection: NameURLInterface
    needs_overworldRain: boolean
    party_species: NameURLInterface
    party_type: NameURLInterface
    relative_physicalStats: number
    time_of_day: string
    trade_species: NameURLInterface
    turn_upside_down: boolean
  }[]
  evolves_to: Chain[]
}

export interface GetPokemonEvolutionChainInterface {
  baby_trigger_item: null
  chain: Chain
}

export interface ModalCardProps {
  speciesdata: GetPokemonSpeciesDataInterface | null
  pokemondata: GetPokemonDataInterface | null
}
export interface ModalCardStateProps {
  speciesData: GetPokemonSpeciesDataInterface | null
  pokemonData: GetPokemonDataInterface | null
}

export interface CardInterface {
  id: number
}

export interface ActualCardInterface {
  pokemondata: GetPokemonDataInterface
}

export interface UserFavoritesProps {
  id: number
  name: string
  types: string[]
  _id?: string
}

export interface UserProps {
  favorites: UserFavoritesProps[]
  _id: string
  uid: string
  displayName: string
  score: number
  __v: number
}

export interface SignInProps {
  uid: string
  displayName: string
}

export interface UpdateFavoritesProps {
  id: number
  name: string
  types: string[]
}

export interface TransitionProps {
  scale?: { duration: number }
  opacity?: { duration: number }
  type?: 'inertia' | 'spring' | 'tween'
  stiffness?: number
  damping?: number
}

export interface AnimateProps {
  scale: number
  y: number
  opacity: number
  boxShadow: string
}
export interface InitialProps {
  scale: number
  y: number
  opacity: number
}
