import React from 'react';
import styles from '../../css/blog-card.module.css';
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';


const BlogCard = ({ blog: { slug, title, image: { fluid }, published } }) => {
	return (
		<article className={styles.blog}>
			<div className={styles.imgContainer}>
				<Img fluid={fluid} className={styles.img} alt="single image" />
                
				<AniLink fade className={styles.link} to={`blog/${slug}`}>
					read more
				</AniLink>
				<h6 className={styles.date}>{published}</h6>
			</div>
			<div className={styles.footer}>
				<h4>{title}</h4>
			</div>
		</article>
	);
};

export default BlogCard;
