import Drink from "@/types/drink";
import GrapgQlData from "@/types/graphqlData";
import axios from "axios";
import { DrinkContext } from "lib/context/DrinkContext";
import { useContext } from "react";
import { useQuery } from "react-query";
import ListItem from "./ListItem";
import Error from "./QueryStates/Error";
import Loading from "./QueryStates/Loading";

export default function List() {
    const ctx = useContext(DrinkContext);
    const query = useQuery("drinks", () =>
        axios.post<GrapgQlData<Drink>[]>("/api/get-drinks").then((res) => {
            console.log(res);
            ctx.processGraphQlData(res.data);
        })
    );

    return (
        <div className="flex flex-col">
            <div className="-my-2 sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Name
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {query.status === "error" && <Error />}
                                {query.status === "loading" && <Loading />}

                                {query.status === "success" &&
                                    ctx.drinks.map((drink, index) => (
                                        <ListItem
                                            drink={drink}
                                            index={index}
                                            key={drink.id}
                                        />
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
