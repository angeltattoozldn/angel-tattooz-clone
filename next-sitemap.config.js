/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://angel-tattooz-clone.vercel.app/', // Your production URL
    generateRobotsTxt: true, // Automatically generates robots.txt
    exclude: ['/api/*', '/admin/*'], // Hide API routes from Google
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://angel-tattooz-clone.vercel.app/sitemap-image.xml', // We will generate this
        ],
        policies: [
            { userAgent: '*', allow: '/' },
            { userAgent: 'GPTBot', allow: '/' }, // Explicitly welcome ChatGPT
            { userAgent: 'CCBot', allow: '/' },  // Explicitly welcome Common Crawl (Perplexity)
        ],
    },
}