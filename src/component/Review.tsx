import React from 'react'
import { useState } from 'react';
function Review() {
      const [activeTestimonial, setActiveTestimonial] = useState(0);
    
  return (
    <div>
    <section className="py-20 bg-gray-50 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-5/12 mb-12 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Clients <span className="text-[#126666]">Love Us.</span>
              </h2>
              <p className="text-gray-600">
                Don't just take our word for it. Here's what our clients have to say about working with our marketing team.
              </p>
            </div>
            <div className="md:w-6/12 bg-white rounded-lg p-8 shadow-lg relative">
              <p className="text-gray-700 italic mb-6">
                "If you are ever looking for a professional to collaborate with when it comes to digital marketing, I highly recommend Tresst. Everyone I've worked with has been amazing."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4">
                  <img 
                    src="//IMG.jpg" 
                    alt="Client" 
                    width={50} 
                    height={50}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-gray-500 text-sm">CEO, TechStart</p>
                </div>
              </div>
              <div className="absolute bottom-8 right-8 flex">
                {[0, 1, 2].map((dot) => (
                  <button
                    key={dot}
                    onClick={() => setActiveTestimonial(dot)}
                    className={`w-3 h-3 rounded-full mx-1 ${
                      activeTestimonial === dot ? "bg-purple-600" : "bg-gray-300"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Review