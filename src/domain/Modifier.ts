import {GroupModifier} from "./GroupModifier";

export interface Modifier{
    id: number,
    groupModifier: GroupModifier,
    name: string,
    price: number | null
}