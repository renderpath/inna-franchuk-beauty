export function LocalBusinessSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BeautySalon',
        name: 'Инна Франчук Beauty',
        description:
            'Наращивание ресниц, ламинирование ресниц, оформление и ламинирование бровей в пгт Первомайское, Республика Крым.',
        image: 'https://inna-franchuk-beauty.vercel.app/images/hero-bg.png',
        url: 'https://inna-franchuk-beauty.vercel.app',
        telephone: '+7',
        priceRange: '₽₽',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'пгт Первомайское',
            addressRegion: 'Республика Крым',
            addressCountry: 'RU',
        },
        areaServed: [
            'пгт Первомайское',
            'Первомайский район',
            'Республика Крым',
        ],
        founder: {
            '@type': 'Person',
            name: 'Инна Франчук',
        },
        makesOffer: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Наращивание ресниц',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Ламинирование ресниц',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Оформление бровей',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Ламинирование бровей',
                },
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
            }}
        />
    );
}