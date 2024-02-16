import link from 'next/link'

import Head from 'next/head'
import Image from 'next/image'
import { Advent_Pro, Inter, Lexend } from 'next/font/google'
import styles from '@/styles/Home.module.css'

export default function HeaderPart() {
	return (
		<>
		<Head>
  		<title>William Hurst Actor</title>
    	<meta name="description" content="NextJS App" />
    	<meta name="viewport" content="width=device-width, initial-scale=1" />
    	<link rel="icon" href="/favicon.ico" />
   	</Head>
		</>
	);
}
