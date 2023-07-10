function ClothingProduct({...props}) {
    return <div></div>
}

function ElectronicsProduct({...props}) {
    return <div></div>
}

function HomeGoodsProduct({...props}) {
    return <div></div>
}
function ProductFactory({ productType, ...props }: {productType: string, props: object}) {
    switch (productType) {
        case "clothing":
            return <ClothingProduct {...props} />;
        case "electronics":
            return <ElectronicsProduct {...props} />;
        case "homeGoods":
            return <HomeGoodsProduct {...props} />;
        default:
            throw new Error(`Invalid product type: ${productType}`);
    }
}

let productType = '';
let props = {}
ProductFactory({productType, props});
