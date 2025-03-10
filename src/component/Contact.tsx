import React from 'react'
import { useState,  FormEvent } from "react";
import img from "../assets/contact.png"
function Contact() {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        contact: "",
        remarks: ""
      });
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [submitMessage, setSubmitMessage] = useState("");
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };
    
      const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
          const response = await fetch("https://s-m-s-keyw.onrender.com/contactUs/save", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          
          if (response.ok) {
            setSubmitMessage("Thank you for contacting us!");
            setFormData({
              username: "",
              email: "",
              contact: "",
              remarks: ""
            });
          } else {
            setSubmitMessage("Something went wrong. Please try again.");
          }
        } catch (error) {
          setSubmitMessage("Failed to submit form. Please check your connection.");
        } finally {
          setIsSubmitting(false);
        }
      };
  return (
    <div>
        <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Feel free to get in touch <span className="text-[#126666]">with us.</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Ready to take your marketing to the next level? Contact us today to discuss how we can help your business grow.
              </p>
              
              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="max-w-lg">
                <div className="mb-4">
                  <label htmlFor="username" className="block text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#126666]"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#126666]"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="contact" className="block text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#126666]"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="remarks" className="block text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="remarks"
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#126666]"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button rounded font-semibold inline-block hover:bg-purple-700 transition duration-300 disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                
                {submitMessage && (
                  <p className={`mt-4 ${submitMessage.includes("Thank you") ? "text-green-600" : "text-red-600"}`}>
                    {submitMessage}
                  </p>
                )}
              </form>
            </div>
            <div className="md:w-5/12">
              <img 
                src={img} 
                alt="Contact Illustration" 
                width={400} 
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact