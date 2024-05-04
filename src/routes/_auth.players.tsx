import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_auth/players")({
    component: () => <div>Hello /_auth/players!</div>
});
