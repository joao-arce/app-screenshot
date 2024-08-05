import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import Image from 'next/image'

const invoices = [
	{
		id: 101,
		urlImage: '/sport-01.png',
		invoice: 'INV001',
		paymentStatus: 'Paid',
		totalAmount: '$250.00',
		paymentMethod: 'Credit Card',
	},
	{
		id: 102,
		urlImage: '/sport-02.png',
		invoice: 'INV002',
		paymentStatus: 'Pending',
		totalAmount: '$150.00',
		paymentMethod: 'PayPal',
	},
	{
		id: 103,
		urlImage: '/sport-03.png',
		invoice: 'INV003',
		paymentStatus: 'Unpaid',
		totalAmount: '$350.00',
		paymentMethod: 'Bank Transfer',
	},
	{
		id: 104,
		urlImage: '/sport-04.png',
		invoice: 'INV004',
		paymentStatus: 'Paid',
		totalAmount: '$450.00',
		paymentMethod: 'Credit Card',
	},
	{
		id: 104,
		urlImage: '/sport-04.png',
		invoice: 'INV005',
		paymentStatus: 'Paid',
		totalAmount: '$550.00',
		paymentMethod: 'PayPal',
	},
	{
		id: 105,
		urlImage: '/sport-05.png',
		invoice: 'INV006',
		paymentStatus: 'Pending',
		totalAmount: '$200.00',
		paymentMethod: 'Bank Transfer',
	},
	{
		id: 106,
		urlImage: '/sport-06.png',
		invoice: 'INV007',
		paymentStatus: 'Unpaid',
		totalAmount: '$300.00',
		paymentMethod: 'Credit Card',
	},
]

// 191.252.83.204

// 189.63.89.168

const ProductTable = () => {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">Invoice</TableHead>
					<TableHead>Method</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{invoices.map((invoice) => (
					<TableRow key={invoice.id}>
						<TableCell className="">
							<Image
								src={invoice.urlImage}
								alt="image"
								width={48}
								height={48}
								className="object-cover"
							/>
						</TableCell>
						<TableCell>{invoice.paymentMethod}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}

export default ProductTable
