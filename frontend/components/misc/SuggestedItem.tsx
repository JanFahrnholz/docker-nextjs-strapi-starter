import Drink from "@/types/drink";
import DrinkBadges from "components/misc/DrinkBadges";
import { CartContext } from "lib/context/CartContext";
import { FC, useContext } from "react";

interface SuggestedItemProps {
    item: Drink;
}

const SuggestedItem: FC<SuggestedItemProps> = ({ item }) => {
    const cart = useContext(CartContext);

    return (
        <li key={item.id} className="flex py-6">
            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>
                            <span>{item.name}</span>
                            <span className="ml-2 text-sm text-gray-500">
                                {item.bottles} × {item.size}L
                            </span>
                        </p>
                        <p className="ml-4">
                            <span> {item.price}P</span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500 mb-2 text-sm">
                        <DrinkBadges drink={item} />
                    </p>

                    <div className="flex">
                        <div className="mt-4">
                            <button
                                onClick={() => cart.addItem(item)}
                                type="button"
                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {cart.items.filter(
                                    (a) => a.drink.id === item.id
                                ).length > 0
                                    ? "Add one more"
                                    : "Add  to cart"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default SuggestedItem;
