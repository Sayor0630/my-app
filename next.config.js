/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        images: {
            unoptimized: true
        },
    },
    output: 'export',
}

module.exports = nextConfig
