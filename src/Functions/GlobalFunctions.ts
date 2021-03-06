import { GetPokemonDataInterface, GetPokemonEvolutionChainInterface, GetPokemonSpeciesDataInterface } from "../InterfacesProps/Interfaces";

export const extractEvolutionChain = (response: GetPokemonEvolutionChainInterface) => {
    let evoChain = [];
    let evoData = response.chain;

    do {
    evoChain.push({
        "name": evoData.species.name,
        "url": evoData.species.url,
    });
    evoData = evoData['evolves_to'][0];
    } while (evoData && evoData.hasOwnProperty('evolves_to'));

    return evoChain
}



export const getImageSourceFromURL = (id: string) => {
    return "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/" + getIDStringfromURL(id) + ".png"
  }

export const getIDStringfromURL = (url: string) => {
    const tempURL = url.split("/")
    const id = +tempURL[tempURL.length - 2]
    if(id >= 10 && id < 100) return '0' + id
    if(id >= 100 ) return '' + id
    else return '00' + id
}

export const getImageSourcefromID = (id: number) => {
    return "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/" + getIDStringfromID(id) + ".png"
  }
  
export const getIDStringfromID = (id: number) => {
  if(id >= 10 && id < 100) return '0' + id
  if(id >= 100 ) return '' + id
  else return '00' + id
}




export const getFlavorSpeech = (pokemonSpeciesData: GetPokemonSpeciesDataInterface, pokemonData: GetPokemonDataInterface) => {
    const enLang = pokemonSpeciesData.flavor_text_entries.filter((entry) => entry.language.name === "en")[0]
    const types = pokemonData.types.map(type => type.type.name).join(" and ")
    const legend = pokemonSpeciesData.is_legendary ? " legendary, " : ""
    const mythic = pokemonSpeciesData.is_mythical ? " mythical, " : ""
    const text = pokemonData.name + ", " + legend + mythic + types + " type pokemon. " + enLang.flavor_text.replace(/\r?\n|\r/g, " ")
    return text
}

export const shuffle = (array: []) => {
    let m = array.length, t, i;
  
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }