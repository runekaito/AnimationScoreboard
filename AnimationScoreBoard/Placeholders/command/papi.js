"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/bds/command");
const command_2 = require("bdsx/command");
const Config_1 = require("../Config");
const fs = require("fs");
const path_1 = require("path");
const Config_2 = require("../Config");
command_2.command
    .register("papi", Config_1.PlaceholderCommandDescription, command_1.CommandPermissionLevel.Operator)
    .overload((p, o, op) => {
    const pl = o.getEntity();
    if (p.enum2 == 0) {
        const jsi = JSON.parse(fs.readFileSync((0, path_1.join)(Config_1.EcloudDataPath), "utf8")).masterData;
        let check = false;
        const data_arr = [];
        for (const item of jsi) {
            if (item.name == p.enum3) {
                item.enabled = true;
                check = true;
            }
            data_arr.push(item);
        }
        const masterData = JSON.stringify({ masterData: data_arr }, null, " ");
        fs.writeFileSync(Config_1.EcloudDataPath, masterData);
        if (check) {
            if (!pl) {
                console.log(Config_1.PlaceholderCommandEnableConsoleText.replace("%s", p.enum3));
            }
            else {
                pl.sendMessage(Config_1.PlaceholderCommandEnableText.replace("%s", p.enum3));
            }
        }
        else {
            if (!pl) {
                console.log(Config_1.PlaceholderCommandErr);
            }
            else {
                pl.sendMessage(Config_1.PlaceholderCommandErrConsole);
            }
        }
    }
    else if (p.enum2 == 1) {
        const jsi = JSON.parse(fs.readFileSync((0, path_1.join)(Config_1.EcloudDataPath), "utf8")).masterData;
        let check = false;
        const data_arr = [];
        for (const item of jsi) {
            if (item.name == p.enum3) {
                item.enabled = false;
                check = true;
            }
            data_arr.push(item);
        }
        const masterData = JSON.stringify({ masterData: data_arr }, null, " ");
        fs.writeFileSync(Config_1.EcloudDataPath, masterData);
        if (check) {
            if (!pl) {
                console.log(Config_1.PlaceholderCommandDisableConsoleText.replace("%s", p.enum3));
            }
            else {
                pl.sendMessage(Config_1.PlaceholderCommandDisableText.replace("%s", p.enum3));
            }
        }
        else {
            if (!pl) {
                console.log(Config_1.PlaceholderCommandErr);
            }
            else {
                pl.sendMessage(Config_1.PlaceholderCommandErrConsole);
            }
        }
    }
    else if (p.enum2 == 2) {
        const jsi = JSON.parse(fs.readFileSync((0, path_1.join)(Config_1.EcloudDataPath), "utf8")).masterData;
        for (const item of jsi) {
            if (!pl) {
                console.log(Config_2.PlaceholderCommandListConsole.replace("%s", item.name).replace("%d", item.enabled));
            }
            else {
                pl.sendMessage(Config_1.PlaceholderCommandList.replace("%s", item.name).replace("%d", item.enabled));
            }
        }
    }
}, {
    enum: command_2.command.enum("PlaceholderAPICommandEnum", "ecloud"),
    enum2: command_2.command.enum("PlaceholderAPICommandEnum2", {
        enable: 0,
        disable: 1,
        list: 2,
    }),
    enum3: command_2.command.enum("PlaceholderAPICommandEnum3", {
        player: "player",
        server: "server",
        attribute: "attribute",
    }),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBMEQ7QUFFMUQsMENBQXVDO0FBQ3ZDLHNDQVVtQjtBQUNuQix5QkFBeUI7QUFDekIsK0JBQTRCO0FBQzVCLHNDQUEwRDtBQUMxRCxpQkFBTztLQUNKLFFBQVEsQ0FDUCxNQUFNLEVBQ04sc0NBQTZCLEVBQzdCLGdDQUFzQixDQUFDLFFBQVEsQ0FDaEM7S0FDQSxRQUFRLENBQ1AsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFO0lBQ1gsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBa0IsQ0FBQztJQUN6QyxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFFO1FBQ2hCLE1BQU0sR0FBRyxHQUFVLElBQUksQ0FBQyxLQUFLLENBQzNCLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBQSxXQUFJLEVBQUMsdUJBQWMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUM5QyxDQUFDLFVBQVUsQ0FBQztRQUNiLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNsQixNQUFNLFFBQVEsR0FBVSxFQUFFLENBQUM7UUFDM0IsS0FBSyxNQUFNLElBQUksSUFBSSxHQUFHLEVBQUU7WUFDdEIsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ2Q7WUFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JCO1FBQ0QsTUFBTSxVQUFVLEdBQVcsSUFBSSxDQUFDLFNBQVMsQ0FDdkMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEVBQ3hCLElBQUksRUFDSixHQUFHLENBQ0osQ0FBQztRQUNGLEVBQUUsQ0FBQyxhQUFhLENBQUMsdUJBQWMs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