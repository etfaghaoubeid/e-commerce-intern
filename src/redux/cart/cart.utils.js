export const addItemToCart = (items , itemToAdd) =>{
    const exists = items.find(item=>item.id===itemToAdd.id)
    if(exists){
        return items.map(item=>item.id === itemToAdd.id? {...item, quantity: item.quantity+1}:item)
    }
    return [...items ,{...itemToAdd,quantity:1} ]
}
export const removeItemFromCart = (items , itemToRemove) =>{
    
    return items.filter(item=>item.id!==itemToRemove.id)
}
export const increaseQuantity = (items , itemToIcrease)=>{
    return items.map(item=>item.id===itemToIcrease.id? {...item, quantity:item.quantity+1}:item)
}
export const decreaseQuantity = (items , itemToDecrease)=>{
    const exists = items.find(item=>item.id===itemToDecrease.id);

    if(exists && exists.quantity>1){
        return items.map(item=>item.id === itemToDecrease.id? {...item, quantity: item.quantity-1}:item)
    }
    return items.filter(item=>item.id!==itemToDecrease.id)
}