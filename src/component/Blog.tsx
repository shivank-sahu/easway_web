import React from 'react'

function Blog() {
  return (
    <div>
        <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We Love <span className="text-[#126666]">Writing.</span>
            </h2>
            <p className="text-gray-600">
              Check out our latest insights, tips, and strategies to help you stay ahead in the ever-evolving world of marketing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Optimizing your website for peak performance",
                desc: "Learn the essential strategies to improve your website's speed, usability, and conversion rates."
              },
              {
                title: "Mastering TikTok for business marketing",
                desc: "Discover how to leverage TikTok's massive audience to grow your brand and increase engagement."
              },
              {
                title: "Effective content strategy for your business",
                desc: "Learn how to create content that resonates with your audience and drives meaningful results."
              }
            ].map((blog, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 bg-gray-200">
                  <img 
                    src="/IMG.jpg" 
                    // alt={Blog Post ${index + 1}} 
                    width={300} 
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm">{blog.desc}</p>
                  <a href="#" className="button rounded font-semibold inline-block ">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog