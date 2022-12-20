"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = require("bdsx/event");
const path_1 = require("path");
const Config_1 = require("../Config");
const fs = require("fs");
event_1.events.playerJoin.on((ev) => {
    const data_arr = JSON.parse(fs.readFileSync((0, path_1.join)(Config_1.PlayerFirstJoinDataPath), "utf8")).masterData;
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
        const masterData = JSON.stringify({ masterData: data_arr }, null, " ");
        fs.writeFileSync((0, path_1.join)(Config_1.PlayerFirstJoinDataPath), masterData);
    }
    const data_arr2 = JSON.parse(fs.readFileSync((0, path_1.join)(Config_1.PlayerLastJoinDataPath), "utf8")).masterData;
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
    const masterData2 = JSON.stringify({ masterData: data_arr2 }, null, " ");
    fs.writeFileSync((0, path_1.join)(Config_1.PlayerLastJoinDataPath), masterData2);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSm9pbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkpvaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0M7QUFDcEMsK0JBQTRCO0FBQzVCLHNDQUE0RTtBQUM1RSx5QkFBeUI7QUFDekIsY0FBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtJQUMxQixNQUFNLFFBQVEsR0FBVSxJQUFJLENBQUMsS0FBSyxDQUNoQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUEsV0FBSSxFQUFDLGdDQUF1QixDQUFDLEVBQUUsTUFBTSxDQUFDLENBQ3ZELENBQUMsVUFBVSxDQUFDO0lBQ2IsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLEtBQUssTUFBTSxJQUFJLElBQUksUUFBUSxFQUFFO1FBQzNCLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3BDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDckI7S0FDRjtJQUNELElBQUksQ0FBQyxZQUFZLEVBQUU7UUFDakIsTUFBTSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN2QixNQUFNLElBQUksR0FBRztZQUNYLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUN6QixJQUFJLEVBQUUsR0FBRztTQUNWLENBQUM7UUFDRixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sVUFBVSxHQUFXLElBQUksQ0FBQyxTQUFTLENBQ3ZDLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxFQUN4QixJQUFJLEVBQ0osR0FBRyxDQUNKLENBQUM7UUFDRixFQUFFLENBQUMsYUFBYSxDQUFDLElBQUEsV0FBSSxFQUFDLGdDQUF1QixDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7S0FDN0Q7SUFDRCxNQUFNLFNBQVMsR0FBVSxJQUFJLENBQUMsS0FBSyxDQUNqQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUEsV0FBSSxFQUFDLCtCQUFzQixDQUFDLEVBQUUsTUFBTSxDQUFDLENBQ3RELENBQUMsVUFBVSxDQUFDO0lBQ2IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLE1BQU0sR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDdkIsS0FBSyxNQUFNLEtBQUssSUFBSSxTQUFTLEVBQUU7UUFDN0IsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDckMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDakIsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNmO0tBQ0Y7SUFDRCxJQUFJLEtBQUssRUFBRTtRQUNULE1BQU0sS0FBSyxHQUFHO1lBQ1osSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ3pCLElBQUksRUFBRSxHQUFHO1NBQ1YsQ0FBQztRQUNGLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdkI7SUFDRCxNQUFNLFdBQVcsR0FBVyxJQUFJLENBQUMsU0FBUyxDQUN4QyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsRUFDekIsSUFBSSxFQUNKLEdBQUcsQ0FDSixDQUFDO0lBQ0YsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFBLFdBQUksRUFBQywrQkFBc0IsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQzlELENBQUMsQ0FBQyxDQUFDIn0=