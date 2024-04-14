import styles from '@/styles/Home.module.css'

export default function Scenes() {
	return (
		<>
			<div>
				{/*Thy Will Be Done*/}
				<div className={styles.thy_will_be_done}>
					<h4>Thy Will Be Done (2024)</h4>	
					<iframe 
						loading="lazy"
						width="560" 
						height="315"
						src="https://www.youtube.com/embed/1X9-4FqLXII?si=hrLLi4-Bk343Ph2S" 
						title="YouTube video player" 
						frameborder="0" 
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
						referrerpolicy="strict-origin-when-cross-origin" 
						allowfullscreen
					>
					</iframe>
				</div>

				{/* THE NOTEBOOK */}

			</div>
		</>
	);
}
