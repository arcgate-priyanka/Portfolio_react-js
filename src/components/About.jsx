import React from 'react';
import about from '../assets/about.jpeg';

const About = () => {
  return (
    <div className='bg-black text-white max-w-[1200px] mx-auto my-[-3]' id='about'>
      
    <div className='md:grid md:grid-cols-2 sm:py-16'>
        <div className='mt-4 md:mt-0 text-left flex-flex-col h-full justify-start py-6 md:py-0'>
            <div className='my-auto mx-6'>
                <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                <p className='text-base  lg:text-lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo culpa atque molestias quisquam recusandae, esse sapiente illo, blanditiis repellendus aspernatur sequi amet officia reprehenderit quae cum obcaecati, quam iusto veniam.
                </p>
            </div>
        </div>

        <img className='mx-auto rounded-3xl py-8 md:py-0' src={about} alt='about' width={300} height={300} />

    </div>

    </div>
  )
}

export default About
