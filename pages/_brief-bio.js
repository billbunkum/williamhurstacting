import styles from '@/styles/Home.module.css'

export default function BriefBio() {
	return (
		<>
			<div className={styles.brief_bio_text}>
				<h2>Character Type</h2>	
				<p>William exels at playing the nerdy love interest,
quirky office worker, or the brooding antihero,
conniving villain, or sardonic gameshow host.
				</p>
{/*
				<img
					src="/assets/other-pics/troubled-man-sitting.jpg"
					className={styles.brief_bio_text__troubled_man}
					alt="troubled man"
				 />
*/}
			</div>
		</>
	);
}
