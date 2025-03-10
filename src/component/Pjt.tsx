import React from 'react';
import p1 from "../assets/p1.png"; 
import p2 from "../assets/p2.png"; // Second image
  
function Pjt() {
  return (
    <div>
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[#126666] mb-2">Our Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We've done some <span className="text-[#126666]">amazing projects.</span>
            </h2>
            <p className="text-gray-600">
              Browse through our portfolio of successful marketing campaigns and projects that have helped businesses achieve their goals and drive growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {[
              {
                title: "Personalized Ad Campaign",
                desc: "Increased conversion rates by 45% through targeted advertising strategies.",
                image: p1, 
              },
              {
                title: "Rebranding for Expansion",
                desc: "Helped a local business successfully expand to new markets with a fresh brand identity.",
                image: p2, 
              }
            ].map((project, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 bg-gray-200">
                  <img 
                    src={project.image} 
                    alt={`Project ${index + 1}`} 
                    width={400} 
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm">{project.desc}</p>
                  <a href="#" className="button rounded font-semibold inline-block hover:bg-purple-700">
                    View Case Study
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="#" className="button rounded font-semibold inline-block">
              View All Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pjt;