import Drink from "./drink";

export default interface CartItem {
    drink: Drink;
    count: number;
    priceTotal: number;
}
