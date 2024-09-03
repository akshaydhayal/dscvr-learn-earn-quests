// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;





/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"], // Add or remove extensions as needed
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "connect-src 'self' https://web3quests.vercel.app https://api.dscvr.one https://api1.stg.dscvr.one https://*.helius-rpc.com https://api.devnet.solana.com wss://api.devnet.solana.com/; style-src 'self' https://fonts.googleapis.com ; img-src 'self'  blob: data:;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
