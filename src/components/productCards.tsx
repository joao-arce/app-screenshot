import Image from 'next/image'
import { Card, CardContent } from './ui/card'

type ProductCardsProps = {
	id: number
	urlImage: string
}

const invoices = [
	{
		id: 101,
		urlImage: '/sport-01.png',
	},
	{
		id: 102,
		urlImage: '/sport-02.png',
	},
	{
		id: 103,
		urlImage: '/sport-03.png',
	},
	{
		id: 104,
		urlImage: '/sport-04.png',
	},
	{
		id: 104,
		urlImage: '/sport-01.png',
	},
	{
		id: 105,
		urlImage: '/sport-05.png',
	},
	{
		id: 106,
		urlImage: '/sport-06.png',
	},
]

// 191.252.83.204

// 189.63.89.168

const ProductCards = () => {
	return (
		<div className="flex flex-col gap-1">
			{invoices.map((invoice) => (
				<Card key={invoice.id.toString()} className="w-56">
					<CardContent className="w-full flex justify-center">
						<Image
							src={invoice.urlImage}
							alt="image"
							width={32}
							height={32}
							className="object-cover w-32"
						/>
					</CardContent>
				</Card>
			))}
		</div>
	)
}

export default ProductCards
