import styles from '@/styles/Home.module.css'

const headshots = {
	'bad_dude': '/assets/headshots/new-batch/C97A0393-badDude.jpeg',
	'melancholy': '/assets/headshots/melancholy-apr2024-1.jpeg',
	'serious_straight': '/assets/headshots/serious-straight-headshot.jpg',
	'will': '/assets/headshots/wil1.jpg',
	'seedy_detective': '/assets/headshots/seedy-detective.png',
	'jean_jacket_smiling': '/assets/headshots/jean-jacket-smiling.jpg',
	'will2': '/assets/headshots/will2.jpg',
	'goofy_2024': '/assets/headshots/goofy-2024.jpg',
	'will3': '/assets/headshots/will3.jpg',
	'casual_smiling': '/assets/headshots/new-batch/C97A0048-cleaned.jpeg',
	'iconic': '/assets/headshots/new-batch/C97A0152-iconic-cleaned.jpeg',
	'skars': '/assets/headshots/new-batch/C97A0198-skars-cleaned.jpeg',
	'walken': '/assets/headshots/new-batch/C97A0330-walken-depp-cleaned.jpeg',
	'theater': '/assets/headshots/new-batch/C97A0300-theater-cleaned.jpg',
};

const other_pics = {
	'koc_radio': '/assets/other-pics/king-of-cribbage-radioshow.png',
	'chrono_flabberghast': '/assets/other-pics/the-chrono-device-earnest.png',
	'vasha_angry_man': '/assets/other-pics/angry-man-pointing.jpeg'
};

export default function Headshots() {
	return (
	<>
    	<img className={[styles.headshots_items, styles.seedy_headshot].join(" ")}
			loading="lazy"
			src={headshots.skars}
			alt="Headshot Not Found"
			/>

			<img className={[styles.headshots_items, styles.earnest_headshot].join(" ")}
			loading="lazy"
			src={headshots.walken}
			alt="Headshot Not Found"
			/>
{/*
			<img className={[styles.headshots_items, styles.jeanjacket_headshot].join(" ")}
			loading="lazy"
			src={headshots.iconic}
			alt="Headshot Not Found"
			/>
*/}
			<img className={[styles.headshots_items, styles.serious_headshot].join(" ")}
			loading="lazy"
			src={headshots.bad_dude}
			alt="Headshot Not Found"
			/>

	</>
	);
}
