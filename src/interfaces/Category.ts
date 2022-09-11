import {Store} from "./Store";

export interface Category{
    id: number,
    store: Store,
    name: string,
    description: string,
    createdAt: string,
    categoryImageUrl: string
}