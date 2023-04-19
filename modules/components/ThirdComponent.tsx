import React from 'react'
import Image from 'next/image'
import styles from '@/styles/ThirdComponent.module.css'
import { useRouter } from 'next/router'





const ThirdComponent = () => {
	const[active,setActive]=React.useState(1)

	return (
		<div className={styles.container}>
			<div className={styles.topFlex}>
			
				<div className={styles.textContainer}>
					<div className={styles.titleContainer}>
						<div className={styles.number}>02.</div>
						<div className={styles.title}>CLIMB</div>
					</div>
					<div className={styles.content}>
						Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
						gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
						dignissim tortor nec congue.
					</div>
				</div>
				<div className={styles.tabs}>
					<button
						onClick={() => {
							setActive(1)
						}}
						className={active === 1 ? styles.tabActive : styles.tabInactive}
					>
						MOUNTAIN 1
					</button>
					<button
						onClick={() => {
							setActive(2)
						}}
						className={active === 2 ? styles.tabActive : styles.tabInactive}
					>
						MOUNTAIN 2
					</button>
				</div>
			</div>
			<div className={styles.calenderCard}>
				<div className={styles.calTitle}>SCHEDULE</div>
				<div className={styles.calEntry}>
					<div>28 Nov 2016</div>
					<div>Vestibulum viverra</div>
				</div>
				<div className={styles.calEntry}>
					<div>25 Nov 2016</div>
					<div>Vestibulum viverra</div>
				</div>
				<div className={styles.calEntry}>
					<div>24 Nov 2016</div>
					<div>Vestibulum viverra</div>
				</div>
				<div className={styles.calEntry}>
					<div>22 Nov 2016</div>
					<div>Vestibulum viverra</div>
				</div>
			</div>
			<Image
				src='/page3.svg'
				fill={true}
				style={{ objectFit: 'cover' }}
				alt='mount'
			/>
			<div className={styles.footer}>
				<div>
					<Image
						style={{ mixBlendMode: 'plus-lighter', opacity: 0.5 }}
						width={164}
						height={43}
						src='/Logo.svg'
						alt='logo'
					/>
				</div>
				<div className={styles.buttonContainer}>
					COPYRIGHT 2016. ALL RIGHTS RESERVED.
				</div>
			</div>
		</div>
	)
}

export default ThirdComponent
