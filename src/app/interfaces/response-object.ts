import { Hero } from './hero';

export interface ResponseObject {
    data: {
        count: number,
        limit: number,
        offset: number,
        results: Hero[]
    },
    status: string;
}
