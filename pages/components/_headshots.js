import styles from '@/styles/Home.module.css'

const headshots = [
	'/assets/headshots/melancholy-apr2024-1.jpeg',
	'/assets/headshots/serious-straight-headshot.jpg',
	'/assets/headshots/will1.jpg',
	'/assets/headshots/seedy-detective.png',
	'/assets/headshots/jean-jacket-smiling.jpg',
	'/assets/headshots/will2.jpg',
	'/assets/headshots/goofy-2024.jpg',
	'/assets/headshots/will3.jpg',
];

export default function Headshots() {
	return (
	<>
    	<img className={[styles.headshots_items, styles.serious_headshot].join(" ")}
			loading="lazy"
			src="/assets/headshots/will3.jpg"
			alt="Headshot Not Found"
			/>

			<img className={[styles.headshots_items, styles.seedy_headshot].join(" ")}
			loading="lazy"
			src="/assets/headshots/serious-straight-headshot.jpg"
			alt="Headshot Not Found"
			/>

			<img className={[styles.headshots_items, styles.jeanjacket_headshot].join(" ")}
			loading="lazy"
			src="/assets/headshots/will2.jpg"
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
