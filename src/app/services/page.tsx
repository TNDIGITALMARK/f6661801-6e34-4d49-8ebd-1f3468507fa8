import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Phone, Building2, Grid3x3, Wrench, Home, Brush, Sparkles, DoorOpen, Zap, Shield, Clock, Users, Award } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/generated/main-house.png"
            alt="4M Home Services - Professional home renovation services"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
        </div>

        <div className="relative container-4m h-full flex items-center">
          <div className="max-w-3xl text-white space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Comprehensive home improvement solutions for every need. From windows and doors to complete renovations, we deliver excellence in every project.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="section-4m bg-white">
        <div className="container-4m">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Complete Home Improvement Services
            </h2>
            <p className="text-lg text-muted-foreground">
              We offer a wide range of professional services to transform your home with quality craftsmanship and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Windows & Doors */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-accent transition-all duration-300 group">
              <div className="text-accent mb-4 group-hover:scale-110 transition-transform">
                <Grid3x3 size={48} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Windows & Doors</h3>
              <p className="text-muted-foreground mb-4">
                Expert installation of Canadian and European style windows, entry doors, patio doors, and bi-folding door systems.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                  <span>Energy-efficient window replacement</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                  <span>Premium entry door installation</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                  <span>Patio & bi-folding doors</span>
                </li>
              </ul>
              <Link
                href="/#canadian-windows"
                className="inline-flex items-center text-accent hover:underline font-semibold"
              >
                Explore windows & doors
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            {/* Commercial Windows */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-accent transition-all duration-300 group">
              <div className="text-accent mb-4 group-hover:scale-110 transition-transform">
                <Building2 size={48} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Commercial Windows</h3>
              <p className="text-muted-foreground mb-4">
                Professional window replacement for businesses, improving energy efficiency, security, and curb appeal.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                  <span>Storefront window systems</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                  <span>Office building windows</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                  <span>Commercial door systems</span>
                </li>
              </ul>
              <Link
                href="/estimate"
                className="inline-flex items-center text-accent hover:underline font-semibold"
              >
                Request quote
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            {/* Siding Installation */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-accent transition-all duration-300 group">
              <div className="text-accent mb-4 group-hover:scale-110 transition-transform">
                <Home size={48} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Siding Installation</h3>
              <p className="text-muted-foreground mb-4">
                Exterior siding installation to protect and enhance the aesthetic appeal of your home with durable materials.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                  <span>Vinyl siding installation</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                  <span>Fiber cement siding</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                  <span>Weather-resistant options</span>
                </li>
              </ul>
              <Link
                href="/estimate"
                className="inline-flex items-center text-accent hover:underline font-semibold"
              >
                Get started
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            {/* Interior Trim */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-accent transition-all duration-300 group">
              <div className="text-accent mb-4 group-hover:scale-110 transition-transform">
                <Wrench size={48} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Interior Trim Work</h3>
              <p className="text-muted-foreground mb-4">
                Installation and finishing of interior trim elements including baseboards, crown molding, door casings, and more.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                  <span>Baseboard & crown molding</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                  <span>Door & window casings</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                  <span>Wainscoting & paneling</span>
                </li>
              </ul>
              <Link
                href="/estimate"
                className="inline-flex items-center text-accent hover:underline font-semibold"
              >
                Learn more
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            {/* Brick Cutout */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-accent transition-all duration-300 group">
              <div className="text-accent mb-4 group-hover:scale-110 transition-transform">
                <Zap size={48} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Brick Cutout Services</h3>
              <p className="text-muted-foreground mb-4">
                Professional brick cutting for new doors, windows, or other architectural features with precision and care.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                  <span>Window opening creation</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                  <span>Door opening installation</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                  <span>Structural support included</span>
                </li>
              </ul>
              <Link
                href="/estimate"
                className="inline-flex items-center text-accent hover:underline font-semibold"
              >
                Request consultation
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            {/* Painting Services */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-accent transition-all duration-300 group">
              <div className="text-accent mb-4 group-hover:scale-110 transition-transform">
                <Brush size={48} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Painting Services</h3>
              <p className="text-muted-foreground mb-4">
                High-quality interior and exterior painting to refresh your space with precision and lasting beauty.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                  <span>Interior room painting</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                  <span>Exterior house painting</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                  <span>Premium paint products</span>
                </li>
              </ul>
              <Link
                href="/estimate"
                className="inline-flex items-center text-accent hover:underline font-semibold"
              >
                View color options
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            {/* Deep Home Cleaning */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-accent transition-all duration-300 group">
              <div className="text-accent mb-4 group-hover:scale-110 transition-transform">
                <Sparkles size={48} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Deep Home Cleaning</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive deep cleaning services for spotless freshness and cleanliness throughout your home.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                  <span>Post-renovation cleaning</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                  <span>Move-in/move-out cleaning</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                  <span>Eco-friendly products</span>
                </li>
              </ul>
              <Link
                href="/estimate"
                className="inline-flex items-center text-accent hover:underline font-semibold"
              >
                Schedule cleaning
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-4m bg-gray-50">
        <div className="container-4m">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose 4M Home Services?
            </h2>
            <p className="text-lg text-muted-foreground">
              We deliver exceptional quality and service on every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Expert Craftsmanship</h3>
              <p className="text-muted-foreground">
                Licensed installers with years of experience and proven expertise
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Lifetime Warranty</h3>
              <p className="text-muted-foreground">
                Comprehensive warranty coverage on workmanship and materials
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">On-Time Completion</h3>
              <p className="text-muted-foreground">
                We respect your time and complete projects within agreed timelines
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">1300+ Projects</h3>
              <p className="text-muted-foreground">
                Over 1300 satisfied customers across the Greater Toronto Area
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="section-4m bg-white">
        <div className="container-4m">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple, transparent, and designed for your convenience
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Consultation</h3>
              <p className="text-muted-foreground">
                Free in-home consultation to understand your needs and vision
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Quote</h3>
              <p className="text-muted-foreground">
                Detailed, transparent pricing with no hidden fees or surprises
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Installation</h3>
              <p className="text-muted-foreground">
                Professional installation by licensed experts with minimal disruption
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Follow-Up</h3>
              <p className="text-muted-foreground">
                Post-project inspection and lifetime warranty support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-4m bg-primary text-white">
        <div className="container-4m text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how we can transform your home with our professional services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/estimate"
              className="inline-flex items-center justify-center bg-accent hover:opacity-90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg"
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
      </section>
    </div>
  )
}
