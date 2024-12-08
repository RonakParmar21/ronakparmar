import React from 'react'
import Html from '../assets/HTML.svg'
import Css from '../assets/CSS.svg'
import Javascript from '../assets/JavaScript.svg'
// import ReactLogo from '../assets/React.png'
import ReactLogo from '../assets/react.svg'
import javaLogo from '../assets/java.svg'
import ReduxLogo from '../assets/Redux.svg'
import Tailwind from '../assets/Tailwind CSS.svg'
import Bootstrap from '../assets/Bootstrap.svg'
import MySQL from '../assets/MySQL.svg'
import Spring from '../assets/Spring.svg'
import Oracle from '../assets/Oracle.svg'
import Github from '../assets/Github.svg'
import Dotnet from '../assets/Dotnet.svg'

const About = () => {
  return (
    <div className='relative' id='about'>
        <div className='bg-gray-100 py-12'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center'>
                    <h2 className='text-base text-[#378785] font-semibold tracking-wide uppercase'>About Me</h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Hi, I'm Ronak Parmar</p>
                    <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
                        A Full-Stack Developer with expertise in React and Java.
                    </p>
                </div>
                <div className='mt-10'>
                    <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
                        <div>

                            <h3 className='text-2xl font-semibold text-gray-900'>My Journey</h3>
                            <p className='mt-4 text-lg text-gray-600'>
                                {/* I started my journey in web development with a passion for creating intuitive and scalable applications. With proficiency in the MERN stack (MongoDB, Express.js, React, and Node.js), I have built projects such as a full-stack food ordering website, a job portal and even a linkedin clone. My projects demonstrate my ability to integrate powerful backend solutions with sleek, user-friendly frontend design. */}
                                Aspiring to leverage my expertise as a React JS for frontend development and Java for backend development with a focus on full stack
 development to contribute to innovative, scalable solutions in a dynamic and fast-paced environment. With foundation in React JS and Java,
 I am eager to apply my knowledge to solve complex challenges while continuously expanding my technical skills.
                            </p>
                            {/* <img src={MearnStack} alt="" className='p-2 rounded-lg w-52 mt-4' /> */}
                        </div>
                        <div className='border border-emerald-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-[#378785]'>
                            <h3 className='text-2xl font-semibold text-[#378785]'>Skills & Expertise</h3>
                            <div className='flex items-center justify-center flex-wrap gap-3'>
                                <div className='border border-[#378785] flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#378785]'>
                                    <img src={Html} alt="" className='w-10' />
                                    <span className='font-semibold'>HTML</span>
                                </div>

                                <div className='border border-[#378785] flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#378785]'>
                                    <img src={Css} alt="" className='w-10' />
                                    <span className='font-semibold'>CSS</span>
                                </div>

                                <div className='border border-[#378785] flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#378785]'>
                                    <img src={Javascript} alt="" className='w-10' />
                                    <span className='font-semibold'>JavaScript</span>
                                </div>

                                <div className='border border-[#378785] flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#378785]'>
                                    <img src={ReactLogo} alt="" className='w-10' />
                                    <span className='font-semibold'>React</span>
                                </div>

                                <div className='border border-[#378785] flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#378785]'>
                                    <img src={ReduxLogo} alt="" className='w-10' />
                                    <span className='font-semibold'>Redux</span>
                                </div>

                                <div className='border border-[#378785] flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#378785]'>
                                    <img src={Tailwind} alt="" className='w-10' />
                                    <span className='font-semibold'>Tailwind</span>
                                </div>

                                <div className='border border-[#378785] flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#378785]'>
                                    <img src={Bootstrap} alt="" className='w-10' />
                                    <span className='font-semibold'>Bootstrap</span>
                                </div>

                                <div className='border border-[#378785] flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#378785]'>
                                    <img src={javaLogo} alt="" className='w-10' />
                                    <span className='font-semibold'>JAVA</span>
                                </div>

                                <div className='border border-[#378785] flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#378785]'>
                                    <img src={Spring} alt="" className='w-10' />
                                    <span className='font-semibold'>Spring</span>
                                </div>

                                <div className='border border-[#378785] flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#378785]'>
                                    <img src={Github} alt="" className='w-10' />
                                    <span className='font-semibold'>Github</span>
                                </div>

                                <div className='border border-[#378785] flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#378785]'>
                                    <img src={MySQL} alt="" className='w-10' />
                                    <span className='font-semibold'>MySQL</span>
                                </div>

                                <div className='border border-[#378785] flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#378785]'>
                                    <img src={Oracle} alt="" className='w-10' />
                                    <span className='font-semibold'>Oracle</span>
                                </div>

                                <div className='border border-[#378785] flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#378785]'>
                                    <img src={Dotnet} alt="" className='w-10' />
                                    <span className='font-semibold'>Dotnet</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-12'>
                    <h3 className='text-2xl font-semibold text-gray-900'>More About Me</h3>
                    <p className='mt-4 text-lg text-gray-600'>
                        Apart from coding I am passionate about learning new technologies and keeping myself up-to-date with latest terends in web development. 
                        {/* I also run a YouTube channel where I teach Javascript, MERN stack development, Wordpress and digital Marketing, helping others dive deep into the world of programming and technology. */}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
