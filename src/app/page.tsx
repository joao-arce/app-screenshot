import Items from '@/components/items'
import List from '@/components/list'
import WhatsApp from '@/components/whatsApp'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col px-2 py-4">
			{/* <List /> */}
			<Items />
			<WhatsApp />
		</main>
	)
}
