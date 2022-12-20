"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainPlaceHolderAPI = void 0;
const bdsx_placeholderapi_1 = require("@bdsx/bdsx-placeholderapi");
function MainPlaceHolderAPI(pl, array) {
    for (const i in array) {
        array[i] = (0, bdsx_placeholderapi_1.setPlaceholders)(array[i], pl);
    }
    return array;
}
exports.MainPlaceHolderAPI = MainPlaceHolderAPI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsbUVBQTREO0FBQzVELFNBQWdCLGtCQUFrQixDQUFDLEVBQVUsRUFBRSxLQUFLO0lBQ2xELEtBQUssTUFBTSxDQUFDLElBQUksS0FBSyxFQUFFO1FBQ3JCLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFBLHFDQUFlLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQzFDO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBTEQsZ0RBS0MifQ==