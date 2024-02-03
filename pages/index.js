import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Bio from './_bio'
import dreadloreWebsite from './globals/_urls'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>William Hurst Acting</title>
      <meta name="description" content="NextJS App" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
		</Head>

{/* HEADER */}
    <main className={`${styles.main} ${inter.className}`}>
		<div className={styles.header_grid}>
	  	<a href="#">Home</a>
	  	<a href="https://vimeo.com/williamrichardhurst">Reel</a>
	  	<a href="#">Resume</a>
	  	<a href="#">Contact</a>
			<a href="#">IMDB</a>
	  	<a href="#">Twitter</a>
		</div>
		<div className={styles.header_socials}>
			<a href="#"></a>
			<a href="#"></a>
			<a href="#"></a>
		</div>

{/* CONTENT */}
   	<div className={styles.description}>
    	<p>
				<img src="/assets/set-shot-122431.jpeg"
				className={styles.header_image}
				/>
			</p>
    </div>

{/* CENTER IMAGE */}
		{/*<div className={styles.center}>*/}
		<div className={styles.content_grid}>
			<Bio />
		</div>

{/* STYLES GRID - LATERAL */}
    <div className={styles.grid}>
    	<a 
			href={dreadloreWebsite}
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
      >
      	<h2>YouTube <span>-&gt;</span>
					</h2>
      	<p>Projects
      		</p>
      </a>

      <a
     	href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
      >
      	<h2>Learn <span>-&gt;</span>
	        </h2>
        <p>Learn about Next.js in an interactive course with&nbsp;quizzes!
  				</p>
      </a>

      <a
      href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
      >
        <h2>Templates <span>-&gt;</span>
          </h2>
        <p>Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
      </a>

      <a
      href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
      >
      	<h2>
        Deploy <span>-&gt;</span>
        </h2>
        <p>Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel.
          </p>
      </a>
    </div>
  </main>
  </>
  )
}
