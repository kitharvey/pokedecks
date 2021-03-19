import normal from "../assets/typeIcons/normal.png"
import fire from "../assets/typeIcons/fire.png"
import fighting from "../assets/typeIcons/fighting.png"
import water from "../assets/typeIcons/water.png"
import flying from "../assets/typeIcons/flying.png"
import grass from "../assets/typeIcons/grass.png"
import poison from "../assets/typeIcons/poison.png"
import electric from "../assets/typeIcons/electric.png"
import ground from "../assets/typeIcons/ground.png"
import psychic from "../assets/typeIcons/psychic.png"
import rock from "../assets/typeIcons/rock.png"
import ice from "../assets/typeIcons/ice.png"
import bug from "../assets/typeIcons/bug.png"
import dragon from "../assets/typeIcons/dragon.png"
import ghost from "../assets/typeIcons/ghost.png"
import dark from "../assets/typeIcons/dark.png"
import steel from "../assets/typeIcons/steel.png"
import fairy from "../assets/typeIcons/fairy.png"

export const getTypeIcon = (type: string) => {
        const colors = {
          normal,
          fire,
          fighting,
          water,
          flying,
          grass,
          poison,
          electric,
          ground,
          psychic,
          rock,
          ice,
          bug,
          dragon,
          ghost,
          dark,
          steel,
          fairy,
        };
        const getIcon = Object.entries(colors).filter(
          ([key, _]) => key === type
        )
      return getIcon[0]
}


export const findColor = (color: string) => {
  const colors = {
    normal: "#C4C4A4",
    fire: "#F08030",
    fighting: "#C03028",
    water: "#6890F0",
    flying: "#A890F0",
    grass: "#78C850",
    poison: "#A040A0",
    electric: "#F8D030",
    ground: "#E0C068",
    psychic: "#F85888",
    rock: "#B8A038",
    ice: "#98D8D8",
    bug: "#A8B820",
    dragon: "#7038F8",
    ghost: "#705898",
    dark: "#705848",
    steel: "#B8B8D0",
    fairy: "#EE99AC",
  };
  const getColor = Object.entries(colors).filter(
    ([key, _]) => key === color
  )
return getColor[0]
}