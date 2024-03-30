import styles from '@/styles/Home.module.css'

export default function Projects() {
	return (
		<>
		<div className={styles.projectspage_projects_container}>

			{/*Nocturne*/}
{/*			<div className={styles.nocturne}>
				<h4>Nocturne (2024)</h4>
				<iframe
				width="560"
				height="315"
				src="#" 				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
				alt="Nocturne"
				>
				</iframe>
			</div>
*/}
			{/*Wendell Watkins is Falling*/}
			<div className={styles.wwif}>
				<h4>Wendell Watkins is Falling (2023)</h4>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/DXAifQUVQGY?si=4MEVSt9_s2n6PExF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>

			{/*Fast Food*/}


			{/*King of Cribbage*/}
			<div className={styles.king_of_cribbage}>
				<h4>King of Cribbage</h4>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/5Z12AR_Imtc?si=sy_otL7PSl3xR-Xs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>

			{/*100 Years of the Kentucky Theatre*/}
			<div className={styles.hundred_years}>
				<h4>100 Years of the Kentucky Theatre</h4>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/XigzIsAq08c?si=elt88bHPd3p6gQM-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>

			{/*The Startup web series*/}
			<div className={styles.the_startup}>
				<h4>The Startup (2018-Present)</h4>
				<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/videoseries?si=OZaYS3pBqqiRqOw4&amp;list=PLkrxW47EGm07km5nzNC2ko4mGQ4pTTI3v"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
				alt="The Startup web series"
				>
				</iframe>
			</div>
			{/*The Chronometry Device*/}


			{/*The Biz*/}
			<div className={styles.the_biz}>
				<h4>The Biz (2018)</h4>
				<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/vToNdyuSoAs?si=GoOLOYISeY0E_kn5" 				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
				alt="The Biz"
				>
				</iframe>
			</div>

			{/*Thy Will Be Done*/}
			<div className={styles.thy_will_be_done}>
				<h4>Thy Will Be Done (2024)</h4>	
				<iframe 
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
		</div>
		</>
	);
}
