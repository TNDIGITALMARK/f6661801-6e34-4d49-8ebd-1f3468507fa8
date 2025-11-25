import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, Mail, Star, ArrowRight, Wrench, Home, Brush, Sparkles, DoorOpen, Grid3x3 } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/generated/main-house.png"
            alt="Beautiful home exterior renovation by 4M Home Services"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
        </div>

        <div className="relative container-4m h-full flex items-center">
          <div className="max-w-2xl text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Home with Trusted Craftsmanship
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Proudly serving the GTA with professional home improvements, direct factory connections, and over 1300 successful projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/estimate"
                className="inline-flex items-center justify-center bg-accent hover:opacity-90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                REQUEST A FREE ESTIMATE
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <a
                href="tel:4165554000"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all border border-white/30"
              >
                <Phone className="mr-2" size={20} />
                (416) 555-4M00
              </a>
            </div>
            <div className="flex items-center gap-8 pt-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-accent" size={20} />
                <span>1300+ Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-accent" size={20} />
                <span>Factory Direct Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-accent" size={20} />
                <span>Licensed Installers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="section-4m bg-white">
        <div className="container-4m">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive home improvement solutions delivered with quality craftsmanship and attention to detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <DoorOpen size={32} />,
                title: "Windows & Doors",
                description: "Professional installation of energy-efficient windows and doors",
                price: "Starting at $2,500"
              },
              {
                icon: <Home size={32} />,
                title: "Siding Installation",
                description: "Premium vinyl and fiber cement siding for lasting protection",
                price: "$8,000 - $15,000"
              },
              {
                icon: <Grid3x3 size={32} />,
                title: "Interior Trim Work",
                description: "Custom trim, molding, and millwork for elegant interiors",
                price: "$1,200 per room"
              },
              {
                icon: <Wrench size={32} />,
                title: "Brick Cutouts",
                description: "Precise brick cutting for windows and door installations",
                price: "Starting at $500"
              },
              {
                icon: <Brush size={32} />,
                title: "Painting Services",
                description: "Interior and exterior painting with premium finishes",
                price: "$4,000 avg home"
              },
              {
                icon: <Sparkles size={32} />,
                title: "Deep Home Cleaning",
                description: "Professional cleaning services for residential and commercial",
                price: "$300 per visit"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-accent mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <p className="text-accent font-semibold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="section-4m bg-primary text-white">
        <div className="container-4m">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Work
            </h2>
            <p className="text-lg text-gray-300">
              See the quality and craftsmanship that sets us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { src: "/generated/project-1.png", alt: "Siding installation project" },
              { src: "/generated/project-2.png", alt: "Window and door installation" },
              { src: "/generated/project-3.png", alt: "Interior trim work project" }
            ].map((project, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-64">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between bg-secondary rounded-xl p-8 gap-6">
            <div className="flex items-center gap-4">
              <div className="text-5xl font-bold text-accent">1300+</div>
              <div>
                <div className="text-xl font-semibold">Successful Projects</div>
                <div className="text-gray-300">Completed with excellence</div>
              </div>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center bg-accent hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-all"
            >
              View Full Gallery
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-4m bg-white">
        <div className="container-4m">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real feedback from real customers who trust us with their homes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Thompson",
                location: "Oakville",
                rating: 5,
                text: "4M Home Services transformed our home with beautiful new windows and doors. The installation was flawless and completed ahead of schedule. Highly recommend their professional team."
              },
              {
                name: "James Wilson",
                location: "Mississauga",
                rating: 5,
                text: "After getting quotes from five contractors, 4M offered the best value through their factory connections. Our siding project looks incredible and the price was unbeatable."
              },
              {
                name: "Maria Gonzalez",
                location: "Toronto",
                rating: 5,
                text: "The attention to detail in our trim work was exceptional. Every corner was perfect and the cleanup was thorough. These guys know their craft."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section id="about" className="section-4m bg-gray-50">
        <div className="container-4m">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Meet Our Qualified Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Experienced professionals committed to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["John M.", "Michael S.", "David R.", "Chris P."].map((name, index) => (
              <div key={index} className="text-center">
                <div className="relative w-full aspect-[3/4] mb-4 bg-gradient-to-br from-primary to-secondary rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                    {name.split(' ')[0]}
                  </div>
                </div>
                <h3 className="font-semibold text-primary">{name}</h3>
                <p className="text-sm text-muted-foreground">Lead Installer</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 shadow-md">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">10+</div>
                <div className="text-primary font-semibold">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-primary font-semibold">Licensed & Insured</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">1300+</div>
                <div className="text-primary font-semibold">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="section-4m bg-primary text-white">
        <div className="container-4m">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Contact Us
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Ready to transform your home? Get in touch with our team today for a free consultation and estimate.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <a href="tel:4165554000" className="text-gray-300 hover:text-accent transition-colors">
                      (416) 555-4M00
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@4mhomeservices.ca" className="text-gray-300 hover:text-accent transition-colors">
                      info@4mhomeservices.ca
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 text-gray-900">
              <h3 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="(416) 555-0000"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent hover:opacity-90 text-white px-6 py-4 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
