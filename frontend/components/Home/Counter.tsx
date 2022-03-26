import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FC, useContext, useState } from "react";
import Drink from "@/types/drink";
import { DrinkContext } from "lib/context/DrinkContext";
import { CartContext } from "lib/context/CartContext";

const Counter: FC<{ drink: Drink }> = ({ drink }) => {
    const cartCtx = useContext(CartContext);

    return (
        <span className="relative z-0 inline-flex shadow-sm rounded-md">
            <button
                onClick={() => cartCtx.removeItem(drink)}
                type="button"
                className="relative inline-flex items-center px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
                <span className="sr-only">Remove</span>
                <FontAwesomeIcon icon={faMinus} />
            </button>
            <button
                type="button"
                className="-ml-px relative inline-flex items-center px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
                {cartCtx.items.find((d) => d.drink.id === drink.id)?.count || 0}
            </button>
            <button
                onClick={() => cartCtx.addItem(drink)}
                type="button"
                className="-ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
                <span className="sr-only">Add</span>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </span>
    );
};

export default Counter;
