import React, { Suspense } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Provider as ReduxProvider } from "react-redux";

import store from "@/store/store";

const TanStackRouterDevtools =
    process.env.NODE_ENV === "production"
        ? () => null
        : React.lazy(() => import("@tanstack/router-devtools").then((res) => ({ default: res.TanStackRouterDevtools })));

export const Route = createRootRoute({
    component: () => (
        <ReduxProvider store={store}>
            <Outlet />
            <Suspense>
                <TanStackRouterDevtools />
            </Suspense>
        </ReduxProvider>
    )
});
