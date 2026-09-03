import styles from '@/styles/Home.module.css'

const resume = '/assets/resume/';

export default function Resume() {
	return (
		<>
			<div className={styles.resume_field}>
				<picture>
					<source
						srcSet={`${resume}actorResume-062626-sm.webp`}
						type="image/webp"
					/>
					<img
						src={`${resume}actorResume-062626.sm.webp`}
						alt="William Hurst Resume"
						loading="lazy"
						decoding="async"
					/>
				</picture>
			</div>
		</>
	);
}
