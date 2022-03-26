import { CartContext } from "lib/context/CartContext";
import { UserContext } from "lib/context/UserContext";
import { CSSProperties, FC, useContext, useEffect, useState } from "react";

const BudgetProgressBar: FC = () => {
    const { priceTotal } = useContext(CartContext);
    const { budget } = useContext(UserContext);
    const [color, setColor] = useState("bg-indigo-600");

    useEffect(() => {
        if (priceTotal < budget) setColor("bg-indigo-600");
        if (priceTotal === budget) setColor("bg-green-500");
        if (priceTotal > budget) setColor("bg-red-500");
    }, [priceTotal]);

    const prepareStyle = () => {
        const style: CSSProperties = {
            width: `${((priceTotal / budget) * 100).toFixed(3)}%`,
            transition: "all .5s",
        };

        return style;
    };

    return (
        <div>
            <div className="bg-gray-200 overflow-hidden">
                <div className={`h-1 ${color}`} style={prepareStyle()} />
            </div>
        </div>
    );
};

export default BudgetProgressBar;
