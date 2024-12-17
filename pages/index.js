import link from 'next/link'

import Head from 'next/head'
import Image from 'next/image'
import { Advent_Pro, Inter, Lexend } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import HeaderPart from './components/_header-part'

/*MY COMPONENTS*/
import BriefBio from './components/_brief-bio'
import BioImages from './components/_bio-images'
import Clips from './components/_clips'
import Headshots from './components/_headshots'
import Navigation from './components/_navigation'
import ReelComedic from './components/_reel-comedic'
import ReelDramatic from './components/_reel-dramatic'
import SocialIcons from './components/_social-icons'

{/*const inter = Inter({ subsets: ['latin'] })
const advent = Advent_Pro({ subsets: ['latin'] })*/}
const lexend = Lexend({ subsets: ['latin-ext'] });

export default function Home() {
  return (
 <>
{/* HEAD METADATA */}
	<HeaderPart />

{/* SET UP Styles AND Font */}
  <main className={`${styles.main} ${lexend.className}`}>
{/*    <main className={`${styles.main} ${inter.className}`}>*/}

{/*	PAGE TITLE */}
		<div className={styles.title}>
			<h1>William Hurst</h1>
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

{/* HEADSHOTS */}
		<div className={styles.headshots}>
			<Headshots />
		</div>

{/* FLAVOR TEXT FOR REELS */}
		<div className={styles.heading_text_container}>
			<h2>Actor Reels</h2>
		</div>

{/* REELS */}
		<div className={styles.reels_container}>
			<div className={styles.reels_side_reels}>
				<Clips />
				<ReelComedic />
				<ReelDramatic />
			</div>
		</div>

{/* ACTOR TYPE */}
		<div className={styles.heading_text_container}>
			<h2>Character Type</h2>
		</div>
		<div className={styles.brief_bio_container}>
			<BriefBio />
			<BioImages />
		</div>

{/* FOOTER LINKS */}
		<div className={styles.navigation}>
			<Navigation />
		</div>

  	</main>
  </>
  )
}
