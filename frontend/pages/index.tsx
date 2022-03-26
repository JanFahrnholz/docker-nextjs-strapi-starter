import BudgetProgressBar from "components/misc/BudgetProgressBar";
import CartContextProvider from "lib/context/CartContext";
import ItemContextProvider from "lib/context/CartContext";
import DrinkContextProvider from "lib/context/DrinkContext";
import Header from "../components/Header";
import List from "../components/Home/List";

export default function Home() {
    return (
        <div className="h-screen">
            <Header />
            <BudgetProgressBar />
            <List />
        </div>
    );
}
