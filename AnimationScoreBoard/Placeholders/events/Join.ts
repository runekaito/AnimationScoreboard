import { events } from "bdsx/event";
import { join } from "path";
import { PlayerFirstJoinDataPath, PlayerLastJoinDataPath } from "../Config";
import * as fs from "fs";
events.playerJoin.on((ev) => {
  const data_arr: any[] = JSON.parse(
    fs.readFileSync(join(PlayerFirstJoinDataPath), "utf8")
  ).masterData;
  let AlreadyCheck = false;
  for (const item of data_arr) {
    if (ev.player.getXuid() == item.xuid) {
      AlreadyCheck = true;
    }
  }
  if (!AlreadyCheck) {
    const Now = new Date();
    const data = {
      xuid: ev.player.getXuid(),
      date: Now,
    };
    data_arr.push(data);
    const masterData: string = JSON.stringify(
      { masterData: data_arr },
      null,
      " "
    );
    fs.writeFileSync(join(PlayerFirstJoinDataPath), masterData);
  }
  const data_arr2: any[] = JSON.parse(
    fs.readFileSync(join(PlayerLastJoinDataPath), "utf8")
  ).masterData;
  let check = true;
  const Now = new Date();
  for (const item2 of data_arr2) {
    if (ev.player.getXuid() == item2.xuid) {
      item2.date = Now;
      check = false;
    }
  }
  if (check) {
    const data2 = {
      xuid: ev.player.getXuid(),
      date: Now,
    };
    data_arr2.push(data2);
  }
  const masterData2: string = JSON.stringify(
    { masterData: data_arr2 },
    null,
    " "
  );
  fs.writeFileSync(join(PlayerLastJoinDataPath), masterData2);
});
