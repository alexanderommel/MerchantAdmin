import {GroupModifier, GroupModifierType} from "../domain/GroupModifier";
import {Product, ProductStatus} from "../domain/Product";
import {Store} from "../domain/Store";
import {Modifier} from "../domain/Modifier";

export abstract class TestingDataProvider{

    public static getProduct(name: string): Product{
        const product = {
            id: 1,
            name: name,
            description: "Descripción con palabras que no tienen sentido acorde al contexto en que se muestra.",
            price: 5.50,
            originalPrice: 5.50,
            productImageUrl: "https://images.hola.com/imagenes/cocina/noticiaslibros/20210528190401/dia-internacional-hamburguesa-recetas-2021/0-957-454/dia-hamburguesa-m.jpg",
            createdAt: "11-02-2022",
            status: ProductStatus.ACTIVE,
            adjustments: "-"
        } as Product
        return product
    }

    public static getModifiers(groupModifier: GroupModifier): Modifier[]{
        const modifiers = [
            {
                id: 1,
                groupModifier: groupModifier,
                name: "1.Carne asada",
                price: 25.5
            },
            {
                id: 1,
                groupModifier: groupModifier,
                name: "2.Carne término medio",
                price: 25.5
            },
            {
                id: 1,
                groupModifier: groupModifier,
                name: "3.Carne término blue",
                price: 25.5
            },
            {
                id: 1,
                groupModifier: groupModifier,
                name: "4.Carne roja",
                price: 25.5
            },
        ] as Modifier[]
        return modifiers
    }

    public static getProductGroupModifiers(product: Product): GroupModifier[]{
        const groupModifiers = [
            {
                id: 1,
                product: product,
                name: "Sabor de la salsa",
                type: GroupModifierType.MANDATORY
            },
            {
                id: 2,
                product: product,
                name: "Tipo de asado",
                type: GroupModifierType.OPTIONAL
            },
            {
                id: 3,
                product: product,
                name: "Salsa extra",
                type: GroupModifierType.OPTIONAL
            }
        ] as GroupModifier[];
        return groupModifiers
    }

}