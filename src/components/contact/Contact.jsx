import React from "react";
import "./contact.css";

const Contact = () => {
	return (
		<section className='contact container section' id='contact'>
			<h2 className='section__title'>Get in Touch</h2>
			<div className='contact__container grid'>
				<div className='contact__info'>
					<h3 className='contact__title'>Let's talk about everything!</h3>
					<p className='contact__details'>Send me a quick email using this form.</p>
				</div>
				<form action='' className='contact__form'>
					<div className='contact__form-group'>
						<div className='contact__form-div'>
							<input type='text' className='contact__form-input' placeholder='Insert your name' />
						</div>

						<div className='contact__form-div'>
							<input type='email' className='contact__form-input' placeholder='Insert your email' />
						</div>
					</div>
					<div className='contact__form-div'>
						<input type='text' className='contact__form-input' placeholder='Subject title' />
					</div>

					<div className='contact__form-div contact__form-area'>
						<textarea
							name=''
							id=''
							cols='30'
							rows='30'
							className='contact__form-input'
							placeholder='Write your message here!'
						></textarea>
					</div>
					<button className='btn'>Send message</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
