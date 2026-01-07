import React from 'react'
import { assets } from '../assets/assets'


const About = () => {
  return (
    <>
    <section className='relative w-full h-[70vh] min-h-[450px]'>
        <img src={assets.about_hero} alt='ABOUT US' className='absolute inset-0 w-full h-full object-cover'/>
        <div className="absolute inset-0 bg-black/40"></div>
        
    </section>
    <section className='py-8 max-w-5xl mx-auto px-4'>
        <p className='text-gray-700 text-lg text-center'>
<strong>Shipy Courier</strong> is a modern and reliable courier service built to simplify the way shipments are sent, tracked, and delivered. We provide fast, secure, and efficient logistics solutions for individuals and businesses, ensuring every package is handled with care from pickup to final delivery. With a strong focus on timely service, transparent tracking, and customer satisfaction, Shipy Courier makes shipping stress-free and dependable, whether it’s a local delivery or a long-distance shipment.
        </p>
    </section>
    <section>
        
    </section>
    </>
  )
}

export default About