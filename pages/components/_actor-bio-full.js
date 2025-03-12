import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function ActorBioFull() {
	return (
		<>
		<div className={styles.about_full_bio_container}>

			<div className={styles.about_intro}>
				<h4>About</h4>
				<p>William Hurst is a professional actor living in Los Angeles, CA.
He is currently in pre-production of a Short Film:</p>	
				<Link 
					className={styles.film_link}
					href="https://needleinthehayfilm.com">"Needle in the Hay"
				</Link>
				<p>William also creates Weekly Short Films, and consistently puts up scenes in acting class.
				</p>
				<p>Before moving to LA, William trained Michael Chekhov with the Greater Lakes Michael Chekhov Consortium. 
His acting career began in Kentucky and China with musical productions and community theater before moving on to live steel, improv shows with Ulfhedinn Viking Entertainment. 
			 	</p> 
			</div>

			<div className={styles.about_charactertype}>
				<h4>Type</h4>
				<p>William plays both comedic and dramatic roles from the geeky love interest and cocksure billionaire to the loner hacker, brooding antihero or  conniving villain.</p>
			</div>

			<div className={styles.about_experience}>
				<h4>Experience</h4>
				<p>William has acted in both Lead and Supporting roles in award-winning short films, film projects such as the 48 Hour Film Festival, and in theatrical projects local to Kentucky.
				</p>
				<p>He currently stars in, writes, directs, and edits his own Weekly Short Films, and he is pursuing all ways to improve his craft and create amazing art through Acting.
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
