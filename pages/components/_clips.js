import styles from '@/styles/Home.module.css'

const clip_URLs = {
	'broken_man': 'https://www.youtube.com/embed/4d2QHUhXi70?si=IgUg-EazoSBE7NfP',
	'new_girl': 'https://youtube.com/embed/2UuZFQaqOoo?si=et-VvQNdcBkUBKc_',
	'tony_stark': 'https://youtube.com/embed/kii9gtBUsoY?si=3KQh9nTLhktlsOcD',
	'too_french': 'https://www.youtube.com/embed/Q9e1GaFoxak?si=Z4SEgtYpbouvF4s4',
	'evil_monologue': 'https://www.youtube.com/embed/PBqsXRlgN2A?si=B4QmLepAWLv3Bo1s',
	'ironic_sheriff': 'https://www.youtube.com/embed/2SZRT1refzo?si=QkjfYkuRcYXSYzDy',
};

export default function Clips() {
	return (
		<>

		{/*CLIP Too French Boss - Sillitide*/}
		<div className={styles.container__reel}>
			<iframe 
			loading="lazy"
			src={clip_URLs.too_french}
			title="YouTube video player" 
			frameBorder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
			allowFullScreen>
			</iframe>
		</div>

		{/*CLIP Evil Monologue*/}
		<div className={styles.container__reel}>
			<iframe 
			loading="lazy"
			src={clip_URLs.evil_monologue}
			title="YouTube video player" 
			frameBorder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
			allowFullScreen>
			</iframe>
		</div>

		{/*CLIP Broken Man NitH*/}
		<div className={styles.container__reel}>
			<iframe 
			loading="lazy"
			src={clip_URLs.broken_man}
			title="YouTube video player" 
			frameBorder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
			allowFullScreen>
			</iframe>
		</div>

		{/*CLIP KoC - Ironic Sheriff*/}
		<div className={styles.container__reel}>
			<iframe 
			loading="lazy"
			src={clip_URLs.ironic_sheriff}
			title="YouTube video player" 
			frameBorder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
			allowFullScreen>
			</iframe>
		</div>

		{/*CLIP New Girl*/}
		<div className={styles.container__reel}>
			<iframe 
			loading="lazy"
			src={clip_URLs.new_girl}
			title="YouTube video player" 
			frameBorder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
			allowFullScreen>
			</iframe>
		</div>

		{/*CLIP Tony Stark*/}
		<div className={styles.container__reel}>
			<iframe 
			loading="lazy"
			src={clip_URLs.tony_stark}
			title="YouTube video player" 
			frameBorder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
			allowFullScreen>
			</iframe>
		</div>

		</>
	);
}
