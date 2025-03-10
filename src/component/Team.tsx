import React from 'react'

function Team() {
  return (
    <div>
        <section className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-5/12 mb-12 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                We have the most <span className="text-[#126666]">professional marketing team.</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Our team of experts combines creativity, analytical thinking, and industry knowledge to deliver exceptional marketing solutions tailored to your business needs.
              </p>
              <div className="mb-8">
                {[
                  "Performance-driven strategies that deliver measurable results",
                  "Innovative approaches that keep you ahead of the competition",
                  "Dedicated account managers for personalized service"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center mb-4">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-[#126666] text-xs">✓</span>
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
              <a href="#contact" className="bg-[#126666] text-white px-6 py-3 rounded font-semibold inline-block hover:bg-purple-700 transition duration-300">
                Contact Us
              </a>
            </div>
            <div className="md:w-6/12 grid grid-cols-3 gap-6">
              {Array(6).fill(0).map((_, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-[#126666] rounded-full mx-auto mb-3"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full -mt-32 -mr-32 z-0"></div>
      </section>
    </div>
  )
}

export default Team