import styles from '@/styles/Home.module.css'

export default function ContactForm() {
	return (
		<>
		
{/*		<div className={styles.contact_form}>*/}
	<div className="row">
	<div className="col m2"></div>
		<div className="col s12 m8">
			<form
  			action="https://formspree.io/f/xvoearob"
  			method="POST"
			>

				<div className="input-field">
					<input id="fullname" placeholder="Full Name" 
						className={styles.input_area}
						maxLength="747"
						type="text" 
						name="fullname" />
					<label className="active" htmlfor="fullname">Your Name</label>
				</div>

				<div className="input-field">	
					<input id="email" placeholder="you@email-address.com"
						className={styles.input_area}
						maxLength="320"
						type="email"
						name="email" />
					<label className="active" htmlfor="email">Your Email</label>
				</div>  			
				
				<div className="input-field">
					<textarea id="message" placeholder="Hey William!, you're perfect for the part!"
						className={styles.text_area}
						maxLength="500"
						name="message"
					></textarea>
					<label className="active" htmlfor="message">Your Message</label>
				</div>

				<br />	
				<a
					type="submit" 
					className="purple waves-effect waves-light btn-large">Send</a>
{/*  			<button type="submit">Send</button>*/}
			</form>
		</div>
	<div className="col m2"></div>
	</div>
{/*		</div>*/}
		</>
	);
}
