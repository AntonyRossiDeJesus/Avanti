/** @type {import('next').NextConfig} */
const nextConfig = {};

const withAbsolutePath = require("next-absolute-path");

module.exports = withAbsolutePath()({});

export default nextConfig;
