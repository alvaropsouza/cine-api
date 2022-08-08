"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_1 = require("./category");
describe('Category Unit Tests', () => {
    test('Category constructor', () => {
        const created_at = new Date();
        const category = new category_1.Category({
            name: 'Movie',
            description: 'Movie description',
            is_active: true,
            created_at,
        });
        expect(category.props).toStrictEqual({
            name: 'Movie',
            description: 'Movie description',
            is_active: true,
            created_at,
        });
    });
});
