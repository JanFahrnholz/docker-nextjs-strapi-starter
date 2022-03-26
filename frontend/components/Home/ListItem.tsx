import Category from "@/types/category";
import Drink from "@/types/drink";
import DrinkBadges from "components/misc/DrinkBadges";
import { FC } from "react";
import Counter from "./Counter";

const ListItem: FC<{ drink: Drink; index: number }> = ({ drink, index }) => {
    return (
        <tr className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
            <td className="w-full p-4 text-sm font-medium text-gray-900">
                <div className="flex flex-row">
                    <div className="grow">
                        <span className="font-bold text-md">{drink.name}</span>
                        <span className="font-normal ml-2">
                            {drink.bottles} × {drink.size}L - {drink.price}P
                        </span>
                        <DrinkBadges drink={drink} />
                    </div>
                    <div className="shrink">
                        <Counter drink={drink} />
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default ListItem;
