export interface product {
    categories: Array<string>,
    createdAt: string,
    hasVariation: boolean,
    idClient: string,
    modifiedAt: string,
    name: string,
    optionalIngredients: Array<string>,
    prices: Array<number>,
    sellerID: string,
    sellerName: string,
    uniqueID: string,
    urlImage: string,
    variationsNames: Array<string>
}

export interface PropsPageProducts {
    productsInital: product[],
    totalProducts: number
}