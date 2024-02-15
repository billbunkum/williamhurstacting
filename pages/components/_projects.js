import styles from '@/styles/Home.module.css'

export default function Projects() {
	return (
		<>
		<div className={styles.projectspage_projects_container}>
			<h4>Nocturne (2024)</h4>
			{/*Nocturne*/}
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/fX_eVzZflXE?si=vtbMgybyGy5_rM5i" 				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
				alt="Nocturne"
				>
			</iframe>

			{/*Wendell Watkins is Falling*/}
			{/*King of Cribbage*/}
			{/*100 Years of the Kentucky Theatre*/}

			{/*The Startup web series*/}
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

			{/*The Chronometry Device*/}


			{/*The Biz*/}
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
		</>
	);
}
