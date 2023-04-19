import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import TopHeader from './components/TopHeader'

export default function App({ Component, pageProps }: AppProps) {
  	const router = useRouter()

  
  return (
		<>
			{[
				'/',
				'/history',
				'/team',
			].includes(router.pathname) && <TopHeader />}
			<Component {...pageProps} />
		</>
	)
}
