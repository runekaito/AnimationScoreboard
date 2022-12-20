import { readFileSync } from "fs";
import { events } from "bdsx/event";
import { load } from "js-yaml";
import { join } from "path";
import {
  ReloadCommandDescription,
  ScoreboardPath,
  ReloadConsoleText,
  ReloadText,
} from "./ScoreboardConfig";
import { MainPlaceHolderAPI } from "./Placeholders/Main";
import { CommandPermissionLevel } from "bdsx/bds/command";
import { command } from "bdsx/command";
import { ServerPlayer } from "bdsx/bds/player";
import { MaxLine } from "./ScoreboardConfig";
import { bedrockServer } from "bdsx/launcher";
import { ContainerId, ContainerType } from "bdsx/bds/inventory";
const path = join(ScoreboardPath + "/sidebar.yml");
let config: Configuration = load(readFileSync(path, "utf-8")) as Configuration;
let title = "";
let lines: string[] = [];

events.levelTick.on(({ level }) => {
  const players = level.getPlayers();
  for (const pl of players) {
    pl.setFakeScoreboard(title, MainPlaceHolderAPI(pl, lines));
  }
});

let titleInterval: NodeJS.Timeout;
function setLine() {
  let times = 0;
  const { interval, random, text }: Line = config.display.title;
  titleInterval = setInterval(() => {
    if (random)
      return (title = text[Math.ceil(Math.random() * (text.length - 1))]);

    if (times > text.length - 1) return (times = 0);
    title = text[times];
    times++;
  }, interval * 10);
}

let linesIntervals: NodeJS.Timeout[] = [];
function setLine2() {
  for (let i = 1; i <= MaxLine; i++) {
    const line: Line = config.display[`line-${i}`];
    if (!line) continue;

    const { text, random, interval }: Line = line;
    (() => {
      let times = 0;
      linesIntervals.push(
        setInterval(() => {
          if (random)
            return (lines[i - 1] =
              text[Math.ceil(Math.random() * (text.length - 1))]);

          if (times > text.length - 1) return (times = 0);
          lines[i - 1] = text[times];
          times++;
        }, interval * 50)
      );
    })();
  }
}

command
  .register("sb", ReloadCommandDescription, CommandPermissionLevel.Operator)
  .overload(
    async (p, o, op) => {
      const pl = o.getEntity() as ServerPlayer;
      if (!pl) {
        console.log(ReloadConsoleText);
      } else {
        pl.sendMessage(ReloadText);
      }
      config = load(readFileSync(path, "utf-8")) as Configuration;
      title = "";
      lines = [];

      clearInterval(titleInterval);
      linesIntervals.forEach((i) => clearInterval(i));
      linesIntervals = [];
      setLine();
      setLine2();
    },
    {
      enum: command.enum("reload", "reload"),
    }
  );
bedrockServer.executeCommand("sb reload");
interface Configuration {
  slot: "sidebar";
  display: any;
}

interface Line {
  text: string[];
  random: boolean;
  interval: number;
}
