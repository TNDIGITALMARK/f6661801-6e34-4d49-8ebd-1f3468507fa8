"use client"

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle, Upload, ArrowRight, Phone, Mail } from 'lucide-react'

export default function EstimatePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 3

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-primary text-white py-16">
        <div className="container-4m">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get Your Free Estimate
            </h1>
            <p className="text-lg text-gray-300">
              Tell us about your project and receive a detailed estimate from our team within 24 hours. No obligations, just honest pricing from factory-direct connections.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="bg-white border-b">
        <div className="container-4m py-6">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center flex-1">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                    currentStep >= step ? "bg-accent text-white" : "bg-gray-200 text-gray-600"
                  }`}>
                    {currentStep > step ? <CheckCircle size={20} /> : step}
                  </div>
                  {step < 3 && (
                    <div className={`flex-1 h-1 mx-2 ${
                      currentStep > step ? "bg-accent" : "bg-gray-200"
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-600">
              <span className={currentStep >= 1 ? "text-accent" : ""}>Services</span>
              <span className={currentStep >= 2 ? "text-accent" : ""}>Property Details</span>
              <span className={currentStep >= 3 ? "text-accent" : ""}>Contact Info</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-4m">
        <div className="container-4m">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              {/* Step 1: Service Selection */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-2">
                      Select Services You Need
                    </h2>
                    <p className="text-muted-foreground">
                      Choose one or more services for your project
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Windows Installation",
                      "Door Installation",
                      "Siding Installation",
                      "Interior Trim Work",
                      "Brick Cutouts",
                      "Exterior Painting",
                      "Interior Painting",
                      "Deep Home Cleaning"
                    ].map((service, index) => (
                      <label key={index} className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-accent hover:bg-gray-50 transition-all">
                        <input
                          type="checkbox"
                          className="w-5 h-5 text-accent rounded border-gray-300 focus:ring-accent focus:ring-2"
                        />
                        <span className="font-medium text-gray-700">{service}</span>
                      </label>
                    ))}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Additional Details (Optional)
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                      placeholder="Tell us more about your project..."
                    />
                  </div>

                  <button
                    onClick={() => setCurrentStep(2)}
                    className="w-full bg-accent hover:opacity-90 text-white px-6 py-4 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                  >
                    Continue to Property Details
                    <ArrowRight className="ml-2" size={20} />
                  </button>
                </div>
              )}

              {/* Step 2: Property Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-2">
                      Property Information
                    </h2>
                    <p className="text-muted-foreground">
                      Help us understand your property better
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Property Type
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all">
                        <option>Residential House</option>
                        <option>Condominium</option>
                        <option>Townhouse</option>
                        <option>Commercial Building</option>
                        <option>Multi-Unit Residential</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Property Size (sq ft)
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                        placeholder="e.g., 2000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Property Address
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="123 Main Street, Toronto, ON M5V 1A1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Preferred Timeline
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all">
                      <option>As soon as possible</option>
                      <option>Within 1 month</option>
                      <option>Within 3 months</option>
                      <option>Within 6 months</option>
                      <option>Just planning/gathering quotes</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Upload Photos (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-accent transition-colors cursor-pointer">
                      <Upload className="mx-auto text-gray-400 mb-2" size={32} />
                      <p className="text-sm text-gray-600">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        PNG, JPG up to 10MB
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-4 rounded-lg font-semibold transition-all"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setCurrentStep(3)}
                      className="flex-1 bg-accent hover:opacity-90 text-white px-6 py-4 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                    >
                      Continue to Contact Info
                      <ArrowRight className="ml-2" size={20} />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Information */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-2">
                      Contact Information
                    </h2>
                    <p className="text-muted-foreground">
                      How should we reach you with your estimate?
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                        placeholder="Smith"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="john.smith@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="(416) 555-0000"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="contact" value="email" className="text-accent focus:ring-accent" defaultChecked />
                        <span>Email</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="contact" value="phone" className="text-accent focus:ring-accent" />
                        <span>Phone</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="contact" value="either" className="text-accent focus:ring-accent" />
                        <span>Either</span>
                      </label>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-600">
                      By submitting this form, you agree to receive communications from 4M Home Services. We respect your privacy and will never share your information with third parties.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-4 rounded-lg font-semibold transition-all"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-accent hover:opacity-90 text-white px-6 py-4 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                    >
                      Submit Request
                      <CheckCircle className="ml-2" size={20} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Alternative */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Prefer to talk to someone right away?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:4165554000"
                  className="inline-flex items-center justify-center bg-primary hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                >
                  <Phone className="mr-2" size={20} />
                  (416) 555-4M00
                </a>
                <a
                  href="mailto:info@4mhomeservices.ca"
                  className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-primary px-6 py-3 rounded-lg font-semibold transition-all border-2 border-primary"
                >
                  <Mail className="mr-2" size={20} />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-4m bg-white">
        <div className="container-4m">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-8">
              Why Choose 4M Home Services?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">1300+</div>
                <div className="font-semibold text-primary mb-2">Completed Projects</div>
                <p className="text-sm text-muted-foreground">
                  Over a decade of proven excellence in the GTA
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="font-semibold text-primary mb-2">Licensed & Insured</div>
                <p className="text-sm text-muted-foreground">
                  Fully certified professionals you can trust
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">24hr</div>
                <div className="font-semibold text-primary mb-2">Response Time</div>
                <p className="text-sm text-muted-foreground">
                  Fast, detailed estimates when you need them
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
