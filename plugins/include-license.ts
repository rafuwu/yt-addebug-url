import { PluginOption } from "vite";
import { Plugin } from "vite";
import fs from "node:fs";

/**
 * Adds license from ./LICENSE file to the top of HTML document.
 * @param plugin_apply Apply the plugin only for serve or build, or on certain conditions.
 */
export default function includeLicense(plugin_apply?: Plugin["apply"]) {
    return {
        name: "include-license", enforce: "post", apply: plugin_apply,
        transformIndexHtml(html) {
            const license_text = fs.readFileSync("./LICENSE", { encoding: "utf-8" });
            return "<!--\n" + license_text + "-->\n\n" + html; 
        }
    } as PluginOption
}
