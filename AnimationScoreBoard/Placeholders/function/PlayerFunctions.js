"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.player_last_join_date = exports.player_ping2 = exports.player_ping = exports.player_world_type = exports.player_world = exports.player_locale_display_name = exports.player_item_in_offhand_level = exports.player_item_in_hand_level = exports.player_has_permission = exports.player_has_potioneffect = exports.player_name = exports.player_z = exports.player_y = exports.player_x = exports.player_walk_speed = exports.player_uuid = exports.player_max_health = exports.player_level = exports.player_last_damage = exports.player_item_in_offhand_name = exports.player_item_in_hand_name = exports.player_is_op = exports.player_is_sleeping = exports.player_is_sprinting = exports.player_is_flying = exports.player_ip = exports.player_health = exports.player_gamemode = exports.player_first_join_date = exports.player_exp = exports.player_direction = exports.player_block_underneath = exports.player_bed_z = exports.player_bed_y = exports.player_bed_x = exports.player_armor_boots_durability = exports.player_armor_boots_name = exports.player_armor_boots_data = exports.player_armor_chestplate_durability = exports.player_armor_leggings_durability = exports.player_armor_leggings_name = exports.player_armor_leggings_data = exports.player_armor_chestplate_name = exports.player_armor_chestplate_data = exports.player_armor_helmet_durability = exports.player_armor_helmet_name = exports.player_armor_helmet_data = exports.player_food_level = exports.player_country = void 0;
const blockpos_1 = require("bdsx/bds/blockpos");
const inventory_1 = require("bdsx/bds/inventory");
const player_1 = require("bdsx/bds/player");
const path_1 = require("path");
const fs = require("fs");
const Config_1 = require("../Config");
const effects_1 = require("bdsx/bds/effects");
const Config_2 = require("../Config");
const serverproperties_1 = require("bdsx/serverproperties");
const launcher_1 = require("bdsx/launcher");
const attribute_1 = require("bdsx/bds/attribute");
const geoip_lite_1 = require("geoip-lite");
function player_country(p, params) {
    const ip = p.getNetworkIdentifier().getAddress().split("|")[1];
    return (0, geoip_lite_1.lookup)(ip).country;
}
exports.player_country = player_country;
function player_food_level(p, params) {
    return p.getAttribute(attribute_1.AttributeId.PlayerHunger).toString();
}
exports.player_food_level = player_food_level;
function player_armor_helmet_data(p, params) {
    return p.getArmor(inventory_1.ArmorSlot.Head).getId().toString();
}
exports.player_armor_helmet_data = player_armor_helmet_data;
function player_armor_helmet_name(p, params) {
    return p.getArmor(inventory_1.ArmorSlot.Head).getName();
}
exports.player_armor_helmet_name = player_armor_helmet_name;
function player_armor_helmet_durability(p, params) {
    return p.getArmor(inventory_1.ArmorSlot.Head).getDamageValue().toString();
}
exports.player_armor_helmet_durability = player_armor_helmet_durability;
function player_armor_chestplate_data(p, params) {
    return p.getArmor(inventory_1.ArmorSlot.Chest).getId().toString();
}
exports.player_armor_chestplate_data = player_armor_chestplate_data;
function player_armor_chestplate_name(p, params) {
    return p.getArmor(inventory_1.ArmorSlot.Chest).getName();
}
exports.player_armor_chestplate_name = player_armor_chestplate_name;
function player_armor_leggings_data(p, params) {
    return p.getArmor(inventory_1.ArmorSlot.Chest).getId().toString();
}
exports.player_armor_leggings_data = player_armor_leggings_data;
function player_armor_leggings_name(p, params) {
    return p.getArmor(inventory_1.ArmorSlot.Legs).getName();
}
exports.player_armor_leggings_name = player_armor_leggings_name;
function player_armor_leggings_durability(p, params) {
    return p.getArmor(inventory_1.ArmorSlot.Legs).getDamageValue().toString();
}
exports.player_armor_leggings_durability = player_armor_leggings_durability;
function player_armor_chestplate_durability(p, params) {
    return p.getArmor(inventory_1.ArmorSlot.Chest).getDamageValue().toString();
}
exports.player_armor_chestplate_durability = player_armor_chestplate_durability;
function player_armor_boots_data(p, params) {
    return p.getArmor(inventory_1.ArmorSlot.Feet).getId().toString();
}
exports.player_armor_boots_data = player_armor_boots_data;
function player_armor_boots_name(p, params) {
    return p.getArmor(inventory_1.ArmorSlot.Feet).getName();
}
exports.player_armor_boots_name = player_armor_boots_name;
function player_armor_boots_durability(p, params) {
    return p.getArmor(inventory_1.ArmorSlot.Feet).getDamageValue().toString();
}
exports.player_armor_boots_durability = player_armor_boots_durability;
function player_bed_x(p, params) {
    return p.getSpawnPosition().x.toString();
}
exports.player_bed_x = player_bed_x;
function player_bed_y(p, params) {
    return p.getSpawnPosition().y.toString();
}
exports.player_bed_y = player_bed_y;
function player_bed_z(p, params) {
    return p.getSpawnPosition().z.toString();
}
exports.player_bed_z = player_bed_z;
function player_block_underneath(p, params) {
    return p
        .getRegion()
        .getBlock(blockpos_1.BlockPos.create(p.getPosition().x, p.getPosition().y - 1, p.getPosition().z))
        .getName();
}
exports.player_block_underneath = player_block_underneath;
function DirectionNameGet(num) {
    let DirectionName = "";
    switch (num) {
        case 0:
            DirectionName = Config_1.SouthDirectionText;
            break;
        case 1:
            DirectionName = Config_1.WestDirectionText;
            break;
        case 2:
            DirectionName = Config_1.NorthDirectionText;
            break;
        case 3:
            DirectionName = Config_1.EastDirectionText;
            break;
    }
    return DirectionName;
}
function player_direction(p, params) {
    return DirectionNameGet(p.getDirection());
}
exports.player_direction = player_direction;
function player_exp(p, params) {
    return p.getExperience().toString();
}
exports.player_exp = player_exp;
function FirstJoinDateGet(xuid) {
    const data_arr = JSON.parse(fs.readFileSync((0, path_1.join)(Config_1.PlayerFirstJoinDataPath), "utf8")).masterData;
    let date;
    for (const item of data_arr) {
        if (item.xuid == xuid) {
            date = item.date;
        }
    }
    return date;
}
function player_first_join_date(p, params) {
    return FirstJoinDateGet(p.getXuid());
}
exports.player_first_join_date = player_first_join_date;
function GetGameModeName(type) {
    let GameModeName = "";
    switch (type) {
        case player_1.GameType.Survival:
            GameModeName = Config_1.SurvivalText;
            break;
        case player_1.GameType.Creative:
            GameModeName = Config_1.CreativeText;
            break;
        case player_1.GameType.Adventure:
            GameModeName = Config_1.AdventureText;
            break;
        case player_1.GameType.SurvivalSpectator:
            GameModeName = Config_1.SurvivalSpectatorText;
            break;
        case player_1.GameType.CreativeSpectator:
            GameModeName = Config_1.CreativeSpectatorText;
            break;
        case player_1.GameType.Default:
            GameModeName = Config_1.DefaultText;
            break;
        case player_1.GameType.Spectator:
            GameModeName = Config_1.SpectatorText;
    }
    return GameModeName;
}
function player_gamemode(p, params) {
    return GetGameModeName(p.getGameType());
}
exports.player_gamemode = player_gamemode;
function player_health(p, params) {
    return p.getHealth().toString();
}
exports.player_health = player_health;
function player_ip(p, params) {
    return p.getNetworkIdentifier().getAddress().split("|")[0];
}
exports.player_ip = player_ip;
function player_is_flying(p, params) {
    return p.isFlying().toString();
}
exports.player_is_flying = player_is_flying;
function player_is_sprinting(p, params) {
    return p.isSprinting().toString();
}
exports.player_is_sprinting = player_is_sprinting;
function player_is_sleeping(p, params) {
    return p.isSleeping().toString();
}
exports.player_is_sleeping = player_is_sleeping;
function player_is_op(p, params) {
    let check = false;
    if (p.getPermissionLevel() == player_1.PlayerPermission.OPERATOR) {
        check = true;
    }
    return check.toString();
}
exports.player_is_op = player_is_op;
function player_item_in_hand_name(p, params) {
    return p.getMainhandSlot().getName();
}
exports.player_item_in_hand_name = player_item_in_hand_name;
function player_item_in_offhand_name(p, params) {
    return p.getOffhandSlot().getName();
}
exports.player_item_in_offhand_name = player_item_in_offhand_name;
function player_last_damage(p, params) {
    return p.getLastHurtDamage().toString();
}
exports.player_last_damage = player_last_damage;
function player_level(p, params) {
    return p.getExperienceLevel().toString();
}
exports.player_level = player_level;
function player_max_health(p, params) {
    return p.getMaxHealth().toString();
}
exports.player_max_health = player_max_health;
function player_uuid(p, params) {
    return p.getUuid();
}
exports.player_uuid = player_uuid;
function player_walk_speed(p, params) {
    return p.getSpeed().toString();
}
exports.player_walk_speed = player_walk_speed;
function player_x(p, params) {
    return Math.round(p.getPosition().x).toString();
}
exports.player_x = player_x;
function player_y(p, params) {
    return Math.round(p.getPosition().y).toString();
}
exports.player_y = player_y;
function player_z(p, params) {
    return Math.round(p.getPosition().z).toString();
}
exports.player_z = player_z;
function player_name(p, params) {
    return p.getNameTag();
}
exports.player_name = player_name;
function player_has_potioneffect(p, params) {
    let hasPotionEffect = false;
    for (let i = 0; i < params[0].length; i++) {
        try {
            if (p.getEffect(effects_1.MobEffectIds[params[0][i]])) {
                hasPotionEffect = true;
            }
        }
        catch (e) {
            hasPotionEffect = Config_2.PositionNotfound;
        }
    }
    return hasPotionEffect.toString();
}
exports.player_has_potioneffect = player_has_potioneffect;
function player_has_permission(p, params) {
    let hasPermission = false;
    for (let i = 0; i < params[0].length; i++) {
        try {
            if (p.getPermissionLevel() == player_1.PlayerPermission[params[0][i]]) {
                hasPermission = true;
            }
        }
        catch (e) {
            hasPermission = Config_2.PermissionNotfound;
        }
    }
    return hasPermission.toString();
}
exports.player_has_permission = player_has_permission;
function player_item_in_hand_level(p, params) {
    var _a;
    let level = 0;
    const enchants = (_a = p.getMainhandSlot().save().tag) === null || _a === void 0 ? void 0 : _a.ench;
    const lvl = enchants[0].lvl;
    for (let i = 0; i < params[0].length; i++) {
        if (lvl != undefined && lvl != null) {
            level = lvl;
        }
    }
    return level.toString();
}
exports.player_item_in_hand_level = player_item_in_hand_level;
function player_item_in_offhand_level(p, params) {
    var _a;
    let level = 0;
    const enchants = (_a = p.getOffhandSlot().save().tag) === null || _a === void 0 ? void 0 : _a.ench;
    const lvl = enchants[0].lvl;
    for (let i = 0; i < params[0].length; i++) {
        if (lvl != undefined && lvl != null) {
            level = lvl;
        }
    }
    return level.toString();
}
exports.player_item_in_offhand_level = player_item_in_offhand_level;
function player_locale_display_name(p, params) {
    return p.getPlatform().toString();
}
exports.player_locale_display_name = player_locale_display_name;
function player_world(p, params) {
    let world = serverproperties_1.serverProperties["level-name"];
    if (world == undefined) {
        world = Config_1.NoWorldName;
    }
    return world;
}
exports.player_world = player_world;
function player_world_type(p, params) {
    let world = serverproperties_1.serverProperties["level-type"];
    if (world == undefined) {
        world = Config_2.NoWorldType;
    }
    return world;
}
exports.player_world_type = player_world_type;
function player_ping(p, params) {
    const ni = p === null || p === void 0 ? void 0 : p.getNetworkIdentifier();
    return launcher_1.bedrockServer.rakPeer.GetLastPing(ni.address).toString();
}
exports.player_ping = player_ping;
function player_ping2(p, params) {
    const pls = launcher_1.bedrockServer.serverInstance.getPlayers();
    let ping = Config_1.NoPlayer;
    for (const pl of pls) {
        for (let i = 0; i < params[0].length; i++) {
            if (pl.getNameTag() == params[0][i]) {
                const ni = pl.getNetworkIdentifier();
                ping = launcher_1.bedrockServer.rakPeer.GetLastPing(ni.address).toString();
            }
        }
    }
    return ping;
}
exports.player_ping2 = player_ping2;
function LastJoinDateGet(xuid) {
    const data_arr = JSON.parse(fs.readFileSync((0, path_1.join)(Config_2.PlayerLastJoinDataPath), "utf8")).masterData;
    let date;
    for (const item of data_arr) {
        if (item.xuid == xuid) {
            date = item.date;
        }
    }
    return date;
}
function player_last_join_date(p, params) {
    return LastJoinDateGet(p.getXuid());
}
exports.player_last_join_date = player_last_join_date;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWVyRnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUGxheWVyRnVuY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdEQUE2QztBQUM3QyxrREFBK0M7QUFDL0MsNENBQXFFO0FBQ3JFLCtCQUE0QjtBQUM1Qix5QkFBeUI7QUFDekIsc0NBZW1CO0FBQ25CLDhDQUFnRDtBQUNoRCxzQ0FLbUI7QUFDbkIsNERBQXlEO0FBQ3pELDRDQUE4QztBQUM5QyxrREFBaUQ7QUFDakQsMkNBQW9DO0FBRXBDLFNBQWdCLGNBQWMsQ0FDNUIsQ0FBZ0IsRUFDaEIsTUFBNkI7SUFFN0IsTUFBTSxFQUFFLEdBQUcsQ0FBRSxDQUFDLG9CQUFvQixFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLE9BQU8sSUFBQSxtQkFBTSxFQUFDLEVBQUUsQ0FBRSxDQUFDLE9BQU8sQ0FBQztBQUM3QixDQUFDO0FBTkQsd0NBTUM7QUFFRCxTQUFnQixpQkFBaUIsQ0FDL0IsQ0FBZ0IsRUFDaEIsTUFBNkI7SUFFN0IsT0FBTyxDQUFFLENBQUMsWUFBWSxDQUFDLHVCQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDOUQsQ0FBQztBQUxELDhDQUtDO0FBQ0QsU0FBZ0Isd0JBQXdCLENBQ3RDLENBQWdCLEVBQ2hCLE1BQTZCO0lBRTdCLE9BQU8sQ0FBRSxDQUFDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3hELENBQUM7QUFMRCw0REFLQztBQUNELFNBQWdCLHdCQUF3QixDQUN0QyxDQUFnQixFQUNoQixNQUE2QjtJQUU3QixPQUFPLENBQUUsQ0FBQyxRQUFRLENBQUMscUJBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUMvQyxDQUFD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