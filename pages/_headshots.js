import styles from '@/styles/Home.module.css'

export default function Headshots() {
	return (
	<>
		<div className={styles.headshots}>

    	<img className={styles.headshots_items}
			src="/assets/headshots/serious-straight-headshot.jpg"
			alt="Headshot Not Found"
			/>

			<img className={styles.headshots_items}
			src="/assets/headshots/jean-jacket.jpg"
			alt="Headshot Not Found"
			/>

			<img className={styles.headshots_items}
			src="/assets/headshots/earnest.jpg"
			alt="Headshot Not Found"
			/>

			<img className={styles.headshots_items}
			src="/assets/headshots/seedy-detective.png"
			alt="Headshot Not Found"
			/>
		</div>
	</>
	);
}
