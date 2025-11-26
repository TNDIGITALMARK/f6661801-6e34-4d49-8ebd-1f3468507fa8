import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, ArrowRight, Wrench, Home, Brush, Sparkles, DoorOpen, Grid3x3, ShieldCheck, Users, Clock, Building2 } from 'lucide-react'

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
              Expert windows, doors, siding, interior trim, and more. Proudly serving the GTA with professional home improvements and over 1300 successful projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/estimate"
                className="inline-flex items-center justify-center bg-accent hover:opacity-90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                GET FREE QUOTE
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

      {/* Services You May Be Interested Section */}
      <section id="services" className="section-4m bg-white">
        <div className="container-4m">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Services you may be interested
            </h2>
            <p className="text-lg text-muted-foreground">
              We offer a lot of different services to meet your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Building2 size={32} />,
                title: "Commercial windows replacement",
                description: "Professional window replacement for businesses, improving energy efficiency and appearance."
              },
              {
                icon: <Grid3x3 size={32} />,
                title: "Interior trim job",
                description: "Installation and finishing of interior trim elements to complete the stylish look of your space."
              },
              {
                icon: <Wrench size={32} />,
                title: "Brick cut out job",
                description: "Brick cutting for new doors, windows, or other architectural features."
              },
              {
                icon: <Home size={32} />,
                title: "Siding job",
                description: "Exterior siding installation to protect and enhance the look of your home."
              },
              {
                icon: <Brush size={32} />,
                title: "Painting job",
                description: "High-quality interior or exterior painting to refresh your space."
              },
              {
                icon: <Sparkles size={32} />,
                title: "Deep home cleaning",
                description: "Deep home cleaning for spotless freshness and cleanliness."
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
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/estimate"
              className="inline-flex items-center justify-center bg-accent hover:opacity-90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-md"
            >
              Get free quote
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Canadian Style Windows Section */}
      <section className="section-4m bg-gray-50">
        <div className="container-4m">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Canadian Style Windows
            </h2>
            <p className="text-lg text-muted-foreground">
              Invest in Canadian Quality: Choose Our Windows for Long-lasting Beauty
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {[
              { name: "Single Hung", image: "/generated/single-hung.png" },
              { name: "Awning", image: "/generated/awning.png" },
              { name: "Casement", image: "/generated/casement.png" },
              { name: "Double Hung", image: "/generated/double-hung.png" },
              { name: "Single Slider", image: "/generated/single-slider.png" },
              { name: "Double Slider", image: "/generated/double-slider.png" },
              { name: "End Vent Slider", image: "/generated/end-vent-slider.png" },
              { name: "Picture", image: "/generated/picture.png" },
              { name: "Fixed Casement", image: "/generated/fixed-casement.png" }
            ].map((window, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 bg-gray-50">
                  <Image
                    src={window.image}
                    alt={`${window.name} window - Canadian style energy-efficient window by 4M Home Services`}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">{window.name}</h3>
                  <Link
                    href={`/windows/canadian/${window.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-accent hover:underline font-medium"
                  >
                    Learn more
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* European Style Windows Section */}
      <section className="section-4m bg-white">
        <div className="container-4m">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              European Style Windows
            </h2>
            <p className="text-lg text-muted-foreground">
              Experience the durability and fine craftsmanship of European windows right here in Canada. Our elegant collection of European windows blends cutting-edge technologies with traditional design, providing unparalleled quality and style for your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "4500 Tilt and Turn", image: "/generated/4500-tilt-and-turn.png" },
              { name: "1400 Series", image: "/generated/1400-series.png" },
              { name: "Evolution 2200 Sliding Door", image: "/generated/evolution-2200-sliding-door.png" }
            ].map((window, index) => (
              <div
                key={index}
                className="bg-white border-2 border-primary/20 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-accent group"
              >
                <div className="relative h-64 bg-gray-50">
                  <Image
                    src={window.image}
                    alt={`${window.name} - European style energy-efficient window by 4M Home Services`}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">{window.name}</h3>
                  <Link
                    href={`/windows/european/${window.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-accent hover:underline font-medium"
                  >
                    Learn more
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entry Doors Section */}
      <section className="section-4m bg-primary text-white">
        <div className="container-4m">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Entry Doors
            </h2>
            <p className="text-lg text-gray-300">
              Safety and elegance: choose the perfect entry door for your home
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Double Entry Door", image: "/generated/double-entry-door.png" },
              { name: "Single Entry Door", image: "/generated/single-entry-door.png" },
              { name: "Single Entry Door with Sidelite Left", image: "/generated/single-entry-door-sidelite-left.png" },
              { name: "Single Entry Door with Sidelite Right", image: "/generated/single-entry-door-sidelite-right.png" },
              { name: "Single Entry Door with Two Sidelites", image: "/generated/single-entry-door-two-sidelites.png" }
            ].map((door, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-accent transition-all duration-300 group"
              >
                <div className="relative h-56 bg-white/95">
                  <Image
                    src={door.image}
                    alt={`${door.name} - Professional entry door installation by 4M Home Services`}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-white">{door.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patio Doors | Capri 3.0 Section */}
      <section className="section-4m bg-white">
        <div className="container-4m">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Patio Doors | Capri 3.0
            </h2>
            <p className="text-xl text-accent mb-2">Incredible features</p>
            <p className="text-lg text-muted-foreground">
              Expand your living space: upgrade your home with our patio door
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-primary mb-6">Standard Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">Premium quality construction</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">Energy-efficient glazing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">Smooth operation mechanisms</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">Weather-resistant seals</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-primary mb-6">Standard Accessories</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">Integrated locking systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">Durable hardware finishes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">Screen door included</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">Professional installation</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-primary mb-6">Optional Extras</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">Hundreds of standard paint colours (Colour match program available)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">Three distinct upgraded hardware lines</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">Secondary security locks (Kicklocks and Topbolts in addition to our twin point lock)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">Energy savings, home comfort from hi-efficiency glass packages</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bi-Folding Doors Section */}
      <section className="section-4m bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-4m">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bi-Folding Doors
            </h2>
            <p className="text-lg text-gray-300">
              Unlock new horizons of design with bifold doors
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-8 text-accent">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-200">
                  Narrow sight lines maximizing light and enhancing your viewing exposure.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-200">
                  Slim front to back profile 3-1/4" on each side minimizes stacking area.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-200">
                  Uninterrupted glass glazing on the exterior for tight compression seals the most tight bi-folding door systems.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-200">
                  Severe weather rating with weathered tracks and unbeatable water and air tightness.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-200">
                  Extremely versatile up to 9' in width and 12' in height, outswing with reversible directions.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-200">
                  Multipoint locking system unique internal panel's pocket design holds first door in place.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-200">
                  Flush bolt clips 4" or 8" flush bolt applicators secure the system when the doors are fully closed.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/estimate"
                className="inline-flex items-center justify-center bg-accent hover:opacity-90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg"
              >
                Get a quote
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="section-4m bg-white">
        <div className="container-4m">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why trust us?
            </h2>
            <p className="text-lg text-muted-foreground">
              At 4M Home Services, we deliver expert window installations backed by years of experience, certified professionals, and a proven track record of customer satisfaction—making us a trusted choice for your home.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-6xl font-bold text-accent mb-2">99%</div>
              <div className="text-xl font-semibold text-primary">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-accent mb-2">50+</div>
              <div className="text-xl font-semibold text-primary">Customers</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-accent mb-2">24/7</div>
              <div className="text-xl font-semibold text-primary">Support</div>
            </div>
          </div>

        </div>
      </section>

      {/* Warranty Section */}
      <section className="section-4m bg-gray-50">
        <div className="container-4m">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Warranty Promise
            </h2>
            <p className="text-lg text-muted-foreground">
              Premium protection for your investment
            </p>
          </div>

          {/* Warranty Coverage Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Workmanship */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-accent">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Wrench className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary">Workmanship</h3>
              </div>
              <p className="text-2xl font-bold text-accent mb-2">Lifetime</p>
              <p className="text-muted-foreground">Our installation quality guaranteed for life</p>
            </div>

            {/* Windows & Frames */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-accent">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Grid3x3 className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary">Window Frames</h3>
              </div>
              <p className="text-2xl font-bold text-accent mb-2">Lifetime</p>
              <p className="text-muted-foreground">Protection against defects, peeling, and fading</p>
            </div>

            {/* Hardware */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-accent">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary">Hardware</h3>
              </div>
              <p className="text-2xl font-bold text-accent mb-2">Lifetime</p>
              <p className="text-muted-foreground">All hardware components covered</p>
            </div>

            {/* Glass Units */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-accent">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Sparkles className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary">Glass Units</h3>
              </div>
              <p className="text-2xl font-bold text-accent mb-2">Lifetime</p>
              <p className="text-muted-foreground">Sealed against failure and condensation</p>
            </div>

            {/* Doors */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-accent">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <DoorOpen className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary">Doors</h3>
              </div>
              <p className="text-2xl font-bold text-accent mb-2">Lifetime</p>
              <p className="text-muted-foreground">Steel doors and frames fully protected</p>
            </div>

            {/* Transferable */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-accent">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Users className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary">Transferable</h3>
              </div>
              <p className="text-2xl font-bold text-accent mb-2">60 Days</p>
              <p className="text-muted-foreground">Notice required for warranty transfer</p>
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border-l-4 border-primary">
            <div className="flex items-start gap-4">
              <ShieldCheck className="text-primary flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Full Coverage Warranty</h3>
                <p className="text-muted-foreground mb-4">
                  Our warranty covers all products and services provided on a <strong className="text-primary">Supply & Install</strong> basis. Your warranty is non-prorated and transferable to new homeowners.
                </p>
                <Link
                  href="/warranty"
                  className="inline-flex items-center text-accent hover:underline font-semibold"
                >
                  View full warranty details
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-4m bg-primary text-white">
        <div className="container-4m text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how we can enhance your home with quality windows, doors, and professional services.
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
