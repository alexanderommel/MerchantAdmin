import {GroupModifier, GroupModifierType} from "../interfaces/GroupModifier";
import {Product, ProductStatus} from "../interfaces/Product";
import {Store} from "../interfaces/Store";

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

    public static getProductGroupModifiers(product: Product): GroupModifier[]{
        const groupModifiers = [
            {
                id: 1,
                product: product,
                name: "Sabor de la salsa",
                type: GroupModifierType.MANDATORY,
                maximumActiveModifiers: 1,
                minimumActiveModifiers: 2
            },
            {
                id: 2,
                product: product,
                name: "Tipo de asado",
                type: GroupModifierType.OPTIONAL,
                maximumActiveModifiers: 1,
                minimumActiveModifiers: 2
            },
            {
                id: 3,
                product: product,
                name: "Salsa extra",
                type: GroupModifierType.OPTIONAL,
                maximumActiveModifiers: 1,
                minimumActiveModifiers: 2
            }
        ] as GroupModifier[];
        return groupModifiers
    }

}