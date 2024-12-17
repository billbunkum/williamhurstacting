import styles from '@/styles/Home.module.css'

export default function Clips() {
	return (
		<>
		<div className={styles.container__reel}>
			<iframe 
			loading="lazy"
			src="https://youtube.com/embed/2UuZFQaqOoo?si=et-VvQNdcBkUBKc_"
			title="YouTube video player" 
			frameBorder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
			allowFullScreen>
			</iframe>
		</div>

		<div className={styles.container__reel}>
			<iframe 
			loading="lazy"
			src="https://youtube.com/embed/kii9gtBUsoY?si=3KQh9nTLhktlsOcD"
			title="YouTube video player" 
			frameBorder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
			allowFullScreen>
			</iframe>
		</div>

		</>
	);
}
