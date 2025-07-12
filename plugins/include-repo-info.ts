import { PluginOption } from "vite";
import { Plugin } from "vite";
import { execSync } from "node:child_process";

/**
 * Adds git repository info to the top of the HTML document.
 * @param plugin_apply Apply the plugin only for serve or build, or on certain conditions.
 */
export default function includeRepoInfo(plugin_apply?: Plugin["apply"]) {
    return {
        name: "include-repo-info", enforce: "post", apply: plugin_apply,
        transformIndexHtml(html) {
            const git_current_hash = execSync("git rev-parse HEAD")

            return "<!--\n" + "Git commit hash: " + git_current_hash + "-->\n\n" + html; 
        }
    } as PluginOption
}
