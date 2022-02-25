import Product from "./products";

export interface InventoryItem {
    product: Product;
    quantity: number;
}

let inventory: InventoryItem[]=[
    {product: {name: "motor", price: 10.00},
    quantity: 10,
    },
    {product: {name: "sensor", price: 12.50},
    quantity: 4,
    },
    {product: {name: "LED", price: 1.00},
    quantity: 20,
    }
]

export function calcInventoryValue(inventory:InventoryItem[]): number{
    if(inventory.length === 0){
        return 0;
    }else{
        let total: number = 0;
        for(let i=0; i<inventory.length; i++){
            total += (inventory[i].product.price*inventory[i].quantity);
        }
        return total;
    }
}

let inventoryTotal: number = calcInventoryValue(inventory);

console.log(inventoryTotal);