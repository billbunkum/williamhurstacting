import styles from '@/styles/Home.module.css'

export default function Resume() {
	return (
		<>
			<div className={styles.resume_field}>
				<img 
				loading="lazy"
				src="/assets/resume/actorResume-031225.png" 
				className={styles.resume_image}
				alt="Actor Resume here"
				/>
			</div>
		</>
	);
}
