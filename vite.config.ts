import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({

    plugins: [
        react(),
        TanStackRouterVite(),
        VitePWA({ registerType: "autoUpdate" })
    ],

    resolve: {

        alias: {

            "@": path.resolve(__dirname, "./src/")

        }

    }

});
