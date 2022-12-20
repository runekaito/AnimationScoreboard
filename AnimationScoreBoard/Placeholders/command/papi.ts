import { CommandPermissionLevel } from "bdsx/bds/command";
import { ServerPlayer } from "bdsx/bds/player";
import { command } from "bdsx/command";
import {
  PlaceholderCommandDescription,
  EcloudDataPath,
  PlaceholderCommandEnableText,
  PlaceholderCommandEnableConsoleText,
  PlaceholderCommandErr,
  PlaceholderCommandErrConsole,
  PlaceholderCommandDisableText,
  PlaceholderCommandDisableConsoleText,
  PlaceholderCommandList,
} from "../Config";
import * as fs from "fs";
import { join } from "path";
import { PlaceholderCommandListConsole } from "../Config";
command
  .register(
    "papi",
    PlaceholderCommandDescription,
    CommandPermissionLevel.Operator
  )
  .overload(
    (p, o, op) => {
      const pl = o.getEntity() as ServerPlayer;
      if (p.enum2 == 0) {
        const jsi: any[] = JSON.parse(
          fs.readFileSync(join(EcloudDataPath), "utf8")
        ).masterData;
        let check = false;
        const data_arr: any[] = [];
        for (const item of jsi) {
          if (item.name == p.enum3) {
            item.enabled = true;
            check = true;
          }
          data_arr.push(item);
        }
        const masterData: string = JSON.stringify(
          { masterData: data_arr },
          null,
          " "
        );
        fs.writeFileSync(EcloudDataPath, masterData);
        if (check) {
          if (!pl) {
            console.log(
              PlaceholderCommandEnableConsoleText.replace("%s", p.enum3)
            );
          } else {
            pl.sendMessage(PlaceholderCommandEnableText.replace("%s", p.enum3));
          }
        } else {
          if (!pl) {
            console.log(PlaceholderCommandErr);
          } else {
            pl.sendMessage(PlaceholderCommandErrConsole);
          }
        }
      } else if (p.enum2 == 1) {
        const jsi: any[] = JSON.parse(
          fs.readFileSync(join(EcloudDataPath), "utf8")
        ).masterData;
        let check = false;
        const data_arr: any[] = [];
        for (const item of jsi) {
          if (item.name == p.enum3) {
            item.enabled = false;
            check = true;
          }
          data_arr.push(item);
        }
        const masterData: string = JSON.stringify(
          { masterData: data_arr },
          null,
          " "
        );
        fs.writeFileSync(EcloudDataPath, masterData);
        if (check) {
          if (!pl) {
            console.log(
              PlaceholderCommandDisableConsoleText.replace("%s", p.enum3)
            );
          } else {
            pl.sendMessage(
              PlaceholderCommandDisableText.replace("%s", p.enum3)
            );
          }
        } else {
          if (!pl) {
            console.log(PlaceholderCommandErr);
          } else {
            pl.sendMessage(PlaceholderCommandErrConsole);
          }
        }
      } else if (p.enum2 == 2) {
        const jsi: any[] = JSON.parse(
          fs.readFileSync(join(EcloudDataPath), "utf8")
        ).masterData;
        for (const item of jsi) {
          if (!pl) {
            console.log(
              PlaceholderCommandListConsole.replace("%s", item.name).replace(
                "%d",
                item.enabled
              )
            );
          } else {
            pl.sendMessage(
              PlaceholderCommandList.replace("%s", item.name).replace(
                "%d",
                item.enabled
              )
            );
          }
        }
      }
    },
    {
      enum: command.enum("PlaceholderAPICommandEnum", "ecloud"),
      enum2: command.enum("PlaceholderAPICommandEnum2", {
        enable: 0,
        disable: 1,
        list: 2,
      }),
      enum3: command.enum("PlaceholderAPICommandEnum3", {
        player: "player",
        server: "server",
        attribute: "attribute",
      }),
    }
  );
