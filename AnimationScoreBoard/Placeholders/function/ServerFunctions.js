"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server_ram_total = exports.server_ram_free = exports.server_ram_used = exports.server_max_players = exports.server_version = exports.server_name = void 0;
const serverproperties_1 = require("bdsx/serverproperties");
const Config_1 = require("../Config");
const pidusage = require("pidusage");
const os = require("os");
function server_name() {
    let serverName = Config_1.NoServerName;
    if (serverproperties_1.serverProperties["server-name"] != undefined) {
        serverName = serverproperties_1.serverProperties["server-name"];
    }
    return serverName;
}
exports.server_name = server_name;
function server_version() {
    return require("bdsx/version-bdsx.json");
}
exports.server_version = server_version;
function server_max_players() {
    let maxPlayer = Config_1.NoMaxPlayer;
    if (serverproperties_1.serverProperties["max-players"] != undefined) {
        maxPlayer = serverproperties_1.serverProperties["max-players"];
    }
    return maxPlayer;
}
exports.server_max_players = server_max_players;
function server_ram_used() {
    let mem = 0;
    pidusage(process.pid, (err, stats) => {
        if (stats) {
            mem = (stats.memory * 100) / os.totalmem();
        }
    });
    return mem.toString();
}
exports.server_ram_used = server_ram_used;
function server_ram_free() {
    let mem = 0;
    pidusage(process.pid, (err, stats) => {
        if (stats) {
            mem = os.totalmem() - stats.memory;
        }
    });
    return mem.toString();
}
exports.server_ram_free = server_ram_free;
function server_ram_total() {
    return os.totalmem();
}
exports.server_ram_total = server_ram_total;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmVyRnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2VydmVyRnVuY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDREQUF5RDtBQUN6RCxzQ0FBc0Q7QUFDdEQsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3JDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixTQUFnQixXQUFXO0lBQ3pCLElBQUksVUFBVSxHQUFHLHFCQUFZLENBQUM7SUFDOUIsSUFBSSxtQ0FBZ0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxTQUFTLEVBQUU7UUFDaEQsVUFBVSxHQUFHLG1DQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQzlDO0lBQ0QsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQztBQU5ELGtDQU1DO0FBQ0QsU0FBZ0IsY0FBYztJQUM1QixPQUFPLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFGRCx3Q0FFQztBQUNELFNBQWdCLGtCQUFrQjtJQUNoQyxJQUFJLFNBQVMsR0FBRyxvQkFBVyxDQUFDO0lBQzVCLElBQUksbUNBQWdCLENBQUMsYUFBYSxDQUFDLElBQUksU0FBUyxFQUFFO1FBQ2hELFNBQVMsR0FBRyxtQ0FBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUM3QztJQUNELE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFORCxnREFNQztBQUNELFNBQWdCLGVBQWU7SUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ1osUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDbkMsSUFBSSxLQUFLLEVBQUU7WUFDVCxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUM1QztJQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDeEIsQ0FBQztBQVJELDBDQVFDO0FBQ0QsU0FBZ0IsZUFBZTtJQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDWixRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNuQyxJQUFJLEtBQUssRUFBRTtZQUNULEdBQUcsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztTQUNwQztJQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDeEIsQ0FBQztBQVJELDBDQVFDO0FBQ0QsU0FBZ0IsZ0JBQWdCO0lBQzlCLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3ZCLENBQUM7QUFGRCw0Q0FFQyJ9