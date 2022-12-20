import { serverProperties } from "bdsx/serverproperties";
import { NoServerName, NoMaxPlayer } from "../Config";
const pidusage = require("pidusage");
const os = require("os");
export function server_name(): string {
  let serverName = NoServerName;
  if (serverProperties["server-name"] != undefined) {
    serverName = serverProperties["server-name"];
  }
  return serverName;
}
export function server_version(): string {
  return require("bdsx/version-bdsx.json");
}
export function server_max_players(): string {
  let maxPlayer = NoMaxPlayer;
  if (serverProperties["max-players"] != undefined) {
    maxPlayer = serverProperties["max-players"];
  }
  return maxPlayer;
}
export function server_ram_used(): string {
  let mem = 0;
  pidusage(process.pid, (err, stats) => {
    if (stats) {
      mem = (stats.memory * 100) / os.totalmem();
    }
  });
  return mem.toString();
}
export function server_ram_free(): string {
  let mem = 0;
  pidusage(process.pid, (err, stats) => {
    if (stats) {
      mem = os.totalmem() - stats.memory;
    }
  });
  return mem.toString();
}
export function server_ram_total(): string {
  return os.totalmem();
}
