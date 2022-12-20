"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const Config_1 = require("./Config");
const fs = require("fs");
if (!fs.existsSync((0, path_1.join)(Config_1.PlayerFirstJoinDataPath)))
    fs.writeFileSync((0, path_1.join)(Config_1.PlayerFirstJoinDataPath), JSON.stringify({ masterData: [] }), "utf8");
if (!fs.existsSync((0, path_1.join)(Config_1.PlayerLastJoinDataPath)))
    fs.writeFileSync((0, path_1.join)(Config_1.PlayerLastJoinDataPath), JSON.stringify({ masterData: [] }), "utf8");
if (!fs.existsSync((0, path_1.join)(Config_1.EcloudDataPath)))
    fs.writeFileSync((0, path_1.join)(Config_1.EcloudDataPath), JSON.stringify({ masterData: [] }), "utf8");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlRmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNyZWF0ZUZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBNEI7QUFDNUIscUNBSWtCO0FBQ2xCLHlCQUF5QjtBQUN6QixJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFBLFdBQUksRUFBQyxnQ0FBdUIsQ0FBQyxDQUFDO0lBQy9DLEVBQUUsQ0FBQyxhQUFhLENBQ2QsSUFBQSxXQUFJLEVBQUMsZ0NBQXVCLENBQUMsRUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNsQyxNQUFNLENBQ1AsQ0FBQztBQUNKLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUEsV0FBSSxFQUFDLCtCQUFzQixDQUFDLENBQUM7SUFDOUMsRUFBRSxDQUFDLGFBQWEsQ0FDZCxJQUFBLFdBQUksRUFBQywrQkFBc0IsQ0FBQyxFQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ2xDLE1BQU0sQ0FDUCxDQUFDO0FBQ0osSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBQSxXQUFJLEVBQUMsdUJBQWMsQ0FBQyxDQUFDO0lBQ3RDLEVBQUUsQ0FBQyxhQUFhLENBQ2QsSUFBQSxXQUFJLEVBQUMsdUJBQWMsQ0FBQyxFQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ2xDLE1BQU0sQ0FDUCxDQUFDIn0=