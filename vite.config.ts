import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import fs from 'node:fs';

export default defineConfig({
	plugins: [
        viteSingleFile({ 
            removeViteModuleLoader: true,
        }),
        {
            name: 'inline-icon', enforce: 'post',
            transformIndexHtml(html) {
                const icon_base64 = fs.readFileSync('./assets/icon.png').toString('base64');
                const link_tag_icon = `<link rel="icon" type="image/png" href="data:image/png;base64,${icon_base64}">`;
                return html.replace(/<link\srel="icon".*?>/, link_tag_icon);
            }
        },
    ],
    build: {
		minify: false,
        assetsInlineLimit: 0,
        cssMinify: false,
	},
    clearScreen: false,
});
