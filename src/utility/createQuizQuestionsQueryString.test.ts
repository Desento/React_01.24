import { createQuizQuestionsQueryString } from "./createQuizQuestionsQueryString";


describe('createQuizQuestionsQueryString', () => {
    test('should return correct query string with all parameters', () => {
        const state = {
            amount: 10,
            category: '9',
            difficulty: 'easy',
            type: 'multiple',
        };

        const expectedQueryString = 'api.php?amount=10&category=9&difficulty=easy&type=multiple';
        expect(createQuizQuestionsQueryString(state)).toBe(expectedQueryString);
    });

    test('should return correct query string with only amount parameter', () => {
        const state = {
            amount: 5,
        };

        const expectedQueryString = 'api.php?amount=5';
        expect(createQuizQuestionsQueryString(state)).toBe(expectedQueryString);
    });

    test('should return empty query string for empty state', () => {
        const state = {};

        const expectedQueryString = 'api.php?';
        expect(createQuizQuestionsQueryString(state)).toBe(expectedQueryString);
    });

    test('should return correct query string without trailing "&"', () => {
        const state = {
            amount: 10,
            category: '9',
            difficulty: 'easy',
            type: 'multiple',
        };

        const queryString = createQuizQuestionsQueryString(state);
        expect(queryString.endsWith('&')).toBeFalsy();
    });
});
