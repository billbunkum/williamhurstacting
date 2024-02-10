import styles from '@/styles/Home.module.css'

export default function BioImages() {
	return ( 
		<>
			<div className={styles.brief_bio__bio_images}>
				<img
					src="/assets/other-pics/clueless-love-interest-goodbyecharles.png"
					className={styles.love_interest}
					alt="kennedy"
			 	/>
				<img
					src="/assets/other-pics/confident-villain-thebiz.jpg"
					className={styles.confident_villain_thebiz}
					alt="CEO"
			 	/>
				<img
					src="/assets/other-pics/matter-of-fact-wwif-arthur.jpg"
					className={styles.arthur}
					alt="arthur"
				 />
{/*
				<img
					src="/assets/other-pics/troubled-man-sitting.jpg"
					className={styles.trouble_man}
					alt="troubled man"
				 />
*/}
{/*
				<img
					src="/assets/other-pics/ennui-macbeth.png"
					className={styles.ennui_macbeth}
					alt="macbeth"
				 />
*/}
			</div>
		</>
	);
}
