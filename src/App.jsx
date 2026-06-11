import { useState, useEffect, useRef } from 'react'

/* =====================================================
   NAVIGATION
   ===================================================== */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'DIY', href: '#diy' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#111111] shadow-lg shadow-black/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group" aria-label="Blue City Cycles Home">
          <span className="text-[#3a9bd5] text-2xl font-bold leading-none">❄</span>
          <span className="font-display font-bold text-2xl tracking-wide text-white uppercase">
            Blue City Cycles
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="nav-link text-bcc-text text-sm font-medium tracking-wide uppercase hover:text-white transition-colors duration-200 pb-1"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              id="nav-cta"
              className="bg-bcc-red text-white px-5 py-2 text-sm font-semibold uppercase tracking-wide hover:bg-[#dd3300] transition-colors duration-200"
            >
              Book a Repair
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-btn"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#111111] border-t border-bcc-divider ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="block px-6 py-4 text-bcc-text uppercase tracking-widest text-sm font-medium border-b border-bcc-divider hover:text-bcc-red hover:bg-bcc-surface transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="block px-6 py-4 bg-bcc-red text-white uppercase tracking-widest text-sm font-semibold text-center hover:bg-[#dd3300] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Book a Repair
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

/* =====================================================
   HERO
   ===================================================== */
function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gear-pattern"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-bcc-black/80 via-bcc-black/70 to-bcc-black" />

      {/* Animated background accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-bcc-red/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-bcc-blue/5 blur-3xl pointer-events-none" />

      {/* Vertical accent line */}
      <div className="absolute left-8 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-bcc-red to-transparent hidden lg:block" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Pre-headline label */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-bcc-red" />
          <span className="section-label">South Side · Chicago · Est. 2009</span>
          <div className="h-px w-12 bg-bcc-red" />
        </div>

        {/* Main headline */}
        <h1 className="hero-title text-white mb-6">
          Chicago's Neighborhood<br />
          <span className="text-bcc-red">Bike Shop.</span>
        </h1>

        {/* Subtext */}
        <p className="text-bcc-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 font-inter leading-relaxed">
          Full-service repairs, custom builds, and community on the South Side since 2009.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            id="hero-services-btn"
            href="#services"
            className="bg-bcc-red text-white px-8 py-4 font-display font-bold text-lg uppercase tracking-widest hover:bg-[#dd3300] transition-all duration-200 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-red-900/40 w-full sm:w-auto text-center"
          >
            Our Services
          </a>
          <a
            id="hero-find-us-btn"
            href="#contact"
            className="border border-white text-white px-8 py-4 font-display font-bold text-lg uppercase tracking-widest hover:bg-white hover:text-bcc-black transition-all duration-200 hover:translate-y-[-2px] w-full sm:w-auto text-center"
          >
            Find Us
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-bcc-muted text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-bcc-muted to-transparent" />
        </div>
      </div>
    </section>
  )
}

/* =====================================================
   ABOUT
   ===================================================== */
