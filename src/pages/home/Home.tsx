import { useState,  FormEvent } from "react";
import Footer from "../../component/Footer";
import Blog from "../../component/Blog";
import Header from "../../component/Header";
import Team from "../../component/Team";
import Service from "../../component/Service";
import Contact from "../../component/Contact";
import Pjt from "../../component/Pjt";
// import img from "./emailImg.jpeg";
import img from "../../assets/faq.jpeg"
import img2 from "../../assets/stastic.jpg"

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
     <main className="overflow-x-hidden">
      {/* Hero Section */}
      <Header/>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                We have been doing this <span className="text-[#126666]">since 1999.</span>
              </h2>
              <p className="text-gray-600 mb-8 max-w-lg">
                Our experienced team has been helping businesses achieve their marketing goals for over two decades. We combine proven strategies with innovative approaches to deliver exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row mb-8">
                <div className="mr-10 mb-6 sm:mb-0 text-center sm:text-left">
                  <div className="text-3xl font-bold text-[#126666]">2500+</div>
                  <div className="text-sm text-gray-500">Projects Completed</div>
                </div>
                <div className="mr-10 mb-6 sm:mb-0 text-center sm:text-left">
                  <div className="text-3xl font-bold text-[#126666]0">850+</div>
                  <div className="text-sm text-gray-500">Happy Clients</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text[#126666]">1800+</div>
                  <div className="text-sm text-gray-500">Marketing Campaigns</div>
                </div>
              </div>
              <a href="#services" className="button rounded ml-12 font-semibold inline-block ">
                Learn More
              </a>
            </div>
            <div className="md:w-5/12">
              <img 
                
                src={img2}
                alt="Marketing Statistics" 
                width={400} 
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full -mb-32 -ml-32 z-0"></div>
      </section>

      {/* Services Section */}
     <Service/>
      {/* Team Section */}
      <Team/>

      {/* Projects Section */}
     <Pjt/>

      {/* Testimonials Section */}
   
      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Do you have <span className="text-[#126666]">Questions?</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Find answers to commonly asked questions about our services, process, and how we can help your business grow.
              </p>
              <div className="space-y-4">
                {[
                  {
                    question: "How long does a typical project take?",
                    answer: "Project timelines vary depending on scope and complexity. A typical marketing campaign might take 4-6 weeks from planning to execution."
                  },
                  {
                    question: "Do you have a minimum budget?",
                    answer: "We work with businesses of all sizes and can tailor our services to fit various budgets."
                  },
                  {
                    question: "What ROI can I expect?",
                    answer: "ROI varies by industry and campaign type. We focus on delivering measurable results and will provide detailed reporting on your campaign performance."
                  },
                  {
                    question: "Where can I reach for support?",
                    answer: "Our support team is available via email, phone, or chat during business hours. Premium clients receive 24/7 support."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-b border-gray-200">
                    <button
                      className="flex justify-between items-center w-full py-4 text-left"
                      onClick={() => toggleFaq(index)}
                    >
                      <h4 className="flex items-center font-medium">
                        <span className="w-4 h-4 bg-purple-600 rounded-full mr-3"></span>
                        {faq.question}
                      </h4>
                      <span>{activeFaq === index ? "-" : "+"}</span>
                    </button>
                    <div
                      className={`pl-7 pb-4 text-gray-600 text-sm ${
                        activeFaq === index ? "block" : "hidden"
                      }`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-5/12">
              <img 
                src={img} 
                alt="FAQ Illustration" 
                width={300} 
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <Blog/>

      {/* Contact Section */}
      <Contact/>

      {/* Footer */}
      <Footer/>
    
    </main>
</>
  );
}