import React from 'react'
import { Mail, Twitter, Facebook, Instagram } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">Features</a></li>
              <li><a href="#" className="hover:text-blue-500">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-500">Customers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500">Careers</a></li>
              <li><a href="#" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">Blog</a></li>
              <li><a href="#" className="hover:text-blue-500">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-500">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="hover:text-blue-500"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-blue-500"><Instagram className="h-6 w-6" /></a>
            </div>
            <div className="mt-4">
              <label htmlFor="newsletter" className="block text-sm mb-1">Subscribe to our newsletter</label>
              <div className="flex">
                <input type="email" id="newsletter" className="bg-gray-800 border border-gray-700 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" placeholder="Your email address" />
                <button className="bg-primary hover:bg-blue-700 px-4 py-2 rounded-r-md transition-all duration-300">
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-700 pt-8">
          &copy; 2024 AI-Powered Productivity Platform. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
