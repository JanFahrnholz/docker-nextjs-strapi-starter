import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import DrinkContextProvider from "lib/context/DrinkContext";
import CartContextProvider from "lib/context/CartContext";
import { AppProps } from "next/app";
import UserContextProvider from "lib/context/UserContext";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <UserContextProvider>
                <DrinkContextProvider>
                    <CartContextProvider>
                        <Component {...pageProps} />
                    </CartContextProvider>
                </DrinkContextProvider>
            </UserContextProvider>
        </QueryClientProvider>
    );
}

export default MyApp;
