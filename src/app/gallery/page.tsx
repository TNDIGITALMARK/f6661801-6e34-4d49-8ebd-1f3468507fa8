import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Calendar, Star } from 'lucide-react'

export default function GalleryPage() {
  const projects = [
    {
      title: "Oakville Windows Renovation",
      location: "Oakville, ON",
      category: "Windows & Doors",
      date: "November 2024",
      image: "/generated/main-house.png",
      description: "Complete home window replacement featuring triple-pane energy efficient units with professional installation and warranty.",
      rating: 5,
      customer: "Sarah Thompson"
    },
    {
      title: "Mississauga Siding Project",
      location: "Mississauga, ON",
      category: "Siding Installation",
      date: "October 2024",
      image: "/generated/project-1.png",
      description: "Full exterior siding renovation using premium vinyl materials with color-coordinated trim work.",
      rating: 5,
      customer: "James Wilson"
    },
    {
      title: "Modern Window Installation",
      location: "Toronto, ON",
      category: "Windows & Doors",
      date: "September 2024",
      image: "/generated/project-2.png",
      description: "Contemporary window and door installation showcasing modern architectural design with energy efficiency.",
      rating: 5,
      customer: "Michael Chen"
    },
    {
      title: "Interior Trim Excellence",
      location: "Brampton, ON",
      category: "Interior Trim",
      date: "August 2024",
      image: "/generated/project-3.png",
      description: "Elegant interior trim work with crown molding and baseboards throughout the home.",
      rating: 5,
      customer: "Maria Gonzalez"
    },
    {
      title: "Complete Home Renovation",
      location: "Markham, ON",
      category: "Multi-Service",
      date: "July 2024",
      image: "/generated/main-house.png",
      description: "Comprehensive renovation including windows, siding, and exterior painting for complete transformation.",
      rating: 5,
      customer: "David Lee"
    },
    {
      title: "Siding & Trim Package",
      location: "Vaughan, ON",
      category: "Siding Installation",
      date: "June 2024",
      image: "/generated/project-1.png",
      description: "Premium siding installation with custom trim work creating a modern and cohesive exterior.",
      rating: 5,
      customer: "Jennifer Brown"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-primary text-white py-16">
        <div className="container-4m">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Project Gallery
            </h1>
            <p className="text-lg text-gray-300">
              Explore our portfolio of over 1300 successful home improvement projects across the Greater Toronto Area. Each project showcases our commitment to quality craftsmanship and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b">
        <div className="container-4m py-6">
          <div className="flex flex-wrap gap-4">
            {["All Projects", "Windows & Doors", "Siding", "Interior Trim", "Painting", "Multi-Service"].map((filter, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  index === 0
                    ? "bg-accent text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-4m">
        <div className="container-4m">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{project.date}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-1">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-accent text-accent" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{project.customer}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center bg-primary hover:opacity-90 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg">
              Load More Projects
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-4m bg-primary text-white">
        <div className="container-4m">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join over 1300 satisfied customers who have transformed their homes with 4M Home Services. Get your free estimate today and let us bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/estimate"
                className="inline-flex items-center justify-center bg-accent hover:opacity-90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                REQUEST FREE ESTIMATE
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all border border-white/30"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
