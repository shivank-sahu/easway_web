import React from 'react'

function Service() {
  return (
    <div>
         <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Our Professional <span className="text-[#126666]">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "S", title: "SEO Management", desc: "We optimize your online presence to increase visibility and drive organic traffic to your website." },
              { icon: "V", title: "Video Marketing", desc: "Engage your audience with compelling video content that tells your brand story." },
              { icon: "C", title: "Customer Studies", desc: "Gain valuable insights into your customers' behaviors and preferences." },
              { icon: "M", title: "Market Analysis", desc: "Understand your market landscape and identify opportunities for growth." },
              { icon: "C", title: "Content Creation", desc: "Create engaging content that resonates with your target audience." },
              { icon: "P", title: "PPC Campaigns", desc: "Drive targeted traffic and conversions with strategic paid advertising." }
            ].map((service, index) => (
              <div key={index} className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-[#126666] transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-[#126666] text-xl font-bold">{service.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#126666]">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Service