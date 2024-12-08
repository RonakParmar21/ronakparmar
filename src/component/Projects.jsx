import React from 'react'
import Portfolio from '../assets/Portfolio.png'
import RSHotel from '../assets/RSHotel.png'
import Youtube from '../assets/Webelite.png'
import Supercar from '../assets/Supercar.png'
import Cards from './Cards'

const Projects = () => {

    const projectJson = [
        {
            title: 'Portfolio',
            desc: "A modern and responsive portfolio website built using React.js and Tailwind CSS to showcase my skills, Experience, projects, and professional background. It includes interactive sections like About Me, Experience, Skills, Projects, and Contact, along with seamless navigation and a sleek design. This project demonstrates my ability to create scalable and visually appealing web applications while ensuring responsiveness and user-friendly experience across devices.",
            image: Portfolio,
            live: "https://ronakparmar.vercel.app/",
            github: "https://github.com/RonakParmar21/ronakparmar"
        },
        {
            title: 'R&S Hotel',
            desc: "A hotel management system built using ASP.NET and SQL Server Management Studio, developed by Ronak Parmar and Smeet Rathod. It features user registration, secure OTP-based login, room booking, reviews, and profile management for clients. Admins can manage rooms, users, bookings, and staff efficiently. The system ensures seamless operations, enhanced security, scalability, and a user-friendly interface for improved management and customer satisfaction.",
            image: RSHotel,
            live: "",
            github: "https://github.com/RonakParmar21/r-s-hotel"
        },
        {
            title: 'R&S Hotel',
            desc: "A hotel management system built using ASP.NET and SQL Server, developed by Ronak Parmar and Smeet Rathod during the 6th semester. It features user registration, secure OTP-based login, room booking, reviews, and profile management for clients. Admins can manage rooms, users, bookings, and staff. The system ensures seamless operations with robust security measures.",
            image: RSHotel,
            live: "https://rohitsingh93300-portfolio.vercel.app/",
            github: "https://github.com/RonakParmar21/r-s-hotel"
        },
        // {
        //     title: 'YouTube Clone',
        //     desc: "Working with weblite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.",
        //     image: Supercar,
        //     live: "https://rohitsingh93300-portfolio.vercel.app/",
        //     github: "https://github.com/rohitsingh93300/portfolio"
        // },
        // {
        //     title: 'Webelite builder',
        //     desc: "Working with webelite Builders was seamless experience. They brought our vision to life with a modern, responsive website.",
        //     image: Youtube,
        //     live: "https://rohitsingh93300-portfolio.vercel.app/",
        //     github: "https://github.com/rohitsingh93300/portfolio"
        // },
        // {
        //     title: 'Portfolio',
        //     desc: "Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.",
        //     image: Portfolio,
        //     live: "https://rohitsingh93300-portfolio.vercel.app/",
        //     github: "https://github.com/rohitsingh93300/portfolio"
        // },
        // {
        //     title: 'Spicy Bites',
        //     desc: "The team at webelite Builders exceeded our experctations with their digital marketing expertise. Highly recommend!",
        //     image: SpicyBites,
        //     live: "https://rohitsingh93300-portfolio.vercel.app/",
        //     github: "https://github.com/rohitsingh93300/portfolio"
        // },
    ]

  return (
    <section className='relative bg-gray-950 px-4' id='projects'>
        <div className='pb-16 max-w-7xl mx-auto flex flex-col justify-center items-center text-center'>
            <h2 className='text-3xl mt-5 font-bold mb-8 text-white border-b border-[#378785] w-max pb-4'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 place-items-center gap-10'>
                {
                    projectJson.map((item) => {
                        return <Cards item={item} />
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Projects
