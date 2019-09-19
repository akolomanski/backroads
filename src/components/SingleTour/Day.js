import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import styles from '../../css/day.module.css';

const Day = ({ day, info }) => {
	const [ showInfo, setInfo ] = useState(false);
	const toggleInfo = () => {
		setInfo((showInfo) => !showInfo);
	};

	return (
		<article className={styles.Day}>
			<h4>
				{day}
				<button className={styles.btn} onClick={toggleInfo}>
					<FaAngleDown />
				</button>
			</h4>
			<p className={showInfo ? `${styles.info} ${styles.showInfo}` : `${styles.info}`}>{info}</p>
		</article>
	);
};

export default Day;
