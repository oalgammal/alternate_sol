import React from 'react'
//@ts-ignore
import { Pager } from 'react-bootstrap'
import ReactPageScroller, { SectionContainer } from 'react-page-scroller'
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import ThirdComponent from './components/ThirdComponent'
import styles from '@/styles/FullPage.module.css'


const FullPage=()=> {
	const [currentPage,setCurrentPage]= React.useState(0)
	
	const handlePageChange = (page:any) => {
		setCurrentPage(page)
		// this.setState({ currentPage: number })
	}

	const pagesNumbers = [1,2,3]
	return (
		<React.Fragment>
			<ReactPageScroller
				pageOnChange={(page) => handlePageChange(page)}
				customPageNumber={currentPage}
			>
				<FirstComponent setCurrentPage={setCurrentPage} />
				<SecondComponent setCurrentPage={setCurrentPage} />
				<ThirdComponent setCurrentPage={setCurrentPage} />
			</ReactPageScroller>
		</React.Fragment>
	)
}

export default FullPage