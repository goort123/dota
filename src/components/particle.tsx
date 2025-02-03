import Particles, { initParticlesEngine } from '@tsparticles/react'
import { useEffect, useMemo, useState } from 'react'
import {
	type Container,
	type ISourceOptions,
	MoveDirection,
	OutMode
} from '@tsparticles/engine'

import { loadSlim } from '@tsparticles/slim'

const ParticlesComponent = () => {
	const [init, setInit] = useState(false)

	useEffect(() => {
		initParticlesEngine(async engine => {
			await loadSlim(engine)
		}).then(() => {
			setInit(true)
		})
	}, [])

	const particlesLoaded = async (container?: Container): Promise<void> => {
		console.log(container)
	}

	const options: ISourceOptions = useMemo(
		() => ({
			background: {
				color: {
					value: '#000000'
				}
			},
			fpsLimit: 120,
			fullScreen: {
				enable: true,
				zIndex: -1
			},
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: 'repulse'
					},
					onHover: {
						enable: true,
						mode: 'grab'
					}
				},
				modes: {
					push: {
						distance: 200,
						duration: 15
					},
					grab: {
						distance: 150
					}
				}
			},
			particles: {
				color: {
					value: '#FFFFFF'
				},
				links: {
					color: '#FFFFFF',
					distance: 150,
					enable: true,
					opacity: 0.3,
					width: 1
				},
				move: {
					direction: MoveDirection.none,
					enable: true,
					outModes: {
						default: OutMode.bounce
					},
					random: true,
					speed: 1,
					straight: false
				},
				number: {
					density: {
						enable: true
					},
					value: 150
				},
				opacity: {
					value: 1.0
				},
				shape: {
					type: 'circle'
				},
				size: {
					value: { min: 1, max: 3 }
				}
			},
			detectRetina: true
		}),
		[]
	)
	if (init) {
		return (
			// это документация
			//@ts-ignore
			//tslint:disable-next-line
			<Particles id='particles' init={particlesLoaded} options={options} />
		)
	}
}

export default ParticlesComponent
