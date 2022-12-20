"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./Scoreboard");
require("./Placeholders/events/Join");
require("./Placeholders/CreateFile");
require("./Placeholders/command/papi");
const Player_1 = require("./Placeholders/src/Player");
const fs = require("fs");
const path_1 = require("path");
const Config_1 = require("./Placeholders/Config");
const Server_1 = require("./Placeholders/src/Server");
const Attributes_1 = require("./Placeholders/src/Attributes");
const jsi = JSON.parse(fs.readFileSync((0, path_1.join)(Config_1.EcloudDataPath), "utf8")).masterData;
let playerCheck = false;
let serverCheck = false;
let attributeCheck = false;
for (const item of jsi) {
    if (item.name == "player" && item.enabled) {
        playerCheck = true;
    }
    else if (item.name == "server" && item.enabled) {
        serverCheck = true;
    }
    else if (item.name == "attribute" && item.enabled) {
        attributeCheck = true;
    }
}
if (playerCheck)
    (0, Player_1.PlayerPlaceholders)();
if (serverCheck)
    (0, Server_1.ServerPlaceholders)();
if (attributeCheck)
    (0, Attributes_1.AttributePlaceholders)();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdCQUFzQjtBQUN0QixzQ0FBb0M7QUFDcEMscUNBQW1DO0FBQ25DLHVDQUFxQztBQUNyQyxzREFBK0Q7QUFDL0QseUJBQXlCO0FBQ3pCLCtCQUE0QjtBQUM1QixrREFBdUQ7QUFDdkQsc0RBQStEO0FBQy9ELDhEQUFzRTtBQUN0RSxNQUFNLEdBQUcsR0FBVSxJQUFJLENBQUMsS0FBSyxDQUMzQixFQUFFLENBQUMsWUFBWSxDQUFDLElBQUEsV0FBSSxFQUFDLHVCQUFjLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FDOUMsQ0FBQyxVQUFVLENBQUM7QUFDYixJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7QUFDeEIsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDO0FBQ3hCLElBQUksY0FBYyxHQUFHLEtBQUssQ0FBQztBQUMzQixLQUFLLE1BQU0sSUFBSSxJQUFJLEdBQUcsRUFBRTtJQUN0QixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDekMsV0FBVyxHQUFHLElBQUksQ0FBQztLQUNwQjtTQUFNLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNoRCxXQUFXLEdBQUcsSUFBSSxDQUFDO0tBQ3BCO1NBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLFdBQVcsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ25ELGNBQWMsR0FBRyxJQUFJLENBQUM7S0FDdkI7Q0FDRjtBQUNELElBQUksV0FBVztJQUFFLElBQUEsMkJBQWtCLEdBQUUsQ0FBQztBQUN0QyxJQUFJLFdBQVc7SUFBRSxJQUFBLDJCQUFrQixHQUFFLENBQUM7QUFDdEMsSUFBSSxjQUFjO0lBQUUsSUFBQSxrQ0FBcUIsR0FBRSxDQUFDIn0=