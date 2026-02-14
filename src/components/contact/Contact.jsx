import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiSend, FiMail, FiMapPin, FiArrowUpRight, FiCheck, FiAlertCircle } from "react-icons/fi";
import "./contact.css";

const Contact = () => {
	const formRef = useRef();
	const [status, setStatus] = useState(""); // "", "sending", "sent", "error"

	const handleSubmit = (e) => {
		e.preventDefault();
		setStatus("sending");

		console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
		console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
		console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

		emailjs
			.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				formRef.current,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			)
			.then((result) => {
				console.log("EmailJS success:", result);
				setStatus("sent");
				formRef.current.reset();
				setTimeout(() => setStatus(""), 5000);
			})
			.catch((error) => {
				console.error("EmailJS error:", error);
				setStatus("error");
				setTimeout(() => setStatus(""), 5000);
			});
	};

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

				<form ref={formRef} onSubmit={handleSubmit} className='contact__form'>
					<div className='contact__form-group'>
						<div className='contact__form-div'>
							<label className='contact__form-label'>Name</label>
							<input type='text' name='from_name' className='contact__form-input' placeholder='John Doe' required />
						</div>
						<div className='contact__form-div'>
							<label className='contact__form-label'>Email</label>
							<input type='email' name='from_email' className='contact__form-input' placeholder='john@example.com' required />
						</div>
					</div>
					<div className='contact__form-div'>
						<label className='contact__form-label'>Subject</label>
						<input type='text' name='subject' className='contact__form-input' placeholder='Your inquiry' required />
					</div>
					<div className='contact__form-div contact__form-area'>
						<label className='contact__form-label'>Message</label>
						<textarea
							cols='30'
							rows='10'
							name='message'
							className='contact__form-input'
							placeholder='Tell me about...'
							required
						></textarea>
					</div>
					<button className='btn contact__btn' type='submit' disabled={status === "sending"}>
						{status === "sending" ? (
							<span>Sending...</span>
						) : status === "sent" ? (
							<>
								<span>Message Sent!</span>
								<FiCheck className='contact__btn-icon' />
							</>
						) : status === "error" ? (
							<>
								<span>Failed, try again</span>
								<FiAlertCircle className='contact__btn-icon' />
							</>
						) : (
							<>
								<span>Send Message</span>
								<FiArrowUpRight className='contact__btn-icon' />
							</>
						)}
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
