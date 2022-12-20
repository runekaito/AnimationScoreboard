import { registerPlaceholder } from "@bdsx/bdsx-placeholderapi";
import { NotSupport } from "../function/NotSupport";
import { attribute_player_has } from "../function/AttributesFunctions";

export function AttributePlaceholders() {
  registerPlaceholder("attribute_player_has_<attribute>", attribute_player_has);
  registerPlaceholder("attribute_player_baseValue_<attribute>", NotSupport);
  registerPlaceholder("attribute_player_value_<attribute>", NotSupport);
  registerPlaceholder("attribute_player_defaultValue_<attribute>", NotSupport);
}
