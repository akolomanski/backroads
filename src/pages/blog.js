import React from 'react';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';
import BlogList from '../components/Blog/BlogList';
import SEO from '../components/SEO';

const blog = ({ data:{blogBcg} }) => {
	return (
		<Layout>
			<SEO title="Blog" description="description" />
			<StyledHero img={blogBcg.childImageSharp.fluid} />
			<BlogList />
		</Layout>
	);
};

export const query = graphql`
	{
		blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
			childImageSharp {
				fluid(quality: 90, maxWidth: 4160) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;

export default blog;
