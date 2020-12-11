import normal from "../Assets/typeIcons/normal.png"
import fire from "../Assets/typeIcons/fire.png"
import fighting from "../Assets/typeIcons/fighting.png"
import water from "../Assets/typeIcons/water.png"
import flying from "../Assets/typeIcons/flying.png"
import grass from "../Assets/typeIcons/grass.png"
import poison from "../Assets/typeIcons/poison.png"
import electric from "../Assets/typeIcons/electric.png"
import ground from "../Assets/typeIcons/ground.png"
import psychic from "../Assets/typeIcons/psychic.png"
import rock from "../Assets/typeIcons/rock.png"
import ice from "../Assets/typeIcons/ice.png"
import bug from "../Assets/typeIcons/bug.png"
import dragon from "../Assets/typeIcons/dragon.png"
import ghost from "../Assets/typeIcons/ghost.png"
import dark from "../Assets/typeIcons/dark.png"
import steel from "../Assets/typeIcons/steel.png"
import fairy from "../Assets/typeIcons/fairy.png"

export default function getTypeIcon(type: string) {
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
