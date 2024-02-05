import styles from '@/styles/Home.module.css'

export default function Navigation() {
	return (
		<>
{/*CHILD OF <main>*/}
			<div className={styles.navigation_items}>
	  		<a href="#">HOME</a>
	  		<a href="https://vimeo.com/williamrichardhurst">REEL</a>
	  		<a href="#">RESUME</a>
	  		<a href="#">CONTACT</a>
				<a href="#">ABOUT</a>
				<a href="#">PROJECTS</a>
			</div>
		</>
	);
}
