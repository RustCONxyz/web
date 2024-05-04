import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_auth/console")({
    component: () => <div>Hello /_auth/console!</div>
});
