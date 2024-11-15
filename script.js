let container = [
    {
    "name" : "bottom",
    "quantity": 10,
    "price": 0
    },
    {
    "name" : "top",
    "quantity": 5,
    "price": 10
    }
]


// Add Product function
let addProduct = (name, quantity, price)=>{
    container.push({name, quantity, price})
}
addProduct("test", 23, 23)

// Remove Product function
let removeProduct = (removeTarget) =>{
    for(let i = 0; i < container.length; i++){
        if(removeTarget === container[i].name){
            delete container[i]
        }
    }
}
removeProduct("bottom")

// Update Quantity
let updateQuantity = (name,quantity)=>{
    for(let i = 0; i < container.length; i++){
        if(name === container[i].name){
            console.log(container[i].quantity = quantity)
        }
    }
}
updateQuantity("bottom", 2)




