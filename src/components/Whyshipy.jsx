import React from 'react'
import { Truck } from 'lucide-react';
const features = [
  {
    title: "Fast & Reliable Delivery",
    desc: "On-time pickups and guaranteed deliveries across cities and states.",
    icon: <Truck size={26} />,
    delay: 0.3
  },
  {
    title: "Fast & Reliable Delivery",
    desc: "On-time pickups and guaranteed deliveries across cities and states.",
    icon: <Truck size={26} />,
    delay: 0.3
  },
  {
    title: "Fast & Reliable Delivery",
    desc: "On-time pickups and guaranteed deliveries across cities and states.",
    icon: <Truck size={26} />,
    delay: 0.3
  },
  {
    title: "Fast & Reliable Delivery",
    desc: "On-time pickups and guaranteed deliveries across cities and states.",
    icon: <Truck size={26} />,
    delay: 0.3
  }
]

const Whyshipy = () => {
  return (
    <section className="bg-gray-50 py-20 px-4">
    <div className='max-w-7xl mx-auto'>
<div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Shipy Courier?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We simplify shipping with speed, security, and smart technology —
            so you can focus on what matters most.
          </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
         {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-2xl mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

    </div>
    </section>
  )
}

export default Whyshipy