import React from "react";
import { FiSend, FiMail, FiMapPin, FiArrowUpRight } from "react-icons/fi";
import "./contact.css";

const Contact = () => {
	return (
		<section className='contact container section' id='contact'>
			<h2 className='section__title'>Get in Touch</h2>
			<div className='contact__container'>
				<div className='contact__info'>
					<div className='contact__info-card'>
						<h3 className='contact__heading'>Let's work together</h3>
						<p className='contact__details'>
							Have a project in mind or just want to say hello? Drop me a message and I'll get back to you.
						</p>

						<div className='contact__items'>
							<div className='contact__item'>
								<span className='contact__item-icon'>
									<FiMail />
								</span>
								<div>
									<h4 className='contact__item-title'>Email</h4>
									<span className='contact__item-text'>ticudean.o@gmail.com</span>
								</div>
							</div>

							<div className='contact__item'>
								<span className='contact__item-icon'>
									<FiMapPin />
								</span>
								<div>
									<h4 className='contact__item-title'>Location</h4>
									<span className='contact__item-text'>United Kingdom, Romania</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<form action='' className='contact__form'>
					<div className='contact__form-group'>
						<div className='contact__form-div'>
							<label className='contact__form-label'>Name</label>
							<input type='text' className='contact__form-input' placeholder='John Doe' />
						</div>
						<div className='contact__form-div'>
							<label className='contact__form-label'>Email</label>
							<input type='email' className='contact__form-input' placeholder='john@example.com' />
						</div>
					</div>
					<div className='contact__form-div'>
						<label className='contact__form-label'>Subject</label>
						<input type='text' className='contact__form-input' placeholder='Your inquiry' />
					</div>
					<div className='contact__form-div contact__form-area'>
						<label className='contact__form-label'>Message</label>
						<textarea
							cols='30'
							rows='10'
							className='contact__form-input'
							placeholder='Tell me about...'
						></textarea>
					</div>
					<button className='btn contact__btn'>
						<span>Send Message</span>
						<FiArrowUpRight className='contact__btn-icon' />
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
