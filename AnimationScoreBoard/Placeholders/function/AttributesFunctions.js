"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attribute_player_has = void 0;
const Config_1 = require("../Config");
const attribute_1 = require("bdsx/bds/attribute");
function attribute_player_has(p, params) {
    let hasAttribute = false;
    for (let i = 0; i < params[0].length; i++) {
        try {
            if (p.getAttribute(attribute_1.AttributeId[params[0][i]])) {
                hasAttribute = true;
            }
        }
        catch (e) {
            hasAttribute = Config_1.AttributeNotfound;
        }
    }
    return hasAttribute.toString();
}
exports.attribute_player_has = attribute_player_has;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0cmlidXRlc0Z1bmN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkF0dHJpYnV0ZXNGdW5jdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esc0NBQThDO0FBQzlDLGtEQUFpRDtBQUVqRCxTQUFnQixvQkFBb0IsQ0FDbEMsQ0FBZ0IsRUFDaEIsTUFBNkI7SUFFN0IsSUFBSSxZQUFZLEdBQXFCLEtBQUssQ0FBQztJQUMzQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN6QyxJQUFJO1lBQ0YsSUFBSSxDQUFFLENBQUMsWUFBWSxDQUFDLHVCQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDOUMsWUFBWSxHQUFHLElBQUksQ0FBQzthQUNyQjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixZQUFZLEdBQUcsMEJBQWlCLENBQUM7U0FDbEM7S0FDRjtJQUNELE9BQU8sWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ2pDLENBQUM7QUFmRCxvREFlQyJ9