import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MatchPlayerPositionType } from '@/utils/types'
import { columns } from '../DataTable/Columns'
import { DataTable } from '../DataTable/DataTable'

const TabsComponent = () => {
	return (
		<div>
			<Tabs defaultValue={MatchPlayerPositionType.All} className='w-auto'>
				<TabsList className='flex flex-row w-auto'>
					<TabsTrigger value={MatchPlayerPositionType.All}>Overall</TabsTrigger>
					<TabsTrigger value={MatchPlayerPositionType.Position_1}>
						Carry
					</TabsTrigger>
					<TabsTrigger value={MatchPlayerPositionType.Position_2}>
						Mid
					</TabsTrigger>
					<TabsTrigger value={MatchPlayerPositionType.Position_3}>
						Offlane
					</TabsTrigger>
					<TabsTrigger value={MatchPlayerPositionType.Position_4}>
						Soft support
					</TabsTrigger>
					<TabsTrigger value={MatchPlayerPositionType.Position_5}>
						Full support
					</TabsTrigger>
				</TabsList>
				<TabsContent value={MatchPlayerPositionType.All}>
					<DataTable columns={columns} position={MatchPlayerPositionType.All} />
				</TabsContent>
				<TabsContent value={MatchPlayerPositionType.Position_1}>
					<DataTable
						columns={columns}
						position={MatchPlayerPositionType.Position_1}
					/>
				</TabsContent>
				<TabsContent value={MatchPlayerPositionType.Position_2}>
					<DataTable
						columns={columns}
						position={MatchPlayerPositionType.Position_2}
					/>
				</TabsContent>
				<TabsContent value={MatchPlayerPositionType.Position_3}>
					<DataTable
						columns={columns}
						position={MatchPlayerPositionType.Position_3}
					/>
				</TabsContent>
				<TabsContent value={MatchPlayerPositionType.Position_4}>
					<DataTable
						columns={columns}
						position={MatchPlayerPositionType.Position_4}
					/>
				</TabsContent>
				<TabsContent value={MatchPlayerPositionType.Position_5}>
					<DataTable
						columns={columns}
						position={MatchPlayerPositionType.Position_5}
					/>
				</TabsContent>
			</Tabs>
		</div>
	)
}

export default TabsComponent
