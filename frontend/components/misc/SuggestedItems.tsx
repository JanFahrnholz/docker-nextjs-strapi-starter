import ShoppingCartItem from "components/Home/ShoppingCart/ShoppingCartItem";
import { CartContext } from "lib/context/CartContext";
import { DrinkContext } from "lib/context/DrinkContext";
import { UserContext } from "lib/context/UserContext";
import { FC, useContext, useEffect, useState } from "react";
import SuggestedItem from "./SuggestedItem";

interface SuggestedItemsProps {}

const SuggestedItems: FC<SuggestedItemsProps> = () => {
    const getSuggestedItems = () =>
        drinks
            .filter((drink) => drink.price <= budget - priceTotal)
            .sort((a, b) => (a.price < b.price ? 1 : -1));

    const { budget } = useContext(UserContext);
    const { priceTotal } = useContext(CartContext);
    const { drinks } = useContext(DrinkContext);
    const [suggestedItems, setSuggestedItems] = useState(getSuggestedItems());

    useEffect(() => {
        setSuggestedItems(getSuggestedItems());
    }, [priceTotal]);

    console.log("suggs", getSuggestedItems());

    return (
        <div>
            {suggestedItems.map((drink) => (
                <SuggestedItem item={drink} />
            ))}
        </div>
    );
};

export default SuggestedItems;
