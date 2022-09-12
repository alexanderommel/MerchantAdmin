import {Store} from "./Store";

export interface Product{
    id: number,
    store: Store,
    name: string,
    description: string,
    price: number,
    originalPrice: number,
    productImageUrl: string,
    createdAt: string,
    status: ProductStatus,
    adjustments: string
}

export enum ProductStatus {
    ACTIVE,DRAFT,ARCHIVED
}