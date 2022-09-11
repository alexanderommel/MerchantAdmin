import {Product} from "./Product";

export interface GroupModifier{
    id: number,
    product: Product,
    name: string,
    type: GroupModifierType,
    maximumActiveModifiers: number,
    minimumActiveModifiers: number
}

export enum GroupModifierType{
    MANDATORY,OPTIONAL
}