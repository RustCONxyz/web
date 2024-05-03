import { createFileRoute, redirect, Outlet } from "@tanstack/react-router";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { selectServerInfo } from "@/store/slices/serverInfo";
import buildWebSocketAction from "@/store/websocket/actions";
import * as websocketActions from "@/store/websocket/actions";

export const Route = createFileRoute("/_auth")({
    beforeLoad: ({ context, location }) => {
        if (!context.connectionStatus.isConnected) {
            throw redirect({
                to: "/",
                search: {
                    redirect: location.href
                }
            })
        }
    },
    component: DashboardLayout
});

function DashboardLayout() {

    const dispatch = useAppDispatch();

    const serverInfo = useAppSelector(selectServerInfo);

    function handleDisconnect() {

        dispatch(buildWebSocketAction(websocketActions.WEBSOCKET_DISCONNECT));

    }

    return (
        <>
            <nav className="relative bg-neutral-950 shadow">
                <div className="container mx-auto px-6 py-4">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="flex items-center justify-between">
                            <div className="text-xl font-semibold text-gray-700">
                                <a href="/" className="flex items-center">
                                    <img src="/logo.svg" alt="RustCON Logo" className="mr-3 size-8" />
                                    <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">
                                        RustCON
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div id="collapsible-menu" className="absolute inset-x-0 z-20 w-full -translate-x-full bg-neutral-950 px-6 py-4 opacity-100 transition-all duration-300 ease-in-out lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0 lg:opacity-100">
                            <div className="-mx-6 flex flex-col lg:mx-8 lg:flex-row lg:items-center">
                                <p className="mx-3 mt-2 rounded-md px-3 py-2 text-white lg:mt-0">
                                    {serverInfo.hostname}
                                </p>
                                <p className="mx-3 mt-2 rounded-md px-3 py-2 text-white lg:mt-0">
                                    Developers
                                </p>
                                <p className="mx-3 mt-2 rounded-md px-3 py-2 text-white lg:mt-0">
                                    Donate
                                </p>
                                <p className="mx-3 mt-2 rounded-md px-3 py-2 text-white lg:mt-0">
                                    Support
                                </p>
                            </div>
                            <div className="my-6 lg:my-0">
                                <button
                                    className="rounded-md border-2 border-red-600 px-8 py-2 text-white transition-colors duration-300 hover:bg-red-600"
                                    onClick={handleDisconnect}
                                >
                                    Disconnect
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )

}
