'use client'

import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { products } from '../data/product'
import { useState } from 'react'

type ProductType = {
	id: number
	urlImage: string
	name: string
}

// const images = ['./sport-01.png', './sport-02.png', './sport-03.png']
const images = [
	'https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png',
	'https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png',
	'https://utfs.io/f/5832df58-cfd7-4b3f-b102-42b7e150ced2-16r.png',
]

const deviceToken = '130cbcb4-94a4-440b-a374-8adf8a68d2d2'
const authorizationToken =
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3BsYXRhZm9ybWEuYXBpYnJhc2lsLmNvbS5ici9zb2NpYWwvZ29vZ2xlL2NhbGxiYWNrIiwiaWF0IjoxNzIyNDI3MTQ3LCJleHAiOjE3NTM5NjMxNDcsIm5iZiI6MTcyMjQyNzE0NywianRpIjoiYzZwWmhFVW45bzdKdjZvTiIsInN1YiI6IjEwNTU5IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.MHcdnfA1R_I9DxALkXeXe8F7zXO1eWI8fsH5_Gh8IuI'

const Items = () => {
	const [responseMessage, setResponseMessage] = useState('')

	const handleClick = async () => {
		try {
			for (const imagePath of images) {
				const payload = {
					number: 5562992484676,
					path: imagePath,
				}

				const response = await fetch(
					'https://cluster.apigratis.com/api/v2/whatsapp/sendFile',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							DeviceToken: deviceToken,
							Authorization: `Bearer ${authorizationToken}`,
						},
						body: JSON.stringify(payload),
					},
				)

				const data = await response.json()
				setResponseMessage(
					(prev) =>
						`${prev}Resposta da API para a imagem: ${imagePath} - ${JSON.stringify(data)}\n`,
				)
			}
		} catch (error) {
			console.error('Erro ao enviar imagem:', error)
			setResponseMessage(`Erro ao enviar imagens via WhatsApp. ${error}`)
		}
	}
	return (
		<div className="flex flex-col">
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
			<div className="mt-4 ">
				<Button
					className="bg-emerald-600 hover:bg-emerald-400 text-white"
					onClick={handleClick}
				>
					Enviar
				</Button>
			</div>
			<div>
				<p>Mensagem: {responseMessage}</p>
			</div>
		</div>
	)
}

export default Items
