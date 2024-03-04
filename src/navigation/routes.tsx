export const ROUTES = {
    root: '/',
    quiz: '/quiz',
    finish: '/quiz/finish',
    result: '/result',
    statistics: '/statistics'
} as const;

export type RoutePath = typeof ROUTES[keyof typeof ROUTES];
