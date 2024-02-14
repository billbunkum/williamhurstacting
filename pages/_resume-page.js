import styles from '@/styles/Home.module.css'
import { Advent_Pro, Inter, Lexend } from 'next/font/google'

import HeaderPart from './components/_header-part'

import Navigation from './components/_navigation'
import Resume from './components/_resume'
import SocialIcons from './components/_social-icons'

const lexend = Lexend({ subsets: ['latin-ext'] });

export default function ResumePage() {
	return (
		<>
			<HeaderPart />

			{/* SET UP Styles AND Font */}
  		<main className={`${styles.main} ${lexend.className}`}>

			{/*	PAGE TITLE */}
				<div className={styles.title}>
					<h1>Resume</h1>
					<h4>William Hurst</h4>
				</div>
				<hr />

			{/* NAVIGATION */}
				<div className={styles.navigation}>
		  		<Navigation />
				</div>

			{/* SOCIALS */}
				<div className={styles.socials_container}>
					<SocialIcons />
				</div>

			{/* RESUME / MEASUREMENTS */}
				<Resume />

			{/* FOOTER LINKS */}
				<div className={styles.navigation}>
					<Navigation />
				</div>

			</main>
		</>
	);
}
