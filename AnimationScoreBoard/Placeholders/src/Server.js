"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerPlaceholders = void 0;
const bdsx_placeholderapi_1 = require("@bdsx/bdsx-placeholderapi");
const ServerFunctions_1 = require("../function/ServerFunctions");
const NotSupport_1 = require("../function/NotSupport");
function ServerPlaceholders() {
    (0, bdsx_placeholderapi_1.registerPlaceholder)("server_name", ServerFunctions_1.server_name);
    (0, bdsx_placeholderapi_1.registerPlaceholder)("server_online", NotSupport_1.NotSupport);
    (0, bdsx_placeholderapi_1.registerPlaceholder)("server_version", ServerFunctions_1.server_version);
    (0, bdsx_placeholderapi_1.registerPlaceholder)("server_max_players", ServerFunctions_1.server_max_players);
    (0, bdsx_placeholderapi_1.registerPlaceholder)("server_unique_joins", NotSupport_1.NotSupport);
    (0, bdsx_placeholderapi_1.registerPlaceholder)("server_uptime", NotSupport_1.NotSupport);
    (0, bdsx_placeholderapi_1.registerPlaceholder)("server_ram_used", ServerFunctions_1.server_ram_used);
    (0, bdsx_placeholderapi_1.registerPlaceholder)("server_ram_free", ServerFunctions_1.server_ram_free);
    (0, bdsx_placeholderapi_1.registerPlaceholder)("server_ram_total", ServerFunctions_1.server_ram_total);
    (0, bdsx_placeholderapi_1.registerPlaceholder)("server_ram_max", NotSupport_1.NotSupport);
    (0, bdsx_placeholderapi_1.registerPlaceholder)("server_tps", NotSupport_1.NotSupport);
    (0, bdsx_placeholderapi_1.registerPlaceholder)("server_tps_1", NotSupport_1.NotSupport);
    (0, bdsx_placeholderapi_1.registerPlaceholder)("server_tps_5", NotSupport_1.NotSupport);
    (0, bdsx_placeholderapi_1.registerPlaceholder)("server_tps_15", NotSupport_1.NotSupport);
    (0, bdsx_placeholderapi_1.registerPlaceholder)("server_tps_1_colored", NotSupport_1.NotSupport);
    (0, bdsx_placeholderapi_1.registerPlaceholder)("server_tps_5_colored", NotSupport_1.NotSupport);
    (0, bdsx_placeholderapi_1.registerPlaceholder)("server_tps_15_colored", NotSupport_1.NotSupport);
    (0, bdsx_placeholderapi_1.registerPlaceholder)("server_online_<world>", NotSupport_1.NotSupport);
    (0, bdsx_placeholderapi_1.registerPlaceholder)("server_has_whitelist", NotSupport_1.NotSupport);
    (0, bdsx_placeholderapi_1.registerPlaceholder)("server_total_chunks", NotSupport_1.NotSupport);
    (0, bdsx_placeholderapi_1.registerPlaceholder)("server_total_living_entities", NotSupport_1.NotSupport);
    (0, bdsx_placeholderapi_1.registerPlaceholder)("server_total_entities", NotSupport_1.NotSupport);
    (0, bdsx_placeholderapi_1.registerPlaceholder)("%server_time_<SimpleDateFormat>", NotSupport_1.NotSupport);
    (0, bdsx_placeholderapi_1.registerPlaceholder)("server_countdown_<SimpleDateFormat>_<time>", NotSupport_1.NotSupport);
}
exports.ServerPlaceholders = ServerPlaceholders;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1FQUFnRTtBQUNoRSxpRUFPcUM7QUFDckMsdURBQW9EO0FBRXBELFNBQWdCLGtCQUFrQjtJQUNoQyxJQUFBLHlDQUFtQixFQUFDLGFBQWEsRUFBRSw2QkFBVyxDQUFDLENBQUM7SUFDaEQsSUFBQSx5Q0FBbUIsRUFBQyxlQUFlLEVBQUUsdUJBQVUsQ0FBQyxDQUFDO0lBQ2pELElBQUEseUNBQW1CLEVBQUMsZ0JBQWdCLEVBQUUsZ0NBQWMsQ0FBQyxDQUFDO0lBQ3RELElBQUEseUNBQW1CLEVBQUMsb0JBQW9CLEVBQUUsb0NBQWtCLENBQUMsQ0FBQztJQUM5RCxJQUFBLHlDQUFtQixFQUFDLHFCQUFxQixFQUFFLHVCQUFVLENBQUMsQ0FBQztJQUN2RCxJQUFBLHlDQUFtQixFQUFDLGVBQWUsRUFBRSx1QkFBVSxDQUFDLENBQUM7SUFDakQsSUFBQSx5Q0FBbUIsRUFBQyxpQkFBaUIsRUFBRSxpQ0FBZSxDQUFDLENBQUM7SUFDeEQsSUFBQSx5Q0FBbUIsRUFBQyxpQkFBaUIsRUFBRSxpQ0FBZSxDQUFDLENBQUM7SUFDeEQsSUFBQSx5Q0FBbUIsRUFBQyxrQkFBa0IsRUFBRSxrQ0FBZ0IsQ0FBQyxDQUFDO0lBQzFELElBQUEseUNBQW1CLEVBQUMsZ0JBQWdCLEVBQUUsdUJBQVUsQ0FBQyxDQUFDO0lBQ2xELElBQUEseUNBQW1CLEVBQUMsWUFBWSxFQUFFLHVCQUFVLENBQUMsQ0FBQztJQUM5QyxJQUFBLHlDQUFtQixFQUFDLGNBQWMsRUFBRSx1QkFBVSxDQUFDLENBQUM7SUFDaEQsSUFBQSx5Q0FBbUIsRUFBQyxjQUFjLEVBQUUsdUJBQVUsQ0FBQyxDQUFDO0lBQ2hELElBQUEseUNBQW1CLEVBQUMsZUFBZSxFQUFFLHVCQUFVLENBQUMsQ0FBQztJQUNqRCxJQUFBLHlDQUFtQixFQUFDLHNCQUFzQixFQUFFLHVCQUFVLENBQUMsQ0FBQztJQUN4RCxJQUFBLHlDQUFtQixFQUFDLHNCQUFzQixFQUFFLHVCQUFVLENBQUMsQ0FBQztJQUN4RCxJQUFBLHlDQUFtQixFQUFDLHVCQUF1QixFQUFFLHVCQUFVLENBQUMsQ0FBQztJQUN6RCxJQUFBLHlDQUFtQixFQUFDLHVCQUF1QixFQUFFLHVCQUFVLENBQUMsQ0FBQztJQUN6RCxJQUFBLHlDQUFtQixFQUFDLHNCQUFzQixFQUFFLHVCQUFVLENBQUMsQ0FBQztJQUN4RCxJQUFBLHlDQUFtQixFQUFDLHFCQUFxQixFQUFFLHVCQUFVLENBQUMsQ0FBQztJQUN2RCxJQUFBLHlDQUFtQixFQUFDLDhCQUE4QixFQUFFLHVCQUFVLENBQUMsQ0FBQztJQUNoRSxJQUFBLHlDQUFtQixFQUFDLHVCQUF1QixFQUFFLHVCQUFVLENBQUMsQ0FBQztJQUN6RCxJQUFBLHlDQUFtQixFQUFDLGlDQUFpQyxFQUFFLHVCQUFVLENBQUMsQ0FBQztJQUNuRSxJQUFBLHlDQUFtQixFQUFDLDRDQUE0QyxFQUFFLHVCQUFVLENBQUMsQ0FBQztBQUNoRixDQUFDO0FBekJELGdEQXlCQyJ9