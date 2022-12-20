import { Player } from "bdsx/bds/player";
import { setPlaceholders } from "@bdsx/bdsx-placeholderapi";
export function MainPlaceHolderAPI(pl: Player, array) {
  for (const i in array) {
    array[i] = setPlaceholders(array[i], pl);
  }
  return array;
}
