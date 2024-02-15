import styles from '@/styles/Home.module.css'

export default function ContactForm() {
	return (
		<>
		<div className={styles.contact_form}>
			<form
  			action="https://formspree.io/f/xvoearob"
  			method="POST"
			>

				<div className="input-field">
					<input id="fullname" placeholder="Full Name" 
						type="text" 
						name="fullname" />
					<label htmlfor="fullname">Your Name</label>
				</div>

				<div className="input-field">	
					<input id="email" placeholder="you@email-address.com"
							data-length="320"
							type="email"
							name="email" />
					<label htmlfor="email">Your Email</label>
				</div>  			
				
				<div className="input-field">
					<textarea id="message" placeholder="Hey William!, you're perfect for the part!"
						data-length="500"
						name="message"
						className={styles.text_area}
					></textarea>
					<label htmlfor="message">Your Message</label>
				</div>

				<br />	
				<a
					type="submit" 
					className="purple waves-effect waves-light btn-large">Send</a>
{/*  			<button type="submit">Send</button>*/}
			</form>
		</div>
		</>
	);
}
