import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {};

const withNextIntl = createNextIntlPlugin("./app/i18nconfig.tsx"); //設定ファイルをここ
export default withNextIntl(nextConfig);
