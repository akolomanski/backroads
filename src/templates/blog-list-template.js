import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styles from '../css/blog.module.css';
import BlogCard from '../components/Blog/BlogCard';
import Title from '../components/Title';

const blogListTemplate = (props) => {
	const { data: { posts: { edges } }, pageContext: { currPage, numPages } } = props;

	const isFirst = currPage === 1;
	const isLast = currPage === numPages;

	const nextPage = `/blogs/${currPage + 1}`;
	const prevPage = currPage - 1 <= 1 ? `/blogs` : `/blogs/${currPage - 1}`;

	return (
		<Layout>
			<section className={styles.blog}>
				<Title title="latest" subtitle="posts" />
				<div className={styles.center}>
					{edges.map(({ node }) => {
						return <BlogCard key={node.id} blog={node} />;
					})}
				</div>
				<section className={styles.links}>
					{!isFirst && (
						<AniLink fade="/blogs" to={prevPage} className={styles.link}>
							Prev
						</AniLink>
					)}

					{Array.from({ length: numPages }, (_, i) => {
						return (
							<AniLink
								key={i}
								fade
								to={`/blogs/${i === 0 ? '' : i + 1}`}
								className={i + 1 === currPage ? `${styles.link} ${styles.active}` : `${styles.link}`}
							>
								{i + 1}
							</AniLink>
						);
					})}
					{!isLast && (
						<AniLink fade to={nextPage} className={styles.link}>
							Next
						</AniLink>
					)}
				</section>
			</section>
		</Layout>
	);
};

export const query = graphql`
	query getPosts($skip: Int!, $limit: Int!) {
		posts: allContentfulPost(skip: $skip, limit: $limit, sort: { fields: published, order: DESC }) {
			edges {
				node {
					slug
					title
					id: contentful_id
					published(formatString: "MMMM DO, YYYY")
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

export default blogListTemplate;
