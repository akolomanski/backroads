/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
	siteMetadata: {
		title: 'BackRoads',
		description:
			'Explore awesome worldwide tours & discover what makes each of them ucique. Forget your daily routine & say yest to adventure',
		author: 'Andrzej Kołomański',
		twitterUsername:"@jedrasek666",
		image:'/static/defaultBcg.jpeg',
		siteUrl:'https://test-gatsby-project.netlify.com'
	},
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-transition-link`,
		`gatsby-plugin-playground`,
		`gatsby-plugin-react-helmet`
	]
};
