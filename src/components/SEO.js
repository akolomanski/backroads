import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
	query {
		site {
			siteMetadata {
				siteTitle: title
				siteDesc: description
				author
				image
				siteUrl
			}
		}
	}
`;

const SEO = ({ title, description }) => {
	const { site: { siteMetadata: { siteDesc, siteTitle, author, siteUrl, image } } } = useStaticQuery(getData);

	return (
		<Helmet htmlAttributes={{ lang: 'en' }} title={`${title} | ${siteTitle}`}>
			<meta name="description" content={description || siteDesc} />
			<meta name="image" content={image} />
		</Helmet>
	);
};

export default SEO;
