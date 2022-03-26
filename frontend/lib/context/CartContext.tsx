import Drink from "@/types/drink";
import GrapgQlData from "@/types/graphqlData";
import { FC, useContext, useEffect, useState } from "react";
import { createContext } from "react";
import CartItem from "@/types/cartItem";

interface ContextType {
    items: CartItem[];
    itemCount: number;
    priceTotal: number;
    addItem: (drink: Drink) => void;
    removeItem: (drink: Drink) => void;
    getCount: (drink: Drink) => number;
}

export const CartContext = createContext<ContextType>(undefined!);

const CartContextProvider: FC = (props) => {
    const [items, setItems] = useState<CartItem[]>([]);
    const [itemCount, setItemCount] = useState<number>(0);
    const [priceTotal, setPriceTotal] = useState<number>(0);

    useEffect(() => {
        let currentItemCount = 0;
        let currentPriceTotal = 0;
        items.map((item) => {
            currentItemCount += item.count;
            item.priceTotal = item.count * item.drink.price;
            currentPriceTotal += item.priceTotal;
        });
        setItemCount(currentItemCount);
        setPriceTotal(currentPriceTotal);
    }, [items]);

    const getCount = (drink: Drink) => {
        const cartItem = items.find((d) => d.drink.id === drink.id);
        if (!cartItem) return 0;

        return cartItem.count;
    };

    const addItem = (drink: Drink) => {
        const cartItem = items.find((d) => d.drink.id === drink.id);

        if (!cartItem) {
            const newItem: CartItem = {
                drink,
                count: 1,
                priceTotal: drink.price,
            };
            items.push(newItem);
            setItems([...items]);
            return;
        }

        const index = items.findIndex((d) => d.drink.id === drink.id);

        items[index].count++;
        setItems([...items]);
    };

    const removeItem = (drink: Drink) => {
        const cartItem = items.find((d) => d.drink.id === drink.id);
        if (!cartItem) return;

        if (cartItem.count === 1) {
            const filterd = items.filter(
                (x) => x.drink.id !== cartItem.drink.id
            );
            setItems([...filterd]);
            return;
        }

        cartItem.count--;
        setItems([...items]);
    };

    return (
        <CartContext.Provider
            value={{
                items,
                itemCount,
                priceTotal,
                addItem,
                removeItem,
                getCount,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
