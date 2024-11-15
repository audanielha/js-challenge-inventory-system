let container = [
    {
    "name" : "first",
    "quantity": 5,
    "price": 10,
    },
    {
    "name" : "second",
    "quantity": 10,
    "price": 20,
    },
    {"name" : "third",
    "quantity": 15,
    "price": 30,
    },
    {"name" : "fourth",
    "quantity": 20,
    "price": 40,
    }
]


// Add Product function
let addProduct = (name, quantity, price)=>{
    container.push({name, quantity, price});
}
addProduct("Five", 50, 25)
addProduct("Six", 60, 30)
addProduct("Seven", 70, 35)

// Remove Product function
let removeProduct = (removeTarget) =>{
    for(let i = 0; i < container.length; i++){
        if(removeTarget === container[i].name){
            delete container[i]
        }
    }
}
//removeProduct("third");

// Update Quantity function
let updateQuantity = (name,quantity)=>{
    for(let i = 0; i < container.length; i++){
        if(name === container[i].name){
            container[i].quantity = quantity;
        }
    }
}
updateQuantity("second", 2)

// Calculate Total Value function calculateTotalValue()
let calculateTotalValue = () =>{
    let totalValue = 0;
    for(let i = 0; i < container.length; i++){
        totalValue += container[i].price;
        console.log(container[i].price)  
    }
    console.log(totalValue)
    return totalValue
    
}

calculateTotalValue()

for(let i = 0; i < container.length; i++){
    console.log(container[i])
}

