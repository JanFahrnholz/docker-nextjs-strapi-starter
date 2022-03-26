import Brand from "./brand";
import Category from "./category";

export default interface Drink {
    id: number;
    name: string;
    bottles: number;
    size: number;
    price: number;
    brand: { data: { attributes: Brand } };
    categories: { data: [{ attributes: Category }] };
}
