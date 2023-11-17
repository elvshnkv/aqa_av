type Mapper<T, U> = (item: T) => U;
type Filterer<T> = (item: T) => boolean;

export function map<T, U>(mapper: Mapper<T, U>): (input: T[]) => U[];
export function map<T, U>(mapper: Mapper<T, U>, input: T[]): U[];

export function map<T, U>(mapper: Mapper<T, U>, input?: T[]): U[] | ((input: T[]) => U[]) {
    if (input) {
        return input.map(mapper);
    }
    return (subInput: T[]) => subInput.map(mapper);
}

export function filter<T>(filterer: Filterer<T>): (input: T[]) => T[];
export function filter<T>(filterer: Filterer<T>, input?: T[]): T[] | ((input: T[]) => T[]) {
    if (input) {
        return input.filter(filterer);
    }
    return (subInput: T[]) => subInput.filter(filterer);
}

export function add(a: number): (b: number) => number;
export function add(a: number, b: number): number;

export function add(a: number, b?: number): number | ((b: number) => number) {
    if (typeof b === 'undefined') {
        return (subB: number) => a + subB;
    }
    return a + b;
}
