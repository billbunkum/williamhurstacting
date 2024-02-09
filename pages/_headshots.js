import styles from '@/styles/Home.module.css'

export default function Headshots() {
	return (
	<>
		<div className={styles.headshots}>

    	<img className={[styles.headshots_items, styles.serious_headshot].join(" ")}
			src="/assets/headshots/serious-straight-headshot.jpg"
			alt="Headshot Not Found"
			/>

			<img className={[styles.headshots_items, styles.seedy_headshot].join(" ")}
			src="/assets/headshots/seedy-detective.png"
			alt="Headshot Not Found"
			/>

			<img className={[styles.headshots_items, styles.jeanjacket_headshot].join(" ")}
			src="/assets/headshots/jean-jacket.jpg"
			alt="Headshot Not Found"
			/>

			<img className={[styles.headshots_items, styles.earnest_headshot].join(" ")}
			src="/assets/headshots/earnest.jpg"
			alt="Headshot Not Found"
			/>

		</div>
	</>
	);
}
