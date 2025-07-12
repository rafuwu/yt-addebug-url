import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

// Custom plugins
import inlineIcon from "./plugins/inline-icon";
import includeLicense from "./plugins/include-license";
import includeRepoInfo from "./plugins/include-repo-info";

export default defineConfig({
	plugins: [
        viteSingleFile({ 
            removeViteModuleLoader: true,
        }),
        inlineIcon(),
        includeLicense("build"),
        includeRepoInfo("build"),
    ],
    build: {
		minify: false,
        assetsInlineLimit: 0,
        cssMinify: false,
	},
    clearScreen: false,
});
