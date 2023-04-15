import React from 'react'
import Image from 'next/image'
import styles from '@/styles/FirstComponent.module.css'

interface props{
  setCurrentPage:any
}
const FirstComponent:React.FC<props> = ({setCurrentPage}) => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div>
					<Image width={164} height={43} src='/smallLogo.svg' alt='logo' />
				</div>
				<div className={styles.buttonContainer}>
					<button
						onClick={() => {
							setCurrentPage(1)
						}}
						className={styles.linkButton}
					>
						01. HISTORY
					</button>
					<button
						onClick={() => {
							setCurrentPage(2)
						}}
						className={styles.linkButton}
					>
						02. TEAM
					</button>
				</div>
			</div>
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
