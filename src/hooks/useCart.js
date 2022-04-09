import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedPorduct = products.find(product => product.id === id)
            if (addedPorduct) {
                const quantity = storedCart[id];
                addedPorduct.quantity = quantity;
                savedCart.push(addedPorduct)
            }
        }
        setCart(savedCart)
    }, [products])
    return [cart, setCart]
}
export default useCart;