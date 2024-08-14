import { Button } from './ui/button'

// } from "react-share";

const WhatsApp = () => {
	return (
		<div className="mt-4">
			<a
				href="whatsapp://send?text=eusoucorinthias"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Button className="bg-green-500 rounded-2xl text-white">
					WhatsApp
				</Button>
			</a>
		</div>
	)
}

export default WhatsApp
