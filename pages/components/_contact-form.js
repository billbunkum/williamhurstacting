import styles from '@/styles/Home.module.css'

export default function ContactForm() {
	return (
		<>
		<div className={styles.contact_form}>

			<form
  			action="https://formspree.io/f/xvoearob"
  			method="POST"
			>
				<input id="fullname" placeholder="Full Name" 
					type="text" 
					name="fullname" />
				<label htmlfor="fullname">Your Name</label>
				
				<input id="email" placeholder="you@email-address.com"
						type="email"
						name="email" />
				<label htmlfor="email">Your Email</label>
  			
				<textarea id="message" placeholder="Hey William!, you're perfect for the part!"
					name="message"
					className={styles.text_area}
				></textarea>
				<label htmlfor="message">Your Message</label>
				<br />	
  			<button type="submit">Send</button>
			</form>
		</div>
		</>
	);
}
