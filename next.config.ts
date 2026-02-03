import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  assetPrefix: isProd ? '/upay-ics-web-guide/' : '',
  basePath: isProd ? '/upay-ics-web-guide' : '',
  output: 'export'
};

export default nextConfig;
