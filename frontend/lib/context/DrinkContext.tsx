import Drink from "@/types/drink";
import GrapgQlData from "@/types/graphqlData";
import { FC, useState } from "react";
import { createContext } from "react";

interface ContextType {
    drinks: Drink[];
    processGraphQlData: (data: Array<GrapgQlData<Drink>>) => void;
}

export const DrinkContext = createContext<ContextType>(undefined!);

const DrinkContextProvider: FC = (props) => {
    const [drinks, setDrinks] = useState<Drink[]>([]);

    const processGraphQlData = (data: Array<GrapgQlData<Drink>>) => {
        const i: Drink[] = [];
        data.map((e) => {
            const drink: Drink = {
                ...e.attributes,
            };
            drink.id = e.id;
            i.push(drink);
        });
        setDrinks(i);
    };

    return (
        <DrinkContext.Provider value={{ drinks, processGraphQlData }}>
            {props.children}
        </DrinkContext.Provider>
    );
};

export default DrinkContextProvider;
