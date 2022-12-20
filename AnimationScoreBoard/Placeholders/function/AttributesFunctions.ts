import { Player } from "bdsx/bds/player";
import { AttributeNotfound } from "../Config";
import { AttributeId } from "bdsx/bds/attribute";

export function attribute_player_has(
  p: Player | null,
  params: (string | string[])[]
): string {
  let hasAttribute: boolean | string = false;
  for (let i = 0; i < params[0].length; i++) {
    try {
      if (p!.getAttribute(AttributeId[params[0][i]])) {
        hasAttribute = true;
      }
    } catch (e) {
      hasAttribute = AttributeNotfound;
    }
  }
  return hasAttribute.toString();
}
