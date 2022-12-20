"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const event_1 = require("bdsx/event");
const js_yaml_1 = require("js-yaml");
const path_1 = require("path");
const ScoreboardConfig_1 = require("./ScoreboardConfig");
const Main_1 = require("./Placeholders/Main");
const command_1 = require("bdsx/bds/command");
const command_2 = require("bdsx/command");
const ScoreboardConfig_2 = require("./ScoreboardConfig");
const launcher_1 = require("bdsx/launcher");
const path = (0, path_1.join)(ScoreboardConfig_1.ScoreboardPath + "/sidebar.yml");
let config = (0, js_yaml_1.load)((0, fs_1.readFileSync)(path, "utf-8"));
let title = "";
let lines = [];
event_1.events.levelTick.on(({ level }) => {
    const players = level.getPlayers();
    for (const pl of players) {
        pl.setFakeScoreboard(title, (0, Main_1.MainPlaceHolderAPI)(pl, lines));
    }
});
let titleInterval;
function setLine() {
    let times = 0;
    const { interval, random, text } = config.display.title;
    titleInterval = setInterval(() => {
        if (random)
            return (title = text[Math.ceil(Math.random() * (text.length - 1))]);
        if (times > text.length - 1)
            return (times = 0);
        title = text[times];
        times++;
    }, interval * 10);
}
let linesIntervals = [];
function setLine2() {
    for (let i = 1; i <= ScoreboardConfig_2.MaxLine; i++) {
        const line = config.display[`line-${i}`];
        if (!line)
            continue;
        const { text, random, interval } = line;
        (() => {
            let times = 0;
            linesIntervals.push(setInterval(() => {
                if (random)
                    return (lines[i - 1] =
                        text[Math.ceil(Math.random() * (text.length - 1))]);
                if (times > text.length - 1)
                    return (times = 0);
                lines[i - 1] = text[times];
                times++;
            }, interval * 50));
        })();
    }
}
command_2.command
    .register("sb", ScoreboardConfig_1.ReloadCommandDescription, command_1.CommandPermissionLevel.Operator)
    .overload(async (p, o, op) => {
    const pl = o.getEntity();
    if (!pl) {
        console.log(ScoreboardConfig_1.ReloadConsoleText);
    }
    else {
        pl.sendMessage(ScoreboardConfig_1.ReloadText);
    }
    config = (0, js_yaml_1.load)((0, fs_1.readFileSync)(path, "utf-8"));
    title = "";
    lines = [];
    clearInterval(titleInterval);
    linesIntervals.forEach((i) => clearInterval(i));
    linesIntervals = [];
    setLine();
    setLine2();
}, {
    enum: command_2.command.enum("reload", "reload"),
});
launcher_1.bedrockServer.executeCommand("sb reload");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NvcmVib2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNjb3JlYm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQkFBa0M7QUFDbEMsc0NBQW9DO0FBQ3BDLHFDQUErQjtBQUMvQiwrQkFBNEI7QUFDNUIseURBSzRCO0FBQzVCLDhDQUF5RDtBQUN6RCw4Q0FBMEQ7QUFDMUQsMENBQXVDO0FBRXZDLHlEQUE2QztBQUM3Qyw0Q0FBOEM7QUFFOUMsTUFBTSxJQUFJLEdBQUcsSUFBQSxXQUFJLEVBQUMsaUNBQWMsR0FBRyxjQUFjLENBQUMsQ0FBQztBQUNuRCxJQUFJLE1BQU0sR0FBa0IsSUFBQSxjQUFJLEVBQUMsSUFBQSxpQkFBWSxFQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBa0IsQ0FBQztBQUMvRSxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDZixJQUFJLEtBQUssR0FBYSxFQUFFLENBQUM7QUFFekIsY0FBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7SUFDaEMsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ25DLEtBQUssTUFBTSxFQUFFLElBQUksT0FBTyxFQUFFO1FBQ3hCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsSUFBQSx5QkFBa0IsRUFBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUM1RDtBQUNILENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxhQUE2QixDQUFDO0FBQ2xDLFNBQVMsT0FBTztJQUNkLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFTLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQzlELGFBQWEsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFO1FBQy9CLElBQUksTUFBTTtZ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