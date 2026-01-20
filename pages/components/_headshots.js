import styles from '@/styles/Home.module.css'

const headshots = [
	'/assets/headshots/melancholy-apr2024-1.jpeg',
	'/assets/headshots/serious-straight-headshot.jpg',
	'/assets/headshots/wil1.jpg',
	'/assets/headshots/seedy-detective.png',
	'/assets/headshots/jean-jacket-smiling.jpg',
	'/assets/headshots/will2.jpg',
	'/assets/headshots/goofy-2024.jpg',
	'/assets/headshots/will3.jpg',
	'/assets/headshots/new-batch/C97A0048-cleaned.jpeg',
	'/assets/headshots/new-batch/C97A0152-iconic-cleaned.jpeg',
	'/assets/headshots/new-batch/C97A0198-skars-cleaned.jpeg',
	'/assets/headshots/new-batch/C97A0330-walken-depp-cleaned.jpeg',
	'/assets/headshots/new-batch/C97A0300-theater-cleaned.jpg',
];

export default function Headshots() {
	return (
	<>
    	<img className={[styles.headshots_items, styles.serious_headshot].join(" ")}
			loading="lazy"
			src="/assets/headshots/new-batch/C97A0300-theater-cleaned.jpg"
			alt="Headshot Not Found"
			/>

			<img className={[styles.headshots_items, styles.seedy_headshot].join(" ")}
			loading="lazy"
			src="/assets/headshots/new-batch/C97A0330-walken-depp-cleaned.jpeg"
			alt="Headshot Not Found"
			/>

			<img className={[styles.headshots_items, styles.jeanjacket_headshot].join(" ")}
			loading="lazy"
			src="/assets/headshots/new-batch/C97A0152-iconic-cleaned.jpeg"
			alt="Headshot Not Found"
			/>

			<img className={[styles.headshots_items, styles.earnest_headshot].join(" ")}
			loading="lazy"
			src="/assets/headshots/will3.jpg"
			alt="Headshot Not Found"
			/>
	</>
	);
}
