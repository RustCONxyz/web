import type SavedConnectionsDetails from "@/types/SavedConnectionsDetails";

export function getAllSavedConnections(): SavedConnectionsDetails[] {

    return [];

}

export async function addSavedConnection(connection: string, rconPassword: string) {

    const allServers = getAllSavedConnections();

    if (allServers.some((server) => server.connection === connection)) {

        return;

    }

    allServers.push({ connection, serverName: "My Rust Server", rconPassword });

}
