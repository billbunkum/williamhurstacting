import styles from '@/styles/Home.module.css'

export default function Headshots() {
	return (
	<>
    	<img className={[styles.headshots_items, styles.serious_headshot].join(" ")}
			loading="lazy"
			src="/assets/headshots/serious-straight-headshot.jpg"
			alt="Headshot Not Found"
			/>

			<img className={[styles.headshots_items, styles.seedy_headshot].join(" ")}
			loading="lazy"
			src="/assets/headshots/seedy-detective.png"
			alt="Headshot Not Found"
			/>

			<img className={[styles.headshots_items, styles.jeanjacket_headshot].join(" ")}
			loading="lazy"
			src="/assets/headshots/jean-jacket-smiling.jpg"
			alt="Headshot Not Found"
			/>

			<img className={[styles.headshots_items, styles.earnest_headshot].join(" ")}
			loading="lazy"
			src="/assets/headshots/goofy-2024.jpg"
			alt="Headshot Not Found"
			/>
	</>
	);
}
