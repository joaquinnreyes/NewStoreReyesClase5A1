import { createContext, useState } from 'react';

const CartContext = createContext();


export function CartContextProvider({ children }) {
    const [itemsCart, setItemsCart] = useState([]);

    function addItem(item, qty) {
        if (isItemInCart(item.id)) {
            let index=itemsCart.findIndex(i=>i.id===item.id);
            let copyCart=[...itemsCart];
            copyCart[index].qty+=qty;
            setItemsCart(copyCart);

        }
        else {
            const itemToAdd = { ...item, qty }
            setItemsCart([...itemsCart, itemToAdd]);
        }
    }
    function isItemInCart(id) {
        return itemsCart.some(cadaitem => cadaitem.id === id)
    }
    function getItemInCart(id) {
        return itemsCart.find(cadaitem => cadaitem.id === id)
    }
    function deleteCartById(id){
        let index=itemsCart.findIndex(i=>i.id===id);
        let copyCart=[...itemsCart];
        copyCart.splice(index,1);
        setItemsCart([...copyCart])
    }


    function clearCart() {
        setItemsCart([]);
    }
    

    return (
        <CartContext.Provider value={{ itemsCart, addItem,getItemInCart, clearCart,deleteCartById }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;

