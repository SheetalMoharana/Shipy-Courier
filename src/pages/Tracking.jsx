import React from 'react'
const Tracking = () => {
  return (
    <>
    <section className='w-full  py-20 flex flex-col items-center font-inter'>
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-10">
        Track your Parcel
      </h1>

      <form className="flex items-center bg-slate-100 rounded-full overflow-hidden shadow-sm">
        <input type="text"  placeholder="Enter Tracking Id/AWB"  className='px-6 py-3 w-64 md:w-80 bg-transparent outline-none text-slate-700' />
        <button type="submit" className="px-6 py-3 bg-gradient-to-br from-[#e8f1ff] via-[#e6fbf6] to-[#ffffff] text-slate-800 font-medium hover:bg-slate-200 transition">
          Track
        </button>
      </form>        
        
    </section>
    
    </>
  )
}

export default Tracking