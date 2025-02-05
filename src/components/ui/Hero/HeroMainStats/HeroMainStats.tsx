import { Hero } from '@/utils/types'
interface HeroMainStatsProps {
	hero: Hero
}

const HeroMainStats = ({ hero }: HeroMainStatsProps) => {
	const complexityPoints = Array(3)
		.fill('')
		.map((_, index) => ({
			className: `w-3 h-3 border border-white border-solid rotate-45 ${hero.stats.complexity > index ? 'bg-[#dedede]' : ''}`
		}))

	return (
		<div className='flex flex-row items-center space-x-2'>
			<img
				className='w-8 h-8'
				src={`https://cdn.stratz.com/images/dota2/primary_attributes/${hero.stats.primaryAttribute}.png`}
				alt=''
			/>
			{complexityPoints.map((point, index) => (
				<div key={index} className={point.className}></div>
			))}
			<p className='small-text pl-2'>ATTACK TYPE:</p>
			<img
				className='h-6 w-6'
				src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/${hero.stats.attackType.toLowerCase()}.svg`}
			/>
		</div>
	)
}

export default HeroMainStats
