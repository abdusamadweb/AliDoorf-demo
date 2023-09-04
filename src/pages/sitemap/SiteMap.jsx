import React from 'react'

const SiteMap = () => {

    // XML для Sitemap
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                <url>
                    <loc>https://alidoorf.uz/</loc>
                    <lastmod>2023-09-03T19:39:35+01:00</lastmod>
                    <priority>0.6</priority>
                </url>
                <url>
                    <loc>https://alidoorf.uz/alidoorf/catalog</loc>
                    <lastmod>2023-09-03T19:39:35+01:00</lastmod>
                    <priority>0.8</priority>
                </url>
                <url>
                    <loc>https://alidoorf.uz/alidoorf</loc>
                    <lastmod>2023-09-03T19:39:35+01:00</lastmod>
                    <priority>1.0</priority>
                </url>
                <url>
                    <loc>https://alidoorf.uz/primeloft</loc>
                    <lastmod>2023-09-03T19:39:35+01:00</lastmod>
                    <priority>1.0</priority>
                </url>
                <url>
                    <loc>https://alidoorf.uz/mebel</loc>
                    <lastmod>2023-09-03T19:39:35+01:00</lastmod>
                    <priority>1.0</priority>
                </url>
                <url>
                    <loc>https://alidoorf.uz/alidoorf/news/</loc>
                    <lastmod>2023-09-03T19:39:35+01:00</lastmod>
                    <priority>0.6</priority>
                </url>
                <url>
                    <loc>https://alidoorf.uz/alidoorf/about</loc>
                    <lastmod>2023-09-03T19:39:35+01:00</lastmod>
                    <priority>0.8</priority>
                </url>
                <url>
                    <loc>https://alidoorf.uz/contacts</loc>
                    <lastmod>2023-09-03T19:39:35+01:00</lastmod>
                    <priority>1.0</priority>
                </url>
                <url>
                    <loc>https://alidoorf.uz/news</loc>
                    <lastmod>2023-09-03T19:39:35+01:00</lastmod>
                    <priority>1.0</priority>
                </url>
                <url>
                    <loc>https://alidoorf.uz/alidoorf/news</loc>
                    <lastmod>2023-09-03T19:39:35+01:00</lastmod>
                    <priority>0.8</priority>
                </url>
                <url>
                    <loc>https://alidoorf.uz/primeloft/about</loc>
                    <lastmod>2023-09-03T19:39:35+01:00</lastmod>
                    <priority>0.8</priority>
                </url>
                <url>
                    <loc>https://alidoorf.uz/primeloft/news</loc>
                    <lastmod>2023-09-03T19:39:35+01:00</lastmod>
                    <priority>0.8</priority>
                </url>
            </urlset>`

    return (
        <pre>
            <code>
                {xml}
            </code>
        </pre>
    )
}

export default SiteMap
