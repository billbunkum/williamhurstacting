import styles from '@/styles/Home.module.css'

export default function Films() {
	return (
		<>
		<div className={styles.filmspage_films_container}>

			{/*Upcoming*/}
				<div className={styles.scene_work}>
					<h4>Upcoming</h4>
					<iframe 
						width="560" 
						height="315" 
						src="https://www.youtube.com/embed/videoseries?si=F3Eqhjqhtmj90UZ8&amp;list=PLhWPNW-JgaZMNXT11ZKwtqa1IWeWXifYc" 
						title="YouTube video player" 
						frameborder="0" 
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
						referrerpolicy="strict-origin-when-cross-origin" 
						allowfullscreen>
					</iframe>
				</div>

			{/*Class Training*/}
				<div className={styles.scene_work}>
					<h4>Class Training</h4>
					<iframe 
						width="560" 
						height="315" 
						src="https://www.youtube.com/embed/videoseries?si=M71k4E7IIg_0EIMV&amp;list=PLhWPNW-JgaZPAdmgR9LQNtIkeM-XMs0nP" 
						title="YouTube video player" 
						frameborder="0" 
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
						referrerpolicy="strict-origin-when-cross-origin" 
						allowfullscreen>
					</iframe>
				</div>

			{/*Anyone But Me*/}
				<div className={styles.weekly}>
					<h4>Anyone But Me (2024)</h4>
					<iframe 
						width="560" 
						height="315" 
						src="https://www.youtube.com/embed/videoseries?si=hdCAHWGo0icz6I44&amp;list=PLhWPNW-JgaZM0-7jhOaG_rrE1olATQU3L" 
						title="YouTube video player" 
						frameborder="0" 
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
						referrerpolicy="strict-origin-when-cross-origin" 
						allowfullscreen>
				</iframe>
				</div>

			{/*Nocturne*/}
			<div className={styles.nocturne}>
				<h4>Nocturne (2025)</h4>
				<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/6hWBWLbVWX0?si=Z4sltopHFP01HecS"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
				alt="Nocturne"
				>
				</iframe>
			</div>

			{/*The Startup*/}
				<div className={styles.scene_work}>
					<h4>The Startup (2018-2021)</h4>
					<iframe 
						width="560" 
						height="315" 
						src="https://www.youtube.com/embed/videoseries?si=VnIdMedgWgDHXqVN&amp;list=PLhWPNW-JgaZPPU8dFXVchYdGC-3bBrPFb" 
						title="YouTube video player" 
						frameborder="0" 
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
						referrerpolicy="strict-origin-when-cross-origin" 
						allowfullscreen>
					</iframe>
				</div>

			{/*Wendell Watkins is Falling*/}
			<div className={styles.wwif_film}>
				<h4>Wendell Watkins is Falling (2023)</h4>
				<iframe 
					loading="lazy"
					width="560" 
					height="315"
					src="https://www.youtube.com/embed/DXAifQUVQGY?si=4MEVSt9_s2n6PExF" 
					title="YouTube video player" 
					frameborder="0" 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>

			{/*Fast Food*/}


			{/*King of Cribbage*/}
			<div className={styles.king_of_cribbage_film}>
				<h4>King of Cribbage</h4>
				<iframe 
					loading="lazy"
					width="560" height="315" src="https://www.youtube.com/embed/5Z12AR_Imtc?si=sy_otL7PSl3xR-Xs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>

			{/*100 Years of the Kentucky Theatre*/}
			<div className={styles.hundred_years_film}>
				<h4>100 Years of the Ky Theatre</h4>
				<iframe
					loading="lazy"
					width="560" 
					height="315" 
					src="https://www.youtube.com/embed/XigzIsAq08c?si=elt88bHPd3p6gQM-" 
					title="YouTube video player" 
					frameborder="0" 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
					allowfullscreen
					>
				</iframe>
			</div>

			{/*The Chronometry Device*/}
			<div className={styles.the_chronometry_device_film}>
				<h4>The Chronometry Device (2022)</h4>
				<iframe
					loading="lazy"
					width="560" 
					height="315" 
					src="https://www.youtube.com/embed/NacxZfmlCYs?si=q65FglTue7q3-gjl" 
					title="YouTube video player" 
					frameborder="0" 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
					referrerpolicy="strict-origin-when-cross-origin" 
					allowfullscreen
					alt="The Chronometry Device"
				>
				</iframe>
			</div>

			{/*The Biz*/}
			<div className={styles.the_biz_film}>
				<h4>The Biz (2018)</h4>
				<iframe
					loading="lazy"
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


		</div>
		</>
	);
}
