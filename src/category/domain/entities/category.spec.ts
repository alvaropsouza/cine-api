import { Category } from './category';

describe('Category Unit Tests', () => {
    test('Category constructor', () => {
        const created_at = new Date();
        const category: Category = new Category({
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
