import { BlockPos } from "bdsx/bds/blockpos";
import { ArmorSlot } from "bdsx/bds/inventory";
import { GameType, Player, PlayerPermission } from "bdsx/bds/player";
import { join } from "path";
import * as fs from "fs";
import {
  AdventureText,
  CreativeSpectatorText,
  CreativeText,
  DefaultText,
  EastDirectionText,
  NoPlayer,
  NorthDirectionText,
  NoWorldName,
  PlayerFirstJoinDataPath,
  SouthDirectionText,
  SpectatorText,
  SurvivalSpectatorText,
  SurvivalText,
  WestDirectionText,
} from "../Config";
import { MobEffectIds } from "bdsx/bds/effects";
import {
  PermissionNotfound,
  PositionNotfound,
  NoWorldType,
  PlayerLastJoinDataPath,
} from "../Config";
import { serverProperties } from "bdsx/serverproperties";
import { bedrockServer } from "bdsx/launcher";
import { AttributeId } from "bdsx/bds/attribute";
import { lookup } from "geoip-lite";

export function player_country(
  p: Player | null,
  params: (string | string[])[]
): string {
  const ip = p!.getNetworkIdentifier().getAddress().split("|")[1];
  return lookup(ip)!.country;
}

export function player_food_level(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.getAttribute(AttributeId.PlayerHunger).toString();
}
export function player_armor_helmet_data(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.getArmor(ArmorSlot.Head).getId().toString();
}
export function player_armor_helmet_name(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.getArmor(ArmorSlot.Head).getName();
}
export function player_armor_helmet_durability(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.getArmor(ArmorSlot.Head).getDamageValue().toString();
}
export function player_armor_chestplate_data(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.getArmor(ArmorSlot.Chest).getId().toString();
}
export function player_armor_chestplate_name(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.getArmor(ArmorSlot.Chest).getName();
}
export function player_armor_leggings_data(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.getArmor(ArmorSlot.Chest).getId().toString();
}
export function player_armor_leggings_name(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.getArmor(ArmorSlot.Legs).getName();
}
export function player_armor_leggings_durability(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.getArmor(ArmorSlot.Legs).getDamageValue().toString();
}
export function player_armor_chestplate_durability(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.getArmor(ArmorSlot.Chest).getDamageValue().toString();
}
export function player_armor_boots_data(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.getArmor(ArmorSlot.Feet).getId().toString();
}
export function player_armor_boots_name(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.getArmor(ArmorSlot.Feet).getName();
}
export function player_armor_boots_durability(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.getArmor(ArmorSlot.Feet).getDamageValue().toString();
}

export function player_bed_x(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.getSpawnPosition().x.toString();
}
export function player_bed_y(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.getSpawnPosition().y.toString();
}
export function player_bed_z(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.getSpawnPosition().z.toString();
}
export function player_block_underneath(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!
    .getRegion()
    .getBlock(
      BlockPos.create(
        p!.getPosition().x,
        p!.getPosition().y - 1,
        p!.getPosition().z
      )
    )
    .getName();
}

function DirectionNameGet(num: number) {
  let DirectionName = "";
  switch (num) {
    case 0:
      DirectionName = SouthDirectionText;
      break;
    case 1:
      DirectionName = WestDirectionText;
      break;
    case 2:
      DirectionName = NorthDirectionText;
      break;
    case 3:
      DirectionName = EastDirectionText;
      break;
  }
  return DirectionName;
}

