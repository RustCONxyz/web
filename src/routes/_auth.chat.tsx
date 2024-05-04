import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_auth/chat")({
    component: () => <div>Hello /_auth/chat!</div>
});
