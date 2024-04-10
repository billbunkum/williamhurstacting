import styles from '@/styles/Home.module.css'

export default function ActorBioFull() {
	return (
		<>
		<div className={styles.about_full_bio_container}>

			<div className={styles.about_intro}>
				<h4>About</h4>
				<p>William Hurst is a professional Actor and Voice Actor. He is a Kentucky native now living in Los Angeles, CA.
			 	</p> 
			</div>

			<div className={styles.about_charactertype}>
				<h4>Type</h4>
				<p>William excels at playing the loner hacker, geeky love interest, brooding antihero, conniving villain, and silly gameshow host.
He enjoys both dramatic and comedic roles and can perform a wide range of emotions and character ages.
			 	</p>
				<p>As a Voice Actor, he excels at youthful heroes, geeky sidekicks, and deadly and over-serious villains.
			 	</p>
			</div>

			<div className={styles.about_experience}>
				<h4>Experience</h4>
				<p>William has acted in both Lead and Supporting roles in award-winning short films, film projects such as the 48 Hour Film Festival, and in theatrical projects local to Kentucky.
				</p>
			</div>

			<div className={styles.about_history}>
				<h4>History</h4>
				<p>William studied Digital Media at the University of Kentucky. He lived in China for several years studying Chinese and getting into adventures.
				</p>
				<p> While traveling, he began his professional acting career as well as started writing and directing short films and web series.
				</p>
			</div>
		</div>
		</>
	);
}
