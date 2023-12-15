//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const million = require('million/compiler');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
    nx: {
        // Set this to true if you would like to to use SVGR
        // See: https://github.com/gregberge/svgr
        svgr: false,
    },
    images: {
        remotePatterns: [
            { hostname: 'images.unsplash.com', protocol: 'https' },
        ],
    },
};

const millionConfig = {
    auto: true,
};

const plugins = [
    // Add more Next.js plugins to this list if needed.
    withNx,
];

module.exports = composePlugins(...plugins)(
    million.next(nextConfig, millionConfig),
);
