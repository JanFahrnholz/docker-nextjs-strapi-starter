/* This example requires Tailwind CSS v2.0+ */
import { FC, Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import ItemManager, { CartContext } from "lib/context/CartContext";
import Counter from "../Counter";
import ShoppingCartItem from "./ShoppingCartItem";
import BudgetProgressBar from "components/misc/BudgetProgressBar";
import { UserContext } from "lib/context/UserContext";
import { useHydrate } from "react-query";
import HorizontalDivider from "components/misc/HorizontalDivider";
import SuggestedItems from "components/misc/SuggestedItems";

const ShoppingCart: FC<{ open: boolean; setOpen: Function }> = ({
    open,
    setOpen,
}) => {
    const cartCtx = useContext(CartContext);
    const userCtx = useContext(UserContext);

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 overflow-hidden"
                onClose={() => setOpen()}
            >
                <div className="absolute inset-0 overflow-hidden">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <div className="pointer-events-auto w-screen max-w-md">
                                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <Dialog.Title className="text-lg font-medium text-gray-900">
                                                {" "}
                                                Shopping cart{" "}
                                            </Dialog.Title>
                                            <div className="ml-3 flex h-7 items-center">
                                                <button
                                                    type="button"
                                                    className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                    onClick={() =>
                                                        setOpen(false)
                                                    }
                                                >
                                                    <span className="sr-only">
                                                        Close panel
                                                    </span>
                                                    <XIcon
                                                        className="h-6 w-6"
                                                        aria-hidden="true"
                                                    />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <div className="flow-root">
                                                <ul
                                                    role="list"
                                                    className="my-6 divide-y divide-gray-200"
                                                >
                                                    {cartCtx.items.map(
                                                        (item) => (
                                                            <ShoppingCartItem
                                                                item={item}
                                                                key={
                                                                    item.drink
                                                                        .id
                                                                }
                                                            />
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                            <div className="flow-root">
                                                <HorizontalDivider text="Suggested items" />
                                                <ul
                                                    role="list"
                                                    className="my-6 divide-y divide-gray-200"
                                                >
                                                    <SuggestedItems />
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <BudgetProgressBar />

                                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <p>Subtotal</p>
                                            <p>{cartCtx.priceTotal}P</p>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-900">
                                            <p>Budget</p>
                                            <p>{userCtx.budget}P</p>
                                        </div>

                                        {cartCtx.priceTotal > userCtx.budget ? (
                                            <div className="flex justify-between text-sm text-red-500">
                                                <p>Budget exceeded by </p>
                                                <p>
                                                    {cartCtx.priceTotal -
                                                        userCtx.budget}
                                                    P
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="flex justify-between text-sm text-gray-900">
                                                <p>Remaining points </p>
                                                <p>
                                                    {userCtx.budget -
                                                        cartCtx.priceTotal}
                                                    P
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default ShoppingCart;
