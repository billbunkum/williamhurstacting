import styles from '@/styles/Home.module.css'

export default function Scenes() {
	return (
		<>
			<div className={styles.scenes_page_scenes_container}>
				{/*Thy Will Be Done*/}
				<div className={styles.thy_will_be_done_scene}>
					<h4>Thy Will Be Done (2024)</h4>	
{/*<!--src="https://www.youtube.com/embed/1X9-4FqLXII?si=hrLLi4-Bk343Ph2S" 
ORIGINAL VERSION -->*/}
					<iframe 
						loading="lazy"
						width="560" 
						height="315"
						src="https://www.youtube.com/embed/p8zErUBe_N8?si=R0oSFTtJN_FYEZkv"
						title="YouTube video player" 
						frameborder="0" 
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
						referrerpolicy="strict-origin-when-cross-origin" 
						allowfullscreen
					>
					</iframe>
				</div>

				{/* THE NOTEBOOK */}
				<div className={styles.the_notebook_monologue}>
					<h4>The Notebook (2024)</h4>	
					<iframe 
						loading="lazy"
						width="560" 
						height="315"
						src="https://www.youtube.com/embed/cy2TO0rIELo?si=1AkAcSZSxum_DCWF" 
						title="YouTube video player" 
						frameborder="0" 
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
						referrerpolicy="strict-origin-when-cross-origin" 
						allowfullscreen
					>
					</iframe>
				</div>

				{/* MacBeth TOMORROW TOMORROW*/}
				<div className={styles.macbeth_monologue}>
					<h4>MacBeth</h4>
					<iframe
						width="560" 
						height="315" 
						src="https://www.youtube.com/embed/eRAcUvyHh8g?si=1Zuzamxn1U2pLjvJ" 
						title="YouTube video player" 
						frameborder="0" 
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
						referrerpolicy="strict-origin-when-cross-origin" 
						allowfullscreen>
					</iframe>
				</div>

				{/* GOODBYE CHARLES */}
				<div className={styles.goodbye_charles_monologue}>
					<h4>Goodbye Charles</h4>
					<iframe 
						width="560" 
						height="315" 
						src="https://www.youtube.com/embed/RKpeT5sr_gg?si=f5vFQvOmf36_5ntQ" 
						title="YouTube video player" 
						frameborder="0" 
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
						referrerpolicy="strict-origin-when-cross-origin" 
						allowfullscreen>
					</iframe>
				</div>

			</div>
		</>
	);
}
