import styles from '@/styles/Home.module.css'
import { Advent_Pro, Inter, Lexend } from 'next/font/google'

import HeaderPart from './components/_header-part'

import BriefBio from './components/_brief-bio'
import BioImages from './components/_bio-images'
import Navigation from './components/_navigation'
import Films from './components/_Films'
import ReelComedic from './components/_reel-comedic'
import ReelDramatic from './components/_reel-dramatic'
import ReelFull from './components/_reel-full'
import SocialIcons from './components/_social-icons'

const lexend = Lexend({ subsets: ['latin-ext'] });

export default function FilmsPage() {
	return (
		<>
			<HeaderPart />

			{/* SET UP Styles AND Font */}
  		<main className={`${styles.main} ${lexend.className}`}>

			{/*	PAGE TITLE */}
				<div className={styles.title}>
					<h1>Projects</h1>
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

			{/* FILMS */}
				<Films />

			{/* FOOTER LINKS */}
				<div className={styles.navigation}>
					<Navigation />
				</div>

			</main>
		</>
	);
}
