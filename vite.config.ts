import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
	plugins: [ viteSingleFile({ 
        removeViteModuleLoader: true,
    }) ],
    build: {
		minify: false,
        assetsInlineLimit: 0,
        cssMinify: false,
	},
    clearScreen: false,
});
