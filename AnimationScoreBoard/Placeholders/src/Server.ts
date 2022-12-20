import { registerPlaceholder } from "@bdsx/bdsx-placeholderapi";
import {
  server_max_players,
  server_name,
  server_ram_free,
  server_ram_total,
  server_ram_used,
  server_version,
} from "../function/ServerFunctions";
import { NotSupport } from "../function/NotSupport";

export function ServerPlaceholders() {
  registerPlaceholder("server_name", server_name);
  registerPlaceholder("server_online", NotSupport);
  registerPlaceholder("server_version", server_version);
  registerPlaceholder("server_max_players", server_max_players);
  registerPlaceholder("server_unique_joins", NotSupport);
  registerPlaceholder("server_uptime", NotSupport);
  registerPlaceholder("server_ram_used", server_ram_used);
  registerPlaceholder("server_ram_free", server_ram_free);
  registerPlaceholder("server_ram_total", server_ram_total);
  registerPlaceholder("server_ram_max", NotSupport);
  registerPlaceholder("server_tps", NotSupport);
  registerPlaceholder("server_tps_1", NotSupport);
  registerPlaceholder("server_tps_5", NotSupport);
  registerPlaceholder("server_tps_15", NotSupport);
  registerPlaceholder("server_tps_1_colored", NotSupport);
  registerPlaceholder("server_tps_5_colored", NotSupport);
  registerPlaceholder("server_tps_15_colored", NotSupport);
  registerPlaceholder("server_online_<world>", NotSupport);
  registerPlaceholder("server_has_whitelist", NotSupport);
  registerPlaceholder("server_total_chunks", NotSupport);
  registerPlaceholder("server_total_living_entities", NotSupport);
  registerPlaceholder("server_total_entities", NotSupport);
  registerPlaceholder("%server_time_<SimpleDateFormat>", NotSupport);
  registerPlaceholder("server_countdown_<SimpleDateFormat>_<time>", NotSupport);
}
