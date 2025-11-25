import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-4m py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-white">4</span>
              <span className="text-accent">M</span>
              <span className="text-white ml-1">Home Services</span>
            </div>
            <p className="text-sm text-gray-300">
              Your trusted home improvement partner in the GTA, specializing in quality craftsmanship since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-accent transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-300 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/estimate" className="text-gray-300 hover:text-accent transition-colors">
                  Free Estimate
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Windows & Doors</li>
              <li>Siding Installation</li>
              <li>Interior Trim Work</li>
              <li>Brick Cutouts</li>
              <li>Painting Services</li>
              <li>Deep Home Cleaning</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start space-x-2">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span>(416) 555-4M00</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <span>info@4mhomeservices.ca</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Greater Toronto Area, Ontario</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© 2025 4M Home Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
