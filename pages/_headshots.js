import styles from '@/styles/Home.module.css'

export default function Headshots() {
	return (
	<>
		<div className={styles.headshot_container}>

    	<img className={styles.headshot_image}
			src="/assets/headshots/serious-straight-headshot.jpg"
			alt="Headshot Not Found"
			/>

			<img className={styles.headshot_image}
			src="/assets/headshots/jean-jacket.jpg"
			alt="Headshot Not Found"
			/>

			<img className={styles.headshot_image}
			src="/assets/headshots/earnest.jpg"
			alt="Headshot Not Found"
			/>

			<img className={styles.headshot_image}
			src="/assets/headshots/seedy-detective.png"
			alt="Headshot Not Found"
			/>
		</div>
	</>
	);
}
