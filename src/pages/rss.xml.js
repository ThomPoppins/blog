import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "un-sheeple.me's LATEST!",
    description: "un-sheeple.me's latest underground tunes, will always be #1",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.{md,mdx}")),
    customData: `<language>en-us</language>`,
  });
}
