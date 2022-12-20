"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributePlaceholders = void 0;
const bdsx_placeholderapi_1 = require("@bdsx/bdsx-placeholderapi");
const NotSupport_1 = require("../function/NotSupport");
const AttributesFunctions_1 = require("../function/AttributesFunctions");
function AttributePlaceholders() {
    (0, bdsx_placeholderapi_1.registerPlaceholder)("attribute_player_has_<attribute>", AttributesFunctions_1.attribute_player_has);
    (0, bdsx_placeholderapi_1.registerPlaceholder)("attribute_player_baseValue_<attribute>", NotSupport_1.NotSupport);
    (0, bdsx_placeholderapi_1.registerPlaceholder)("attribute_player_value_<attribute>", NotSupport_1.NotSupport);
    (0, bdsx_placeholderapi_1.registerPlaceholder)("attribute_player_defaultValue_<attribute>", NotSupport_1.NotSupport);
}
exports.AttributePlaceholders = AttributePlaceholders;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0cmlidXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkF0dHJpYnV0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUVBQWdFO0FBQ2hFLHVEQUFvRDtBQUNwRCx5RUFBdUU7QUFFdkUsU0FBZ0IscUJBQXFCO0lBQ25DLElBQUEseUNBQW1CLEVBQUMsa0NBQWtDLEVBQUUsMENBQW9CLENBQUMsQ0FBQztJQUM5RSxJQUFBLHlDQUFtQixFQUFDLHdDQUF3QyxFQUFFLHVCQUFVLENBQUMsQ0FBQztJQUMxRSxJQUFBLHlDQUFtQixFQUFDLG9DQUFvQyxFQUFFLHVCQUFVLENBQUMsQ0FBQztJQUN0RSxJQUFBLHlDQUFtQixFQUFDLDJDQUEyQyxFQUFFLHVCQUFVLENBQUMsQ0FBQztBQUMvRSxDQUFDO0FBTEQsc0RBS0MifQ==