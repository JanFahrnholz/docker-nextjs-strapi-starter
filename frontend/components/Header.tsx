import { Fragment, useContext, useEffect } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import ShoppingCart from "./Home/ShoppingCart/ShoppingCart";
import { useState } from "react";
import { CartContext } from "lib/context/CartContext";
import { UserContext } from "lib/context/UserContext";

function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

export default function Header() {
    const [shoppingCartOpen, setShoppingCartOpen] = useState(false);

    const cartCtx = useContext(CartContext);
    const { budget } = useContext(UserContext);
    const [color, setColor] = useState("bg-indigo-600");

    useEffect(() => {
        if (cartCtx.priceTotal < budget) setColor("bg-indigo-600");
        if (cartCtx.priceTotal === budget) setColor("bg-green-500");
        if (cartCtx.priceTotal > budget) setColor("bg-red-500");
    }, [cartCtx.priceTotal]);

    return (
        <>
            {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
            <Popover
                as="header"
                className={({ open }) =>
                    classNames(
                        open ? "fixed inset-0 z-40 overflow-y-auto" : "",
                        "bg-white shadow-sm lg:static lg:overflow-y-visible"
                    )
                }
            >
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                                <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                                    <div className="flex-shrink-0 flex items-center">
                                        <a href="#">
                                            <img
                                                className="block h-8 w-auto"
                                                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                                                alt="Workflow"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                                    <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                                        <div className="w-full">
                                            <label
                                                htmlFor="search"
                                                className="sr-only"
                                            >
                                                Search
                                            </label>
                                            <div className="relative">
                                                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                                    <SearchIcon
                                                        className="h-5 w-5 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                                <input
                                                    id="search"
                                                    name="search"
                                                    className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    placeholder="Search"
                                                    type="search"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center ">
                                    <div className="mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <div className="inline relative">
                                            <ShoppingCartIcon
                                                className="block h-8 w-8"
                                                onClick={() =>
                                                    setShoppingCartOpen(true)
                                                }
                                            />
                                            {cartCtx.itemCount > 0 && (
                                                <span
                                                    className={`absolute bottom-[-5px] right-[-5px] block h-5 w-5 text-center text-sm pt-0 text-white rounded-full ring-2 ring-white ${color}`}
                                                >
                                                    {cartCtx.itemCount}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Popover>
            <ShoppingCart
                open={shoppingCartOpen}
                setOpen={setShoppingCartOpen}
            />
        </>
    );
}
