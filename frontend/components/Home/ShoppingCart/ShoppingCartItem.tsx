import CartItem from "@/types/cartItem";
import Drink from "@/types/drink";
import DrinkBadges from "components/misc/DrinkBadges";
import { FC } from "react";
import Counter from "../Counter";

interface ShoppingCartItemProps {
    item: CartItem;
}

const ShoppingCartItem: FC<ShoppingCartItemProps> = ({ item }) => {
    return (
        <li key={item.drink.id} className="flex py-6">
            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>
                            <span>{item.drink.name}</span>
                            <span className="ml-2 text-sm text-gray-500">
                                {item.drink.bottles} × {item.drink.size}L
                            </span>
                        </p>
                        <p className="ml-4">
                            <span className="text-gray-500">
                                {item.count} × {item.drink.price} =
                            </span>
                            <span> {item.priceTotal}P</span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500 mb-2 text-sm">
                        <DrinkBadges drink={item.drink} />
                    </p>

                    <div className="flex">
                        <div className="mt-4">
                            <Counter drink={item.drink} />
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default ShoppingCartItem;
