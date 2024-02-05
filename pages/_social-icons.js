import styles from '@/styles/Home.module.css'

export default function SocialIcons() {
	return (
		<>
{/* CHILD OF <main> */}
		<div className={styles.header_socials}>
			<a 
			href="https://twitter.com/darkeyesdesign">
				<img src="/assets/socials/twitter-old-logo.png"
			 	className={styles.header_socials_image}
				/>
			</a>
			<a href="https://www.youtube.com/@william_r_hurst">
				<img src="/assets/socials/youtube-logo.png"
			 	className={styles.header_socials_image}
				/>
			</a>
			<a href="https://pro.imdb.com/name/nm12293482/?ref_=instant_nm_2&q=william%20hurst">
				<img src="/assets/socials/imdb-logo.png"
			 	className={styles.header_socials_image}
				/>
			</a>
	</div>
	
		</>
	);
}
