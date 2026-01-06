import React from 'react'
import{ Truck, Globe, Zap, PackageCheck } from 'lucide-react'

const services = [
  {
    title: "Domestic Courier",
    desc: "Fast and reliable delivery across cities with doorstep pickup and safe handling.",
    icon: <Truck size={28} />,
  },
  {
    title: "International Shipping",
    desc: "Ship parcels worldwide with customs support and end-to-end tracking.",
    icon: <Globe size={28} />,
  },
  {
    title: "Express Delivery",
    desc: "Urgent shipments delivered with priority processing and faster transit.",
    icon: <Zap size={28} />,
  },
  {
    title: "Bulk & Business Logistics",
    desc: "Cost-effective logistics solutions for businesses and bulk shipments.",
    icon: <PackageCheck size={28} />,
  },
]

const Ourservices = () => {
  return (
    <section className='relative py-20  bg-gradient-to-br from-[#e8f1ff] via-[#e6fbf6] to-[#ffffff] overflow-hidden'>
      <div className="max-w-7xl mx-auto px-6">
        
        
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Our Services
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Smart, secure, and scalable shipping solutions designed for individuals
            and businesses.
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300"
            >
              
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-emerald-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                {service.icon}
              </div>

              
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Ourservices