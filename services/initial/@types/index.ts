export type States = { count: number };

export type Getters = { doubleCount: (state: { count: number }) => number };

export type Actions = { increment: () => void };
