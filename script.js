let container = [
    {
    "name" : "test",
    "quantity": 0,
    "price": 0
    }
]

let addProduct = (name, quantity, price)=>{
    container.push({name, quantity, price})
}
addProduct("test", 23, 23)
console.log(container[1])