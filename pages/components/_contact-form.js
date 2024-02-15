import styles from '@/styles/Home.module.css'

export default function ContactForm() {
	return (
		<>
			<form
  		action="https://formspree.io/f/xvoearob"
  		method="POST"
			className={styles.contact_form}
			>
				<label for="fullname">Your Name:
					<input 
						id="fullname"
						type="fullname" 
						value="Full Name"
						name="fullname" />
				 </label>
  			
				<label for="email">Email:
    			<input
						id="email"
						type="email"
						value="Email Address"
						name="email" />
  			 </label>
  			
				<label for="message">Message:
    			<textarea
						id="message"
						value="Hello William! We'd love to book you!"
						name="message"
						className={styles.text_area}
					></textarea>
  			 </label>
{/*<!-- your other form fields go here -->*/}
  			<button type="submit">Send</button>
			</form>
		</>
	);
}
