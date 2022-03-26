import Drink from "@/types/drink";
import { FC } from "react";

interface DrinkBadgesProps {
    drink: Drink;
}

const DrinkBadges: FC<DrinkBadgesProps> = ({ drink }) => {
    return (
        <dd className="mt-1 gap-1 text-gray-500">
            <span className="inline-flex items-center mr-1 mb-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-500 text-white">
                {drink.brand.data.attributes.name}
            </span>
            {drink.categories.data.map((category) => (
                <span
                    className="inline-flex items-center mr-1 mb-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-400 text-white"
                    key={category.attributes.name}
                >
                    {category.attributes.name}
                </span>
            ))}
        </dd>
    );
};

export default DrinkBadges;