export function player_direction(
  p: Player | null,
  params: (string | string[])[]
): string {
  return DirectionNameGet(p!.getDirection());
}
export function player_exp(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.getExperience().toString();
}
function FirstJoinDateGet(xuid: string) {
  const data_arr: any[] = JSON.parse(
    fs.readFileSync(join(PlayerFirstJoinDataPath), "utf8")
  ).masterData;
  let date: any;
  for (const item of data_arr) {
    if (item.xuid == xuid) {
      date = item.date;
    }
  }
  return date;
}
export function player_first_join_date(
  p: Player | null,
  params: (string | string[])[]
): string {
  return FirstJoinDateGet(p!.getXuid());
}
function GetGameModeName(type: GameType) {
  let GameModeName = "";
  switch (type) {
    case GameType.Survival:
      GameModeName = SurvivalText;
      break;
    case GameType.Creative:
      GameModeName = CreativeText;
      break;
    case GameType.Adventure:
      GameModeName = AdventureText;
      break;
    case GameType.SurvivalSpectator:
      GameModeName = SurvivalSpectatorText;
      break;
    case GameType.CreativeSpectator:
      GameModeName = CreativeSpectatorText;
      break;
    case GameType.Default:
      GameModeName = DefaultText;
      break;
    case GameType.Spectator:
      GameModeName = SpectatorText;
  }
  return GameModeName;
}
export function player_gamemode(
  p: Player | null,
  params: (string | string[])[]
): string {
  return GetGameModeName(p!.getGameType());
}
export function player_health(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.getHealth().toString();
}
export function player_ip(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.getNetworkIdentifier().getAddress().split("|")[0];
}
export function player_is_flying(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.isFlying().toString();
}
export function player_is_sprinting(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.isSprinting().toString();
}
export function player_is_sleeping(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.isSleeping().toString();
}
export function player_is_op(
  p: Player | null,
  params: (string | string[])[]
): string {
  let check: boolean = false;
  if (p!.getPermissionLevel() == PlayerPermission.OPERATOR) {
    check = true;
  }
  return check.toString();
}
export function player_item_in_hand_name(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.getMainhandSlot().getName();
}
export function player_item_in_offhand_name(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.getOffhandSlot().getName();
}
export function player_last_damage(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.getLastHurtDamage().toString();
}
export function player_level(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.getExperienceLevel().toString();
}
export function player_max_health(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.getMaxHealth().toString();
}
export function player_uuid(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.getUuid();
}
export function player_walk_speed(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.getSpeed().toString();
}
export function player_x(
  p: Player | null,
  params: (string | string[])[]
): string {
  return Math.round(p!.getPosition().x).toString();
}
export function player_y(
  p: Player | null,
  params: (string | string[])[]
): string {
  return Math.round(p!.getPosition().y).toString();
}
export function player_z(
  p: Player | null,
  params: (string | string[])[]
): string {
  return Math.round(p!.getPosition().z).toString();
}
export function player_name(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.getNameTag();
}
export function player_has_potioneffect(
  p: Player | null,
  params: (string | string[])[]
): string {
  let hasPotionEffect: boolean | string = false;
  for (let i = 0; i < params[0].length; i++) {
    try {
      if (p!.getEffect(MobEffectIds[params[0][i]])) {
        hasPotionEffect = true;
      }
    } catch (e) {
      hasPotionEffect = PositionNotfound;
    }
  }
  return hasPotionEffect.toString();
}
export function player_has_permission(
  p: Player | null,
  params: (string | string[])[]
): string {
  let hasPermission: boolean | string = false;
  for (let i = 0; i < params[0].length; i++) {
    try {
      if (p!.getPermissionLevel() == PlayerPermission[params[0][i]]) {
        hasPermission = true;
      }
    } catch (e) {
      hasPermission = PermissionNotfound;
    }
  }
  return hasPermission.toString();
}
export function player_item_in_hand_level(
  p: Player | null,
  params: (string | string[])[]
): string {
  let level: number | string = 0;
  const enchants: {
    id: number;
    lvl: number;
  }[] = p!.getMainhandSlot().save().tag?.ench;
  const lvl = enchants[0].lvl;
  for (let i = 0; i < params[0].length; i++) {
    if (lvl != undefined && lvl != null) {
      level = lvl;
    }
  }
  return level.toString();
}
export function player_item_in_offhand_level(
  p: Player | null,
  params: (string | string[])[]
): string {
  let level: number | string = 0;
  const enchants: {
    id: number;
    lvl: number;
  }[] = p!.getOffhandSlot().save().tag?.ench;
  const lvl = enchants[0].lvl;
  for (let i = 0; i < params[0].length; i++) {
    if (lvl != undefined && lvl != null) {
      level = lvl;
    }
  }
  return level.toString();
}
export function player_locale_display_name(
  p: Player | null,
  params: (string | string[])[]
): string {
  return p!.getPlatform().toString();
}
export function player_world(
  p: Player | null,
  params: (string | string[])[]
): string {
  let world = serverProperties["level-name"];
  if (world == undefined) {
    world = NoWorldName;
  }
  return world;
}
export function player_world_type(
  p: Player | null,
  params: (string | string[])[]
): string {
  let world = serverProperties["level-type"];
  if (world == undefined) {
    world = NoWorldType;
  }
  return world;
}
export function player_ping(
  p: Player | null,
  params: (string | string[])[]
): string {
  const ni = p?.getNetworkIdentifier();
  return bedrockServer.rakPeer.GetLastPing(ni!.address).toString();
}
export function player_ping2(
  p: Player | null,
  params: (string | string[])[]
): string {
  const pls = bedrockServer.serverInstance.getPlayers();
  let ping: number | string = NoPlayer;
  for (const pl of pls) {
    for (let i = 0; i < params[0].length; i++) {
      if (pl.getNameTag() == params[0][i]) {
        const ni = pl.getNetworkIdentifier();
        ping = bedrockServer.rakPeer.GetLastPing(ni!.address).toString();
      }
    }
  }
  return ping;
}
function LastJoinDateGet(xuid: string) {
  const data_arr: any[] = JSON.parse(
    fs.readFileSync(join(PlayerLastJoinDataPath), "utf8")
  ).masterData;
  let date: any;
  for (const item of data_arr) {
    if (item.xuid == xuid) {
      date = item.date;
    }
  }
  return date;
}
export function player_last_join_date(
  p: Player | null,
  params: (string | string[])[]
): string {
  return LastJoinDateGet(p!.getXuid());
}
