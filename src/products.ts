export default interface Product {
    name: string;
    price: number;
}

let products: Product[] = [
    {name: "shoes",
    price: 20
    },
    {name: "pants",
    price: 15
    },
    {name: "shirt",
    price: 5
    },
]

export function calcAverageProductPrice(products:Product[]): number {
    let total: number = 0;
    if(products.length === 0){
        return total;
    }else{
    for(let i=0; i<products.length; i++){
        total += products[i].price
    }
    let average: number = total/products.length
    return average;
    }
}
let averageProductPrice: number = calcAverageProductPrice(products);

console.log(averageProductPrice);