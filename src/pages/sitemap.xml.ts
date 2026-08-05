import { site } from "../data/site";

const pages = [
	{ path: "/", priority: "1.0" },
	{ path: "/about-me/", priority: "0.8" },
	{ path: "/for-players/", priority: "0.9" },
	{ path: "/locations/", priority: "0.8" },
	{ path: "/leaderboard/", priority: "0.6" },
	{ path: "/partner-with-us/", priority: "0.9" },
];

export function GET() {
	const urls = pages
		.map(({ path, priority }) => {
			const url = new URL(path, site.url);

			return [
				"	<url>",
				`		<loc>${url}</loc>`,
				`		<priority>${priority}</priority>`,
				"	</url>",
			].join("\n");
		})
		.join("\n");

	return new Response(
		[
			'<?xml version="1.0" encoding="UTF-8"?>',
			'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
			urls,
			"</urlset>",
			"",
		].join("\n"),
		{
			headers: {
				"Content-Type": "application/xml; charset=utf-8",
			},
		},
	);
}
