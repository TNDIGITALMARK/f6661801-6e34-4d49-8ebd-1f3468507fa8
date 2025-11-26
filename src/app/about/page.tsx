import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, ArrowRight, Award, Users, Clock, ShieldCheck, Target, Heart, Wrench } from 'lucide-react'

export const metadata = {
  title: "About Us - 4M Home Services | Expert Home Renovation in GTA",
  description: "Learn about 4M Home Services - your trusted partner for window and door installation, siding, interior trim, and home improvements. Over 1300 successful projects in the Greater Toronto Area.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/generated/main-house.png"
            alt="4M Home Services team"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>

        <div className="relative container-4m h-full flex items-center">
          <div className="max-w-3xl text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Building Trust, One Project at a Time
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Serving the Greater Toronto Area with professional home improvement services since day one. Your home deserves the best, and we deliver excellence in every detail.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-4m bg-white">
        <div className="container-4m">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  4M Home Services was founded with a simple mission: to provide homeowners in the Greater Toronto Area with exceptional quality home improvements at honest prices.
                </p>
                <p>
                  What started as a small team of passionate craftsmen has grown into one of the most trusted home services companies in the GTA, with over <strong className="text-primary">1,300 successful projects</strong> completed.
                </p>
                <p>
                  We believe that every home tells a story, and we're honored to be part of yours. From window and door installations to complete exterior transformations, we treat every project with the care and attention it deserves.
                </p>
                <p>
                  Our commitment to quality, transparency, and customer satisfaction has earned us the trust of hundreds of homeowners across the region.
                </p>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/generated/main-house.png"
                alt="4M Home Services project showcase"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-4m bg-gray-50">
        <div className="container-4m">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              These principles guide everything we do, from the first consultation to the final walkthrough.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck size={40} />,
                title: "Quality Craftsmanship",
                description: "We use only premium materials and employ skilled, licensed installers who take pride in their work. Every project meets our rigorous quality standards."
              },
              {
                icon: <Heart size={40} />,
                title: "Customer-First Approach",
                description: "Your satisfaction is our priority. We listen to your needs, provide honest recommendations, and ensure you're informed every step of the way."
              },
              {
                icon: <Target size={40} />,
                title: "Attention to Detail",
                description: "From precise measurements to perfect finishes, we obsess over the details that make your home improvement project truly exceptional."
              },
              {
                icon: <Users size={40} />,
                title: "Professional Team",
                description: "Our certified installers and customer service team are dedicated professionals who treat your home with respect and care."
              },
              {
                icon: <Award size={40} />,
                title: "Factory Direct Pricing",
                description: "We work directly with manufacturers to bring you the best products at fair, transparent prices—no hidden fees or surprises."
              },
              {
                icon: <Clock size={40} />,
                title: "Timely Delivery",
                description: "We respect your time. Projects are completed on schedule, and our team arrives when promised, ready to work."
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-accent mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By The Numbers Section */}
      <section className="section-4m bg-primary text-white">
        <div className="container-4m">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Track Record
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "1300+", label: "Projects Completed" },
              { number: "99%", label: "Customer Satisfaction" },
              { number: "50+", label: "Happy Clients" },
              { number: "24/7", label: "Customer Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-4m bg-white">
        <div className="container-4m">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What We Do Best
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive home improvement services designed to enhance your home's beauty, comfort, and value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Window & Door Installation",
                description: "Expert installation of Canadian and European style windows, entry doors, patio doors, and bi-folding doors. Energy-efficient solutions that enhance your home's comfort and curb appeal.",
                features: ["Energy-efficient glazing", "Professional installation", "Lifetime warranty", "Factory direct pricing"]
              },
              {
                title: "Exterior Renovations",
                description: "Transform your home's exterior with premium siding installation, brick cutouts for new openings, and complete facade renovations.",
                features: ["Premium materials", "Weather-resistant", "Custom designs", "Expert craftsmanship"]
              },
              {
                title: "Interior Finishing",
                description: "Precision interior trim work and finishing touches that complete your space with style and sophistication.",
                features: ["Custom trim work", "Perfect finishes", "Attention to detail", "Quality materials"]
              },
              {
                title: "Additional Services",
                description: "Professional painting services and deep home cleaning to keep your home looking its absolute best.",
                features: ["Interior & exterior painting", "Deep cleaning services", "Flexible scheduling", "Satisfaction guaranteed"]
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-4m bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-4m">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Homeowners Choose 4M
            </h2>
            <p className="text-lg text-gray-300">
              We're not just contractors—we're your partners in creating the home of your dreams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Wrench size={32} />,
                title: "Licensed & Insured",
                description: "All our installers are fully licensed, insured, and certified professionals."
              },
              {
                icon: <ShieldCheck size={32} />,
                title: "Lifetime Warranty",
                description: "Industry-leading lifetime warranty on workmanship, materials, and products."
              },
              {
                icon: <Award size={32} />,
                title: "Quality Materials",
                description: "We partner with top manufacturers to bring you the best products available."
              },
              {
                icon: <Users size={32} />,
                title: "Experienced Team",
                description: "Decades of combined experience in home improvement and renovation."
              },
              {
                icon: <Heart size={32} />,
                title: "Customer Focus",
                description: "Your satisfaction is our success. We go above and beyond for every client."
              },
              {
                icon: <Phone size={32} />,
                title: "24/7 Support",
                description: "Questions? Concerns? We're here for you around the clock."
              }
            ].map((reason, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all"
              >
                <div className="text-accent mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-gray-300 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-4m bg-white">
        <div className="container-4m">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center text-white shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the hundreds of satisfied homeowners who trusted 4M Home Services with their home improvements. Let's make your vision a reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/estimate"
                className="inline-flex items-center justify-center bg-accent hover:opacity-90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Free Estimate
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
          </div>
        </div>
      </section>
    </div>
  )
}
