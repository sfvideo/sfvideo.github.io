module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `${process.env.AIRTABLE_API_KEY}`,
        baseId: `${process.env.AIRTABLE_BASE_ID}`,
        tableName: `${process.env.AIRTABLE_TABLE_NAME}`,
        tableView: `${process.env.AIRTABLE_VIEW_NAME}`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
