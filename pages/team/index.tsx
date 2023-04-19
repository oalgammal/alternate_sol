import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import Fullpage from './components/FullPage'
import ThirdComponent from '../../modules/components/ThirdComponent'

import dynamic from 'next/dynamic'


const inter = Inter({ subsets: ['latin'] })

export default function History() {
	return (
		<>
			<main className={styles.main}>
				<ThirdComponent />
			</main>
		</>
	)
}
