import { Button } from './ui/button'

// } from "react-share";

const WhatsApp = () => {
	return (
		<div>
			<a
				href="whatsapp://send?text=eusoucorinthias"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Button>WhatsApp</Button>
			</a>
		</div>
	)
}

export default WhatsApp
