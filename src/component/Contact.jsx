import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import Lottie from 'lottie-react';
import contact from '../assets/Contact.json';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_4h1e4mv', // Replace with your EmailJS service ID
                'template_q7m3g4m', // Replace with your EmailJS template ID
                form.current,
                'crn4UEohTPw3BPXbH' // Replace with your EmailJS user ID (or public key)
            )
            .then(
                (result) => {
                    alert('Message sent successfully!');
                },
                (error) => {
                    alert('Failed to send the message, please try again.');
                }
            );
    };

    return (
        <section className='z-40 bg-[#9BC3C2] relative py-10 px-5 md:px-0' id='contact'>
            <div className='mb-16 max-w-7xl mx-auto'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='md:w-1/2 mb-8 ml-2 md:mb-0'>
                        <h2 className='text-3xl font-bold mb-3 text-[#378785]'>Get in Touch</h2>
                        <p className='mb-4 text-white/85'>I'm always open to new opportunities and collaboration. Feel free to reach out!</p>
                        <div className='flex space-x-4'>
                            <a href="#" className='text-foregound/60 hover:text-foreground/80'>
                                <img src={facebook} alt="" className='h-6 w-6' />
                            </a>
                            <a href="#" className='text-foregound/60 hover:text-foreground/80'>
                                <img src={instagram} alt="" className='h-6 w-6' />
                            </a>
                            <a href="#" className='text-foregound/60 hover:text-foreground/80'>
                                <img src={linkedin} alt="" className='h-6 w-6' />
                            </a>
                        </div>

                        <Lottie animationData={contact} className='w-[350px] mx-auto lg:w-[500px]' />
                    </div>

                    <form ref={form} onSubmit={sendEmail} className='w-full md:w-1/2 bg-gray-100 rounded-lg border border-emerald-300 shadow-lg shadow-[#378785] p-10'>
                        <h1 className='text-gray-900 text-4xl font-bold mb-7'>Contact Me</h1>

                        <div className='mb-4'>
                            <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name</label>
                            <input type="text" name="user_name" placeholder='Full Name' className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' required />
                        </div>

                        <div className='mb-4'>
                            <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
                            <input type="email" name="user_email" placeholder='Email' className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' required />
                        </div>

                        <div className='mb-4'>
                            <label htmlFor="message" className='block text-sm font-medium text-gray-700'>Message</label>
                            <textarea name="message" placeholder='Enter Your Message' className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' required />
                        </div>
                        <button type="submit" className='bg-[#378785] text-white px-3 py-2 rounded-lg'>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
