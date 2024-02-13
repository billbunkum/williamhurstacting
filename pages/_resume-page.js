import styles from '@/styles/Home.module.css'
import Resume from './_resume'

export default function ResumePage() {
	return (
		<>
		{/* RESUME / MEASUREMENTS */}
		<div className={styles.resume_field}>
			<Resume />
		</div>

		</>
	);
}
