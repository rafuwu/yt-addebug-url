import { PluginOption } from "vite";
import fs from "node:fs";

export default function inlineIcon() {
    return {
        name: "inline-icon", enforce: "post",
        transformIndexHtml(html: string) {
            const icon_base64 = fs.readFileSync("./assets/icon.png").toString("base64");
            const link_tag_icon = `<link rel="icon" type="image/png" href="data:image/png;base64,${icon_base64}">`;
            return html.replace(/<link\srel="icon".*?>/, link_tag_icon);
        }
    } as PluginOption
}
