import { join } from "path";
import {
  PlayerFirstJoinDataPath,
  PlayerLastJoinDataPath,
  EcloudDataPath,
} from "./Config";
import * as fs from "fs";
if (!fs.existsSync(join(PlayerFirstJoinDataPath)))
  fs.writeFileSync(
    join(PlayerFirstJoinDataPath),
    JSON.stringify({ masterData: [] }),
    "utf8"
  );
if (!fs.existsSync(join(PlayerLastJoinDataPath)))
  fs.writeFileSync(
    join(PlayerLastJoinDataPath),
    JSON.stringify({ masterData: [] }),
    "utf8"
  );
if (!fs.existsSync(join(EcloudDataPath)))
  fs.writeFileSync(
    join(EcloudDataPath),
    JSON.stringify({ masterData: [] }),
    "utf8"
  );
