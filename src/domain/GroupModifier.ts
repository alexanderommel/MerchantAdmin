import {Product} from "./Product";

export interface GroupModifier{
    id: number,
    product: Product,
    name: string,
    type: GroupModifierType
}

export enum GroupModifierType{
    MANDATORY="Obligatorio",OPTIONAL="Opcional"
}