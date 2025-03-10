import React from 'react'
import logo from "../assets/ews-full.png"
function Footer() {
  return (
    <div>
        <footer className="bg-gray-900 text-white pt-16 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between mb-12">
            <div className="w-full md:w-4/12 mb-8 md:mb-0">
              <div className="flex items-center font-bold text-xl mb-4">
                <div className=" flex items-center justify-center mr-2">
                 <img src={logo} alt="" width={150} height={30}/>
                </div>
               
              </div>
              <p className="text-gray-400 mb-4">
                We help businesses grow through strategic marketing and innovative solutions.
              </p>
            </div>
            <div className="w-full md:w-7/12">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Company</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Team</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Resources</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Case Studies</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Guides</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contact</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>info@tresst.com</li>
                    <li>+1 (555) 123-4567</li>
                    <li>123 Marketing St, Suite 100</li>
                    <li>New York, NY 10001</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Easyway solution All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer