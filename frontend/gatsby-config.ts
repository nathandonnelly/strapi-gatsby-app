import type { GatsbyConfig } from "gatsby";
//gatsby-config.js

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const StrapiConfig = {
  apiURL: process.env.STRAPI_API_URL || "http://127.0.0.1:1337",
  collectionTypes: ["post"],
};

const config: GatsbyConfig = {
  siteMetadata: {
    title: `frontend`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: StrapiConfig,
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-postcss",
  ],
};

export default config;
