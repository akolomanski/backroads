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
                twitterUsername
			}
		}
	}
`;

const SEO = ({ title, description }) => {
	const { site: { siteMetadata: { siteDesc, siteTitle, author, siteUrl, image, twitterUsername } } } = useStaticQuery(getData);

	return (
		<Helmet htmlAttributes={{ lang: 'en' }} title={`${title} | ${siteTitle}`}>
			<meta name="description" content={description || siteDesc} />
			<meta name="image" content={image} />
            {/* twitter card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterUsername} />
            <meta name="twiter:title" content={title} />
            <meta name="twiter:description" content={siteDesc} />
            <meta name="twiter:image" content={`${siteUrl}${image}`} />
            
		</Helmet>
	);
};

export default SEO;
