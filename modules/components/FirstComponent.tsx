import React from 'react'
import Image from 'next/image'
import styles from '@/styles/FirstComponent.module.css'
import { useRouter } from 'next/router'


const FirstComponent = () => {
	return (
		<div className={styles.container}>
		
			<Image
				src='/page1.svg'
				fill={true}
				className={styles.firstImage}
				style={{ objectFit: 'cover' }}
				alt='frost'
			/>
		</div>
	)
}

export default FirstComponent
