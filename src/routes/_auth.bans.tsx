import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_auth/bans")({
    component: () => <div>Hello /_auth/bans!</div>
});