function About() {
  return (
    <section id="about" className="py-24 bg-bcc-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — Pull quote */}
          <div>
            <div className="red-rule" />
            <span className="section-label block mb-4">About the Shop</span>
            <blockquote className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              "The best flat-fixers on the South Side. Period."
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="text-5xl text-bcc-blue">❄</div>
              <div>
                <div className="font-display font-bold text-xl text-white uppercase tracking-wide">Owen Lloyd</div>
                <div className="text-bcc-muted text-sm">Owner · Blue City Cycles</div>
              </div>
            </div>
          </div>

          {/* Right — Body copy */}
          <div className="border-l border-bcc-divider pl-12">
            <p className="text-bcc-text text-lg leading-relaxed mb-6">
              We're a full-service shop on the South Side of Chicago, selling Masi, Haro, Del Sol,
              Linus, and other special order makes and models. Owned by Owen Lloyd since 2009, we've
              got a crew of the best flat-fixers and friendliest mechanics in the city.
            </p>
            <p className="text-bcc-muted text-lg leading-relaxed mb-8">
              We also have a shop cat named Vanya. Come bring us your broken stuff.
            </p>

            {/* Brand tags */}
            <div className="flex flex-wrap gap-3">
              {['Masi', 'Haro', 'Del Sol', 'Linus', 'Special Orders'].map((brand) => (
                <span
                  key={brand}
                  className="border border-bcc-divider text-bcc-muted text-sm px-4 py-1.5 uppercase tracking-widest font-inter hover:border-bcc-red hover:text-bcc-text transition-colors duration-200"
                >
                  {brand}
                </span>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-bcc-divider">
              {[
                { num: '15+', label: 'Years Open' },
                { num: '1', label: 'Shop Cat' },
                { num: '∞', label: 'Good Vibes' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display font-bold text-3xl text-bcc-red">{stat.num}</div>
                  <div className="text-bcc-muted text-xs tracking-widest uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =====================================================
   SERVICES
   ===================================================== */
const SERVICES = [
  { name: 'Labor', price: '$65/hr', icon: '🔧' },
  { name: 'Flat Repair', price: '$10–$30', icon: '🛞' },
  { name: 'Tune Up', price: '$85–$145', icon: '⚙️' },
  { name: 'Full Overhaul', price: '$260', icon: '🚲' },
  { name: 'Adjustments', price: '$20–$30', icon: '🔩' },
  { name: 'Wheel True', price: '$20–$30', icon: '🔄' },
  { name: 'Wheel Build', price: '$65', icon: '⭕' },
  { name: 'Bearing Overhaul', price: '$25–$75', icon: '🎯', subtitle: 'Hub, BB & Headset' },
  { name: 'Steel Frame Modification & Repair', price: 'Quote Required', icon: '🏗️' },
  { name: 'Custom Powder Coating', price: 'Starting at $225', icon: '🎨' },
]

function Services() {
  return (
    <section id="services" className="py-24 bg-bcc-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <div className="red-rule" />
          <span className="section-label block mb-3">What We Do</span>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-white uppercase">
            Services & Pricing
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-10">
          {SERVICES.map((service) => (
            <div
              key={service.name}
              className="service-card bg-bcc-surface border-l-4 border-bcc-divider p-6 flex items-center justify-between group cursor-default"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{service.icon}</span>
                <div>
                  <div className="font-display font-bold text-xl text-white uppercase tracking-wide group-hover:text-bcc-red transition-colors duration-200">
                    {service.name}
                  </div>
                  {service.subtitle && (
                    <div className="text-bcc-muted text-xs mt-0.5">{service.subtitle}</div>
                  )}
                </div>
              </div>
              <div className="text-right">
                <span className="font-display font-bold text-xl text-bcc-red whitespace-nowrap">
                  {service.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Banner */}
        <div className="bg-[#8b1500] px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display font-bold text-2xl md:text-3xl text-white uppercase tracking-wide">
            Estimates are always free.
          </p>
          <p className="text-white/80 text-base font-inter max-w-md text-center sm:text-right">
            Bring it in and we'll diagnose it — no charge, no pressure.
          </p>
        </div>
      </div>
    </section>
  )
}

/* =====================================================
   DIY RESOURCES
   ===================================================== */
const DIY_VIDEOS = [
  {
    title: 'How to Fix a Flat Tire',
    desc: 'The #1 skill every cyclist needs. We walk you through patching and tube replacement.',
    id: 'diy-flat',
  },
  {
    title: 'How to Wrap Handlebars',
    desc: 'Give your bike a fresh feel with new bar tape. Step-by-step from start to finish.',
    id: 'diy-bars',
  },
  {
    title: 'How to Wash a Bike',
    desc: 'Keep your drivetrain running smooth with a proper cleaning routine.',
    id: 'diy-wash',
  },
]

function DiyCard({ video }) {
  return (
    <div
      id={video.id}
      className="diy-card bg-bcc-surface p-0 overflow-hidden cursor-pointer group"
    >
      {/* Thumbnail */}
      <div className="relative bg-[#111] h-48 flex items-center justify-center overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 chain-pattern opacity-30" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-bcc-black/60 to-transparent" />
        {/* Play button */}
        <div className="play-btn relative z-10 w-16 h-16 rounded-full bg-bcc-red flex items-center justify-center group-hover:bg-[#dd3300]">
          <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        {/* Duration badge */}
        <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-0.5">
          Video Guide
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        <h3 className="font-display font-bold text-xl uppercase text-white tracking-wide mb-2 group-hover:text-bcc-red transition-colors duration-200">
          {video.title}
        </h3>
        <p className="text-bcc-muted text-sm leading-relaxed">{video.desc}</p>
        <div className="mt-4 flex items-center gap-2 text-bcc-red text-sm font-semibold uppercase tracking-widest">
          <span>Watch Now</span>
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  )
}

function Diy() {
  return (
    <section id="diy" className="py-24 bg-bcc-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <div className="red-rule" />
          <span className="section-label block mb-3">DIY Resources</span>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-white uppercase">
            Keep It Rolling
          </h2>
          <p className="text-bcc-muted text-lg mt-4 max-w-xl font-inter">
            Keep your bike running smooth between visits. Here are a few videos we recommend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DIY_VIDEOS.map((v) => (
            <DiyCard key={v.id} video={v} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-bcc-muted text-sm">
            Still stuck?{' '}
            <a href="#contact" className="text-bcc-red hover:text-[#dd3300] underline underline-offset-4">
              Bring it in
            </a>{' '}
            — we'll get it sorted.
          </p>
        </div>
      </div>
    </section>
  )
}

/* =====================================================
   CONTACT & HOURS
   ===================================================== */
function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const HOURS = [
    { day: 'Monday – Friday', hours: '12pm – 6pm' },
    { day: 'Saturday & Sunday', hours: '12pm – 5pm' },
  ]

  return (
    <section id="contact" className="py-24 bg-bcc-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <div className="red-rule" />
          <span className="section-label block mb-3">Get In Touch</span>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-white uppercase">
            Find Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Hours + Info */}
          <div className="space-y-10">
            {/* Hours */}
            <div>
              <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wide mb-5 flex items-center gap-3">
                <span className="text-bcc-red">⏰</span> Shop Hours
              </h3>
              <div className="space-y-3">
                {HOURS.map(({ day, hours }) => (
                  <div
                    key={day}
                    className="flex justify-between items-center py-4 border-b border-bcc-divider"
                  >
                    <span className="text-bcc-text font-medium">{day}</span>
                    <span className="font-display font-bold text-xl text-bcc-red">{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div>
              <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wide mb-5 flex items-center gap-3">
                <span className="text-bcc-red">📞</span> Contact Info
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+13122253780"
                  id="contact-phone"
                  className="flex items-center gap-4 text-bcc-text hover:text-bcc-red transition-colors group"
                >
                  <div className="w-10 h-10 bg-bcc-surface flex items-center justify-center text-bcc-red group-hover:bg-bcc-red group-hover:text-white transition-all duration-200">
                    📞
                  </div>
                  <div>
                    <div className="text-xs text-bcc-muted uppercase tracking-widest">Phone</div>
                    <div className="font-medium">312-225-3780</div>
                  </div>
                </a>
                <a
                  href="mailto:bluecitycycles@gmail.com"
                  id="contact-email"
                  className="flex items-center gap-4 text-bcc-text hover:text-bcc-red transition-colors group"
                >
                  <div className="w-10 h-10 bg-bcc-surface flex items-center justify-center text-bcc-red group-hover:bg-bcc-red group-hover:text-white transition-all duration-200">
                    📧
                  </div>
                  <div>
                    <div className="text-xs text-bcc-muted uppercase tracking-widest">Email</div>
                    <div className="font-medium">bluecitycycles@gmail.com</div>
                  </div>
                </a>
                <a
                  href="https://maps.google.com/?q=3201+S+Halsted+St,+Chicago,+IL+60608"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-address"
                  className="flex items-center gap-4 text-bcc-text hover:text-bcc-red transition-colors group"
                >
                  <div className="w-10 h-10 bg-bcc-surface flex items-center justify-center text-bcc-red group-hover:bg-bcc-red group-hover:text-white transition-all duration-200">
                    📍
                  </div>
                  <div>
                    <div className="text-xs text-bcc-muted uppercase tracking-widest">Address</div>
                    <div className="font-medium">3201 S Halsted St<br />Chicago, IL 60608</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="overflow-hidden border border-bcc-divider">
              <iframe
                title="Blue City Cycles Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.123456789!2d-87.6467!3d41.8300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c6b8b8b8b8b%3A0x0!2s3201+S+Halsted+St%2C+Chicago%2C+IL+60608!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="280"
                style={{ border: 0, filter: 'grayscale(30%) contrast(1.1)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="bg-bcc-surface p-8">
            <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wide mb-6">
              Send a Message
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 bg-bcc-red/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-bcc-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-display font-bold text-2xl text-white uppercase mb-3">Thanks!</h4>
                <p className="text-bcc-muted text-base">
                  We'll be in touch soon. In the meantime, feel free to call us at{' '}
                  <a href="tel:+13122253780" className="text-bcc-red">312-225-3780</a>.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', subject: '', message: '' }) }}
                  className="mt-8 text-bcc-muted text-sm underline hover:text-bcc-text transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-bcc-muted text-xs uppercase tracking-widest mb-2">
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-bcc-muted text-xs uppercase tracking-widest mb-2">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="you@email.com"
                      className="w-full px-4 py-3 text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-bcc-muted text-xs uppercase tracking-widest mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="e.g. Tune-up inquiry, flat repair..."
                    className="w-full px-4 py-3 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-bcc-muted text-xs uppercase tracking-widest mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us about your bike and what you need..."
                    className="w-full px-4 py-3 text-sm resize-none"
                  />
                </div>
                <button
                  id="submit-btn"
                  type="submit"
                  className="w-full bg-bcc-red text-white py-4 font-display font-bold text-lg uppercase tracking-widest hover:bg-[#dd3300] transition-all duration-200 hover:shadow-lg hover:shadow-red-900/40 hover:translate-y-[-1px]"
                >
                  Send Message
                </button>
                <p className="text-bcc-muted text-xs text-center">
                  Or call us directly at{' '}
                  <a href="tel:+13122253780" className="text-bcc-red">312-225-3780</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* =====================================================
   FOOTER
   ===================================================== */
function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-bcc-divider py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-bcc-blue text-3xl">❄</span>
            <span className="font-display font-bold text-2xl uppercase tracking-wide text-white">
              Blue City Cycles
            </span>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-widest">
              {['Services', 'About', 'DIY', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-bcc-muted hover:text-bcc-red transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="h-px w-24 bg-bcc-divider" />

          {/* Address & copyright */}
          <div className="space-y-1">
            <p className="text-bcc-muted text-sm">3201 S Halsted St, Chicago IL 60608</p>
            <p className="text-bcc-muted text-sm">
              <a href="tel:+13122253780" className="hover:text-bcc-red transition-colors">312-225-3780</a>
              {' · '}
              <a href="mailto:bluecitycycles@gmail.com" className="hover:text-bcc-red transition-colors">
                bluecitycycles@gmail.com
              </a>
            </p>
            <p className="text-bcc-muted text-sm">© 2025 Blue City Cycles · All rights reserved.</p>
            <p className="text-[#555] text-xs tracking-widest uppercase mt-2">
              Proudly independent since 2009
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* =====================================================
   APP ROOT
   ===================================================== */
export default function App() {
  return (
    <div className="bg-bcc-black min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Diy />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
