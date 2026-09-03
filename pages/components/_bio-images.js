import styles from '@/styles/Home.module.css'

const characterImages = {
	'kennedy': '/assets/other-pics/clueless-love-interest-goodbyecharles.png',
	'theBiz': '/assets/other-pics/confident-villain-thebiz.jpg',
	'wwif_arthur': '/assets/other-pics/matter-of-fact-wwif-arthur.jpg',
	'macbeth': '/assets/other-pics/ennui-macbeth.png',
	'oneHundred_years': '/assets/other-pics/100-years-headshot-uncertain.png',
	'koc_radioshow': '/assets/other-pics/king-of-cribbage-radioshow.png',
	'koc_flummoxed': '/assets/other-pics/king-of-cribbage-flummoxed.png',
};

export default function BioImages() {
	return ( 
		<>
			<div className={styles.brief_bio__bio_images}>
				<img
					loading="lazy"
					src={characterImages.kennedy}
					className={styles.love_interest}
					alt="kennedy"
				/>

				<img
					loading="lazy"
					src={characterImages.theBiz}
					className={styles.confident_villain_thebiz}
					alt="CEO"
				/>

				<img
					loading="lazy"
					src={characterImages.wwif_arthur}
					className={styles.arthur}
					alt="arthur"
				/>

				<img
					loading="lazy"
					src={characterImages.macbeth}
					className={styles.ennui_macbeth}
					alt="macbeth"
				/>

				<img
					loading="lazy"
					src={characterImages.oneHundred_years}
					className={styles.hundred_years_uncertain}
					alt="100 Years headshot"
				/>

				<img
					loading="lazy"
					src={characterImages.koc_radioshow}
					className={styles.king_of_cribbage_snarky}
					alt="King of Cribbage snarky headshot"
				/>

				<img
					loading="lazy"
					src={characterImages.koc_flummoxed}
					className={styles.king_of_cribbage_flummoxed}
					alt="King of Cribbage flummoxed headshot"
				/>

			</div>
		</>
	);
}
