import "./Scoreboard";
import "./Placeholders/events/Join";
import "./Placeholders/CreateFile";
import "./Placeholders/command/papi";
import { PlayerPlaceholders } from "./Placeholders/src/Player";
import * as fs from "fs";
import { join } from "path";
import { EcloudDataPath } from "./Placeholders/Config";
import { ServerPlaceholders } from "./Placeholders/src/Server";
import { AttributePlaceholders } from "./Placeholders/src/Attributes";
const jsi: any[] = JSON.parse(
  fs.readFileSync(join(EcloudDataPath), "utf8")
).masterData;
let playerCheck = false;
let serverCheck = false;
let attributeCheck = false;
for (const item of jsi) {
  if (item.name == "player" && item.enabled) {
    playerCheck = true;
  } else if (item.name == "server" && item.enabled) {
    serverCheck = true;
  } else if (item.name == "attribute" && item.enabled) {
    attributeCheck = true;
  }
}
if (playerCheck) PlayerPlaceholders();
if (serverCheck) ServerPlaceholders();
if (attributeCheck) AttributePlaceholders();
