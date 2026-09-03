import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function ActorBioFull() {
	return (
		<>
		<div className={styles.about_full_bio_container}>

			<div className={styles.about_intro}>
				<h4>About</h4>
				<p>William Hurst is a Los Angeles-based actor, writer, and producer with lead roles in numerous independent short films and experience in theater and musical theater.</p>
<p>He has trained extensively through the Professional Artists Workshop under Gary Imhoff and Kelly Meyersfield, with additional study in Michael Chekhov technique, stage combat, stunts, and improvisation.</p>
<p>His work spans both performance and content creation, including writing and producing the upcoming short film Needle in the Hay.</p>
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

		</div>
		</>
	);
}
