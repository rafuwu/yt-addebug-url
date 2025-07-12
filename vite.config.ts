import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

// Custom plugins
import inlineIcon from "./plugins/inline-icon";

export default defineConfig({
	plugins: [
        viteSingleFile({ 
            removeViteModuleLoader: true,
        }),
        inlineIcon(),
    ],
    build: {
		minify: false,
        assetsInlineLimit: 0,
        cssMinify: false,
	},
    clearScreen: false,
});
