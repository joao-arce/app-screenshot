import ProductCards from './productCards'
import ProductTable from './productTable'
import { Card, CardContent, CardHeader } from './ui/card'

const List = () => {
	return (
		<Card>
			<CardHeader>Lista de Produtos</CardHeader>
			<CardContent>
				{/* <ProductTable /> */}
				<ProductCards />
			</CardContent>
		</Card>
	)
}

export default List
