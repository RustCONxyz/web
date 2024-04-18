import "./index.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { Provider as ReduxProvider } from "react-redux";
import store from "@/store/store";


import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router
    }
}

const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {

    const root = ReactDOM.createRoot(rootElement);

    root.render(
        <StrictMode>
            <ReduxProvider store={store}>
                <RouterProvider router={router} />
            </ReduxProvider>
        </StrictMode>
    );

}
