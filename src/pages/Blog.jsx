import React from 'react'
import { assets } from '../assets/assets'

const Blog = () => {
  return (
    <>
    <section className='relative w-full h-[70vh] min-h-[450px]'>
            <img src={assets.about_hero} alt='ABOUT US' className='absolute inset-0 w-full h-full object-cover'/>
            <div className="absolute inset-0 bg-black/40"></div>
            
        </section>
        <section className="py-16">
  <div className="max-w-7xl mx-auto px-6">

    
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
        Latest Articles
      </h2>
      <p className="mt-3 text-slate-600 max-w-xl mx-auto">
        Stay updated with the latest trends and insights from the logistics and courier industry.
      </p>
    </div>

    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden">
        <div className="h-48 bg-slate-200 flex items-center justify-center text-slate-500">
          Blog Image
        </div>
        <div className="p-6">
          <p className="text-sm text-slate-500">January 2026</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-800">
            How AI Is Transforming Courier Services
          </h3>
          <p className="mt-3 text-slate-600 text-sm">
            Artificial intelligence is helping courier companies optimize routes,
            reduce delays, and improve delivery accuracy like never before.
          </p>
        </div>
      </div>

      
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden">
        <div className="h-48 bg-slate-200 flex items-center justify-center text-slate-500">
          Blog Image
        </div>
        <div className="p-6">
          <p className="text-sm text-slate-500">December 2025</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-800">
            Same-Day Delivery: The New Normal
          </h3>
          <p className="mt-3 text-slate-600 text-sm">
            Customers now expect faster deliveries. Logistics companies are
            redesigning operations to meet growing same-day delivery demands.
          </p>
        </div>
      </div>

<div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden">
        <div className="h-48 bg-slate-200 flex items-center justify-center text-slate-500">
          Blog Image
        </div>
        <div className="p-6">
          <p className="text-sm text-slate-500">November 2025</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-800">
            Sustainable Shipping & Green Logistics
          </h3>
          <p className="mt-3 text-slate-600 text-sm">
            From electric delivery vehicles to eco-friendly packaging,
            sustainability is becoming a core focus in modern logistics.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
      

        </>
  )
}

export default Blog