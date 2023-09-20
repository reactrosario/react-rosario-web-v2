module.exports = {
  siteMetadata: {
    title: 'React Rosario',
    description: 'Una comunidad de desarrolladores ReactJS y más',
    author: 'React Rosario'
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-eslint',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/img/`,
      },
    },
    'gatsby-plugin-netlify',
  ],
  trailingSlash: "always"
}