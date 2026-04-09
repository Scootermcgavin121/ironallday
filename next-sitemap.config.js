/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ironallday.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  // Exclude Next.js internals
  exclude: ['/api/*'],
  // Additional paths for products fetched client-side
  additionalPaths: async (config) => {
    const results = [];

    // Fetch product slugs from the API
    try {
      const res = await fetch('https://lumevara.com/api/products?brand=iad');
      if (res.ok) {
        const products = await res.json();
        for (const product of products) {
          results.push({
            loc: `/shop/${product.slug}`,
            changefreq: 'weekly',
            priority: 0.8,
            lastmod: new Date().toISOString(),
          });
        }
      }
    } catch (e) {
      console.warn('Could not fetch products for sitemap:', e.message);
    }

    return results;
  },
  changefreq: 'weekly',
  priority: 0.7,
};
