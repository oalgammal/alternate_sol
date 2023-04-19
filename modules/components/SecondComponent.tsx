import React from 'react'
import Image from 'next/image'
import styles from '@/styles/SecondComponent.module.css'
import ImageGallery from 'react-image-gallery'

const images = [
	{
		thumbnail: '/gallery1.svg',
		originalWidth: 0,
		originalClass:'orig',
		original: '/gallery1.svg',
		originalHeight:0,
	},
	{
		originalHeight: 0,
		originalWidth:0,
		original: '/gallery2.svg',
		thumbnail: '/gallery2.svg',
	},
	{
		originalHeight:0,
		originalWidth:0,
		original: '/gallery3.svg',
		thumbnail: '/gallery3.svg',
	},
	{
		originalWidth:0,
		originalHeight:0,
		original: '/gallery4.svg',
		thumbnail: '/gallery4.svg',
	},
]



const SecondComponent = () => {
	
	React.useEffect(() => {
		
		const slider = document.getElementsByClassName(
			'image-gallery-slide-wrapper'
		)
		const gallery = document.getElementsByClassName(
			'image-gallery-thumbnails-wrapper'
		)
		const parent = slider[0].parentNode
		parent?.insertBefore(gallery[0], slider[0])
			
	})
	return (
		<div className={styles.container}>
			
			<Image
				src='/page2.svg'
				fill={true}
				style={{ objectFit: 'cover' }}
				alt='mount'
			/>
			<div className={styles.textContainer}>
				<div className={styles.titleContainer}>
					<div className={styles.number}>01.</div>
					<div className={styles.title}>HISTORY</div>
				</div>
				<div className={styles.content}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante
					viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est.
					Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras
					scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis
					hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec
					congue.
				</div>
			</div>
			<div className={styles.footer}>
				<div className={styles.galleryContainer}>
					<ImageGallery
						infinite={true}
						useBrowserFullscreen={false}
						showBullets={true}
						showPlayButton={false}
						showNav={false}
						swipeThreshold={1}
						disableThumbnailScroll={true}
						showFullscreenButton={false}
						items={images}
					/>
				</div>
			</div>
		</div>
	)
}

export default SecondComponent
