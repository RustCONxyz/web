import React, { Suspense } from "react";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";

interface MyRouterContext {
    connectionStatus: {
        isConnected: boolean;
        isConnecting: boolean;
        failedToConnect: boolean;
    }
}

const TanStackRouterDevtools =
    process.env.NODE_ENV === "production"
        ? () => null
        : React.lazy(() => import("@tanstack/router-devtools").then((res) => ({ default: res.TanStackRouterDevtools })));

export const Route = createRootRouteWithContext<MyRouterContext>()({
    component: () => (
        <>
            <Outlet />
            <Suspense>
                <TanStackRouterDevtools />
            </Suspense>
        </>
    )
});
