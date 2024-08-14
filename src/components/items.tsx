import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import Link from 'next/link'
import { products } from '../data/product'

type ProductType = {
	id: number
	urlImage: string
	name: string
}

const Items = () => {
	return (
		<div className="flex gap-2 overflow-auto [&::-webkit-scrollbar]:hidden">
			{products.map((p) => (
				<Card key={p.id} className="min-w-[287px] rounded-2xl">
					<CardContent className="p-0 px-1 pt-1">
						<div className="relative h-[285px] w-full">
							<Image
								fill
								className="object-cover rounded-2xl"
								alt={p.name}
								src={p.urlImage}
							/>
						</div>
						<div className="py-2 px-1">
							<h3 className="text-lg font-semibold text-center truncate my-2">
								{p.name}
							</h3>
							<div className="flex items-center text-lg ">
								<p className="w-[40%]">
									<span className="font-semibold">Cor:</span>
								</p>
								<p>{p.color}</p>
							</div>
							<div className="flex items-center text-lg ">
								<p className="w-[40%]">
									<span className="font-semibold">Tamanho:</span>
								</p>
								<p>{p.size}</p>
							</div>

							<div className="flex items-center text-lg ">
								<p className="w-[40%]">
									<span className="font-semibold">Marca:</span>
								</p>
								<p>{p.trand}</p>
							</div>

							<div className="flex items-center text-lg ">
								<p className="w-[40%]">
									<span className="font-semibold">Estoque:</span>
								</p>
								<p>{p.storage}</p>
							</div>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	)
}

export default Items
