import React from 'react'
import Image from 'next/image'
import styles from '@/styles/TopHeader.module.css'
import { useRouter } from 'next/router'

const homeProps = {
  imageLink: '/smallLogo.svg',
  firstText: '01. HISTORY',
  firstLink: '/history',
  secondText: '02. TEAM',
  secondLink: '/team',
  color: 'rgb(255,255,255)',
  border: '1.5px solid white',
}
const historyProps = {
  imageLink: '/Logo.svg',
  firstText: '01. HOME',
  firstLink: '/',
  secondText: '02. TEAM',
  secondLink: '/team',
  color: 'rgb(65,79,107)',
  border: '1.5px solid rgb(65,79,107)',
}
const teamProps = {
  imageLink: '/Logo.svg',
  firstText: '01. HOME',
  firstLink: '/',
  secondText: '02. HISTORY',
  secondLink: '/history',
  color: 'rgb(65,79,107)',
  border: '1.5px solid rgb(65,79,107)',
}
const TopHeader = () => {
  
  const router = useRouter()
  const [currentPage,setCurrentPage]=React.useState(homeProps)

  React.useEffect(() => {
    switch (router.pathname) {
      case '/history':
        setCurrentPage(historyProps)
        break;
      case '/team':
        setCurrentPage(teamProps)
        break;
      default: setCurrentPage(homeProps)
    }
  },[router.pathname])
	
	return (
		<div className={styles.header}>
			<div>
				<Image width={164} height={43} src={currentPage.imageLink} alt='logo' />
			</div>
			<div className={styles.buttonContainer}>
				<button
					type='button'
					style={{ color: currentPage.color, borderBottom: currentPage.border }}
					onClick={() => {
            router.push(currentPage.firstLink)
					}}
					className={styles.linkButton}
				>
					{currentPage.firstText}
				</button>
				<button
					type='button'
					style={{ color: currentPage.color, borderBottom: currentPage.border }}
					onClick={() => {
						router.push(currentPage.secondLink)
					}}
					className={styles.linkButton}
				>
					{currentPage.secondText}
				</button>
			</div>
		</div>
	)
}

export default TopHeader
