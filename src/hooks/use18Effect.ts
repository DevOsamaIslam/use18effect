import { DependencyList, EffectCallback, useEffect } from 'react'

const use18Effect = (effect: EffectCallback, deps?: DependencyList | undefined) => {
	let count = 0
	return useEffect(() => {
		if (count !== 1) {
			effect()

			return () => {
				count++
			}
		}
	}, deps)
}

export default use18Effect
