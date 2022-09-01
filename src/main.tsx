import React from 'react'
import use18Effect from './hooks/use18Effect'
import { createRoot } from 'react-dom/client'

const Main = () => {
	use18Effect(() => {
		console.log('first')
	})

	return <>Just Works!</>
}

createRoot(document.querySelector('#root') as HTMLElement).render(
	<React.StrictMode>
		<Main />
	</React.StrictMode>
)

export default Main
