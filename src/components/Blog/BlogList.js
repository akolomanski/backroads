import React from 'react';
import BlogCard from './BlogCard';
import Title from '../Title';
import { useStaticQuery, graphql } from 'gatsby';
import styles from '../../css/blog.module.css';

const getPosts = graphql`
	query {
		posts: allContentfulPost(sort: { fields: published, order: DESC }) {
			edges {
				node {
					title
					slug
					id: contentful_id
					published(formatString: "dddd MMMM Do YYYY")
					image {
						fluid {
							...GatsbyContentfulFluid
						}
					}
				}
			}
		}
	}
`;

const BlogList = () => {
	const { posts: { edges } } = useStaticQuery(getPosts);

	return (
		<section className={styles.blog}>
			<Title title="our" subtitle="blogs" />
            <div className={styles.center}>
                {edges.map(({node})=>{
                    return <BlogCard key={node.id} blog={node} />
                })}    
            </div>
		</section>
	);
};

export default BlogList;
