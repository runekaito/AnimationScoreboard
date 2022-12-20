import { registerPlaceholder } from "@bdsx/bdsx-placeholderapi";
import { NotSupport } from "../function/NotSupport";
import {
  player_armor_boots_data,
  player_armor_chestplate_data,
  player_armor_helmet_data,
  player_armor_leggings_data,
  player_country,
  player_food_level,
  player_has_permission,
  player_item_in_hand_level,
  player_item_in_offhand_level,
  player_locale_display_name,
  player_ping,
  player_ping2,
  player_world,
  player_world_type,
} from "../function/PlayerFunctions";
import {
  player_name,
  player_x,
  player_z,
  player_armor_boots_durability,
  player_armor_boots_name,
  player_armor_chestplate_durability,
  player_armor_chestplate_name,
  player_armor_helmet_durability,
  player_armor_helmet_name,
  player_armor_leggings_durability,
  player_armor_leggings_name,
  player_bed_x,
  player_bed_y,
  player_bed_z,
  player_block_underneath,
  player_direction,
  player_exp,
  player_first_join_date,
  player_gamemode,
  player_health,
  player_ip,
  player_is_flying,
  player_is_op,
  player_is_sleeping,
  player_is_sprinting,
  player_item_in_hand_name,
  player_item_in_offhand_name,
  player_last_damage,
  player_level,
  player_max_health,
  player_uuid,
  player_walk_speed,
  player_y,
  player_has_potioneffect,
} from "../function/PlayerFunctions";
export function PlayerPlaceholders() {
  registerPlaceholder("player_armor_helmet_data", player_armor_helmet_data);
  registerPlaceholder("player_armor_helmet_name", player_armor_helmet_name);
  registerPlaceholder(
    "player_armor_helmet_durability",
    player_armor_helmet_durability
  );
  registerPlaceholder(
    "player_armor_chestplate_name",
    player_armor_chestplate_name
  );
  registerPlaceholder(
    "player_armor_chestplate_data",
    player_armor_chestplate_data
  );
  registerPlaceholder(
    "player_armor_chestplate_durability",
    player_armor_chestplate_durability
  );
  registerPlaceholder("player_armor_leggings_name", player_armor_leggings_name);
  registerPlaceholder("player_armor_leggings_data", player_armor_leggings_data);
  registerPlaceholder(
    "player_armor_leggings_durability",
    player_armor_leggings_durability
  );
  registerPlaceholder("player_armor_boots_name", player_armor_boots_name);
  registerPlaceholder("player_armor_boots_data", player_armor_boots_data);
  registerPlaceholder(
    "player_armor_boots_durability",
    player_armor_boots_durability
  );
  registerPlaceholder("player_bed_x", player_bed_x);
  registerPlaceholder("player_bed_y", player_bed_y);
  registerPlaceholder("player_bed_z", player_bed_z);
  registerPlaceholder("player_bed_world", player_world);
  registerPlaceholder("player_biome", NotSupport);
  registerPlaceholder("player_biome_capitalize", NotSupport);
  registerPlaceholder("player_block_underneath", player_block_underneath);
  registerPlaceholder("player_can_pickup_items", NotSupport);
  registerPlaceholder("player_colored_ping", NotSupport);
  registerPlaceholder("player_compass_x", NotSupport);
  registerPlaceholder("player_compass_y", NotSupport);
  registerPlaceholder("player_compass_z", NotSupport);
  registerPlaceholder("player_custom_name", NotSupport);
  registerPlaceholder("player_current_exp", NotSupport);
  registerPlaceholder("player_direction", player_direction);
  registerPlaceholder("player_displayname", NotSupport);
  registerPlaceholder("player_exp", player_exp);
  registerPlaceholder("player_first_join_date", player_first_join_date);
  registerPlaceholder("player_first_played", NotSupport);
  registerPlaceholder("player_first_join", NotSupport);
  registerPlaceholder("player_first_played_formatted", NotSupport);
  registerPlaceholder("player_fly_speed", NotSupport);
  registerPlaceholder("player_food_level", NotSupport);
  registerPlaceholder("player_gamemode", player_gamemode);
  registerPlaceholder("player_has_empty_slot", NotSupport);
  registerPlaceholder(
    "player_has_potioneffect_<effect>",
    player_has_potioneffect
  );
  registerPlaceholder(
    "player_has_permission_<permission>",
    player_has_permission
  );
  registerPlaceholder("player_health", player_health);
  registerPlaceholder("player_health_rounded", NotSupport);
  registerPlaceholder("player_health_scale", NotSupport);
  registerPlaceholder("player_ip", player_ip);
  registerPlaceholder("player_online", NotSupport);
  registerPlaceholder("player_is_whitelisted", NotSupport);
  registerPlaceholder("player_is_banned", NotSupport);
  registerPlaceholder("player_is_flying", player_is_flying);
  registerPlaceholder("player_is_sprinting", player_is_sprinting);
  registerPlaceholder("player_is_sleeping", player_is_sleeping);
  registerPlaceholder("player_is_inside_vehicle", NotSupport);
  registerPlaceholder("player_is_op", player_is_op);
  registerPlaceholder("player_item_in_hand", NotSupport);
  registerPlaceholder("player_item_in_hand_name", player_item_in_hand_name);
  registerPlaceholder("player_item_in_hand_data", NotSupport);
  registerPlaceholder(
    "player_item_in_hand_level_<enchantment>",
    player_item_in_hand_level
  );
  registerPlaceholder("player_item_in_offhand", NotSupport);
  registerPlaceholder(
    "player_item_in_offhand_name",
    player_item_in_offhand_name
  );
  registerPlaceholder(
    "player_item_in_offhand_level_<enchantment>",
    player_item_in_offhand_level
  );
  registerPlaceholder("player_locale", NotSupport);
  registerPlaceholder("player_locale_display_name", player_locale_display_name);
  registerPlaceholder("player_locale_short", NotSupport);
  registerPlaceholder("player_locale_country", player_country);
  registerPlaceholder("player_locale_display_country", NotSupport);
  registerPlaceholder("player_last_damage", player_last_damage);
  registerPlaceholder("player_last_played", NotSupport);
  registerPlaceholder("player_last_join", NotSupport);
  registerPlaceholder("player_last_played_formatted", NotSupport);
  registerPlaceholder("player_last_join_date", NotSupport);
  registerPlaceholder("player_level", player_level);
  registerPlaceholder("player_light_level", NotSupport);
  registerPlaceholder("player_max_air", NotSupport);
  registerPlaceholder("player_max_health", player_max_health);
  registerPlaceholder("player_max_health_rounded", NotSupport);
  registerPlaceholder("player_max_no_damage_ticks", NotSupport);
  registerPlaceholder("player_minutes_lived", NotSupport);
  registerPlaceholder("player_name", player_name);
  registerPlaceholder("player_no_damage_ticks", NotSupport);
  registerPlaceholder("player_ping", player_ping);
  registerPlaceholder("player_ping_<playername>", player_ping2);
  registerPlaceholder("player_remaining_air", NotSupport);
  registerPlaceholder("player_saturation", player_food_level);
  registerPlaceholder("player_seconds_lived", NotSupport);
  registerPlaceholder("player_sleep_ticks", NotSupport);
  registerPlaceholder("player_thunder_duration", NotSupport);
  registerPlaceholder("player_ticks_lived", NotSupport);
  registerPlaceholder("player_time", NotSupport);
  registerPlaceholder("player_time_offset", NotSupport);
  registerPlaceholder("player_total_exp", NotSupport);
  registerPlaceholder("player_uuid", player_uuid);
  registerPlaceholder("player_walk_speed", player_walk_speed);
  registerPlaceholder("player_weather_duration", NotSupport);
  registerPlaceholder("player_world", player_world);
  registerPlaceholder("player_world_type", player_world_type);
  registerPlaceholder("player_world_time_12", NotSupport);
  registerPlaceholder("player_world_time_24", NotSupport);
  registerPlaceholder("player_x", player_x);
  registerPlaceholder("player_y", player_y);
  registerPlaceholder("player_z", player_z);
  registerPlaceholder("player_yaw", NotSupport);
  registerPlaceholder("player_pitch", NotSupport);
  registerPlaceholder("player_absorption", NotSupport);
}
