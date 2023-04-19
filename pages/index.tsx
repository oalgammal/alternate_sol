import styles from '@/styles/Home.module.css'

import FirstComponent from '../modules/components/FirstComponent'


export default function Home() {
  return (
		<>
			
			<div className={styles.main}>
				<FirstComponent />
			</div>
		</>
	)
}
