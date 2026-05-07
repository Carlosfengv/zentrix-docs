import { docs } from "collections/server";
import { loader } from "fumadocs-core/source";
import { createElement } from "react";
import { aiStudioIcons } from "@/components/icons/ai-studio-icons";
import { docsContentRoute, docsImageRoute, docsRoute } from "./shared";

type AiStudioIconName = keyof typeof aiStudioIcons;

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon) return;

    const Icon = aiStudioIcons[icon as AiStudioIconName];
    if (!Icon) {
      console.warn(`[ai-studio-icons] Unknown icon detected: ${icon}.`);
      return;
    }

    return createElement(Icon, { className: "size-4" });
  },
});

export function getPageImage(page: (typeof source)["$inferPage"]) {
  const segments = [...page.slugs, "image.png"];

  return {
    segments,
    url: `${docsImageRoute}/${segments.join("/")}`,
  };
}

export function getPageMarkdownUrl(page: (typeof source)["$inferPage"]) {
  const segments = [...page.slugs, "content.md"];

  return {
    segments,
    url: `${docsContentRoute}/${segments.join("/")}`,
  };
}

export async function getLLMText(page: (typeof source)["$inferPage"]) {
  const processed = await page.data.getText("processed");

  return `# ${page.data.title} (${page.url})

${processed}`;
}
