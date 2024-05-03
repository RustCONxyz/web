import { createFileRoute, redirect } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { z } from "zod";
import Logo from "/logo.svg";
import ConnectionForm from "@/components/ConnectionForm";

const fallback = "/home" as const;

export const Route = createFileRoute("/")({
    validateSearch: z.object({
        redirect: z.string().optional().catch("")
    }),
    beforeLoad: ({ context, search }) => {
        if (context.connectionStatus.isConnected) {
            throw redirect({ to: search.redirect || fallback })
        }
    },
    component: Index
});

function Index() {

    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const randomBackground = Math.floor(Math.random() * 10) + 1;

        const section = sectionRef.current;

        if (section) {

            section.style.backgroundImage = `url(/backgrounds/${randomBackground}.png)`;

        }

    }, []);

    return (
        <section ref={sectionRef} className="relative bg-cover bg-center bg-no-repeat duration-500 ease-in-out">
            <div className="absolute inset-0 bg-neutral-950/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-neutral-950/50 sm:via-neutral-950/90 sm:to-neutral-950" />
            <div className="relative flex h-screen flex-col items-center justify-center lg:flex-row">
                <div className="lg:w-3/4">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center">
                            <img src={Logo} className="mr-6 h-12 w-auto sm:h-16 md:h-20" />
                            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                                RustCON
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center border-gray-400 px-4 py-16 sm:px-6 lg:w-1/4 lg:border-l-2 lg:px-8 lg:py-24">
                    <ConnectionForm />
                </div>
            </div>
        </section>
    )

}
