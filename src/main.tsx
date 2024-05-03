import "./index.css";

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { Provider as ReduxProvider } from "react-redux";

import store from "@/store/store";
import { useAppSelector } from "./hooks/redux";
import { selectConnectionState } from "@/store/slices/websocket";

import { routeTree } from "./routeTree.gen";

const router = createRouter({
    routeTree,
    context: {
        connectionStatus: {
            isConnected: false,
            isConnecting: false,
            failedToConnect: false
        }
    }
});

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router
    }
}

function InnerApp() {

    const connectionStatus = useAppSelector(selectConnectionState);

    return <RouterProvider router={router} context={{ connectionStatus }} />

}

function App() {
    return (
        <StrictMode>
            <ReduxProvider store={store}>
                <InnerApp />
            </ReduxProvider>
        </StrictMode>
    )
}

const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {

    const root = ReactDOM.createRoot(rootElement);

    root.render(<App />);

}
