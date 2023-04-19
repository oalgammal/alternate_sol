import styles from '@/styles/Home.module.css'
import SecondComponent from '../../modules/components/SecondComponent'
import React from 'react'


export default function History() {
  return (
    
		<React.Fragment>
			
			<main className={styles.main}>
				<SecondComponent />
			</main>
		</React.Fragment>
	)
}
