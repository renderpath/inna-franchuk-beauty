import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://inna-franchuk-beauty.vercel.app';

    return [
        '',
        '/services',
        '/portfolio',
        '/about',
        '/reviews',
        '/blog',
        '/booking',
        '/contacts',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));
}