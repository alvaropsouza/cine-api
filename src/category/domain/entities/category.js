"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
class Category {
    constructor(props) {
        var _a, _b, _c;
        this.props = props;
        this.props.description = (_a = this.props.description) !== null && _a !== void 0 ? _a : null;
        this.props.is_active = (_b = this.props.is_active) !== null && _b !== void 0 ? _b : true;
        this.props.created_at = (_c = this.props.created_at) !== null && _c !== void 0 ? _c : new Date();
    }
    get name() {
        return this.props.name;
    }
    get description() {
        return this.props.description;
    }
    get is_active() {
        return this.props.is_active;
    }
    get created_at() {
        return this.props.created_at;
    }
}
exports.Category = Category;
