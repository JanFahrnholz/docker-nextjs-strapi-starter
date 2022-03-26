import { createContext, FC, useState } from "react";
import { CartContext } from "./CartContext";

interface ContextType {
    budget: number;
}

export const UserContext = createContext<ContextType>(undefined!);

const UserContextProvider: FC = (props) => {
    const [budget, setBudget] = useState(90);

    return (
        <UserContext.Provider value={{ budget }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
