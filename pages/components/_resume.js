import styles from '@/styles/Home.module.css'

export default function Resume() {
	return (
		<>
			<div className={styles.resume_field}>
				<img 
				src="/assets/resume/actorResume-020424.png" 
				className={styles.resume_image}
				alt="Actor Resume here"
				/>
			</div>
		</>
	);
}
