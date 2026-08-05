import { site } from "../data/site";

export function GET() {
	const sitemapUrl = new URL("/sitemap.xml", site.url);

	return new Response(
		[
			"User-agent: *",
			"Allow: /",
			`Sitemap: ${sitemapUrl}`,
			"",
		].join("\n"),
		{
			headers: {
				"Content-Type": "text/plain; charset=utf-8",
			},
		},
	);
}
