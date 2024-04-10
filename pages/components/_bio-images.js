import styles from '@/styles/Home.module.css'

export default function BioImages() {
	return ( 
		<>
			<div className={styles.brief_bio__bio_images}>

				<a href="https://youtu.be/RKpeT5sr_gg"
				title="'Goodbye Charles' monologue"
				alt="'Goodbye Charles' monologue"
				>
					<img
					loading="lazy"
					src="/assets/other-pics/clueless-love-interest-goodbyecharles.png"
					className={styles.love_interest}
					alt="kennedy"
			 		/>
				</a>

				<a href="https://youtu.be/CSVoff1o-vY"
				title="'The Biz' short film"
				alt="'The Biz' short film"
				>
					<img
					loading="lazy"
					src="/assets/other-pics/confident-villain-thebiz.jpg"
					className={styles.confident_villain_thebiz}
					alt="CEO"
			 		/>
				</a>

				<a href="https://youtu.be/DXAifQUVQGY"
				title="'Wendell Watkins is Falling' short film"
				alt="'Wendell Watkins is Falling' short film"
				>
					<img
					loading="lazy"
					src="/assets/other-pics/matter-of-fact-wwif-arthur.jpg"
					className={styles.arthur}
					alt="arthur"
				 	/>
				</a>

				<a href="https://youtu.be/eRAcUvyHh8g"
				title="'Tomorrow, tomorrow and tomorrow' Macbeth monologue"
				alt="'Tomorrow, tomorrow and tomorrow' Macbeth monologue"
				>
					<img
					loading="lazy"
					src="/assets/other-pics/ennui-macbeth.png"
					className={styles.ennui_macbeth}
					alt="macbeth"
				 	/>
				</a>

				<a href="https://youtu.be/XigzIsAq08c"
				title="'100 Years of the KY Theatre' short film"
				alt="'100 Years of the KY Theatre' short film"
				>
					<img
					loading="lazy"
					src="/assets/other-pics/100-years-headshot-uncertain.png"
					className={styles.hundred_years_uncertain}
					alt="100 Years headshot"
				 	/>
				</a>
{/*
				<a href="https://youtu.be/5Z12AR_Imtc"
				title="'King of Cribbage' short film"
				alt="'King of Cribbage' short film"
				>
					<img
					loading="lazy"
					src="/assets/other-pics/king-of-cribbage-radioshow.png"
					className={styles.king_of_cribbage_snarky}
					alt="King of Cribbage snarky headshot"
				 	/>
				</a>
*/}
				<a href="https://youtu.be/5Z12AR_Imtc"
				title="'King of Cribbage' short film"
				alt="'King of Cribbage' short film"
				>
					<img
					loading="lazy"
					src="/assets/other-pics/king-of-cribbage-flummoxed.png"
					className={styles.king_of_cribbage_flummoxed}
					alt="King of Cribbage flummoxed headshot"
				 	/>
				</a>

			</div>
		</>
	);
}
