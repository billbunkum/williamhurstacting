import styles from '@/styles/Home.module.css'

export default function SocialIcons() {
	return (
		<>
{/* CHILD OF <main> */}
		<div className={styles.socials_items}>
			<a 
			href="https://twitter.com/darkeyesdesign">
				<img src="/assets/socials/twitter-old-logo.png"
				className={[styles.social_logos, styles.twitter].join(" ")}
				/>
			</a>
			<a href="https://www.youtube.com/@williamhurstactor">
				<img src="/assets/socials/youtube-logo.png"
				className={[styles.social_logos, styles.youtube].join(" ")}
				/>
			</a>
			<a href="https://pro.imdb.com/name/nm12293482/?ref_=instant_nm_2&q=william%20hurst">
				<img src="/assets/socials/imdb-logo.png"
				className={[styles.social_logos, styles.imdb].join(" ")}
				/>
			</a>
			<a href="https://instagram.com/william_r_hurst">
				<img src="/assets/socials/instagram.png"
				className={[styles.social_logos, styles.ig].join(" ")}
				/>
			</a>
	</div>
	
		</>
	);
}
