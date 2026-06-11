import { useState, useEffect } from 'react'

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
    <nav id="main-nav" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-[#e0e0e0] shadow-lg shadow-black/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group" aria-label="Blue City Cycles Home">
          <span className="text-[#478B8D] text-3xl font-bold leading-none" style={{ filter: 'drop-shadow(0 0 6px #478B8D)' }}>❄</span>
          <span className="font-display font-bold text-2xl uppercase tracking-wide text-[#111111] hover:text-[#478B8D]">Blue City Cycles</span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="nav-link text-[#111111] text-sm font-medium tracking-wide uppercase hover:text-[#111111] transition-colors duration-200 pb-1">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" id="nav-cta" className="bg-[#E4D329] text-white px-5 py-2 text-sm font-semibold uppercase tracking-wide w-full sm:w-auto text-center" onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#0D0B61'; e.currentTarget.style.color = '#E4D329'; }} onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#E4D329'; e.currentTarget.style.color = '#0D0B61'; }}>Book a Repair</a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button id="mobile-menu-btn" className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block w-6 h-0.5 bg-[#111111] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#111111] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#111111] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-[#f5f5f5] border-t border-[#e0e0e0] ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="block px-6 py-4 text-[#111111] uppercase tracking-widest text-sm font-medium border-b border-[#e0e0e0] hover:text-[#E4D329] hover:bg-[#f5f5f5] transition-colors duration-200" onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="block px-6 py-4 bg-[#E4D329] text-white uppercase tracking-widest text-sm font-semibold text-center hover:bg-[#dd3300] transition-colors" onClick={() => setMenuOpen(false)}>
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden gear-pattern" style={{ position: 'relative', backgroundImage: `linear-gradient(to bottom, rgba(10,20,40,0.72) 0%, rgba(10,20,40,0.60) 100%), url('https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1600&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      
      {/* Dark overlay */}
      

      {/* Animated background accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#E4D329]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#478B8D]/5 blur-3xl pointer-events-none" />

      {/* Vertical accent line */}
      <div className="absolute left-8 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-[#E4D329] to-transparent hidden lg:block" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Pre-headline label */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-[#478B8D]" />
          <span className="section-label">South Side · Chicago · Est. 2009</span>
          <div className="h-px w-12 bg-[#478B8D]" />
        </div>

        {/* Main headline */}
        <h1 className="hero-title text-white mb-6">
          Chicago's Neighborhood<br />
          <span className="text-[#478B8D]">Bike Shop.</span>
        </h1>

        {/* Subtext */}
        <p className="text-[#cccccc] text-lg md:text-xl max-w-2xl mx-auto mb-10 font-inter leading-relaxed">
          Full-service repairs, custom builds, and community on the South Side since 2009.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a id="hero-services-btn" href="#services" className="bg-[#E4D329] text-white px-8 py-4 font-display font-bold text-lg uppercase tracking-widest w-full sm:w-auto text-center" onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#0D0B61'; e.currentTarget.style.color = '#E4D329'; }} onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#E4D329'; e.currentTarget.style.color = '#0D0B61'; }}>Our Services</a>
          <a id="hero-find-us-btn" href="#contact" className="border border-white text-white px-8 py-4 font-display font-bold text-lg uppercase tracking-widest hover:bg-white hover:text-[#111111] transition-all duration-200 hover:translate-y-[-2px] w-full sm:w-auto text-center">
            Find Us
          </a>
        </div>

        {/* Scroll indicator */}

      </div>
      <div style={{
        position: 'absolute',
        bottom: '28px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px'
      }}>
        <span style={{fontSize: '10px', letterSpacing: '3px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Barlow Condensed, sans-serif'}}>SCROLL</span>
        <div style={{width: '1px', height: '36px', background: 'rgba(255,255,255,0.3)'}}></div>
      </div>
    </section>
  )
}

/* =====================================================
   ABOUT
   ===================================================== */
function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — Pull quote */}
          <div>
            <div className="bg-[#478B8D] h-px w-12" />
            <span className="section-label block mb-4">About the Shop</span>
            <blockquote className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-[#111111] leading-tight">
              "The best flat-fixers on the South Side. Period."
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="text-5xl text-[#478B8D]">❄</div>
              <div>
                <div className="font-display font-bold text-xl text-[#111111] uppercase tracking-wide">Owen Lloyd</div>
                <div className="text-[#555555] text-sm">Owner · Blue City Cycles</div>
              </div>
            </div>
          </div>

          {/* Right — Body copy */}
          <div className="border-l border-[#e0e0e0] pl-12">
            <p className="text-[#333333] text-lg leading-relaxed mb-6">
              We're a full-service shop on the South Side of Chicago, selling Masi, Haro, Del Sol,
              Linus, and other special order makes and models. Owned by Owen Lloyd since 2009, we've
              got a crew of the best flat-fixers and friendliest mechanics in the city.
            </p>
            <p className="text-[#555555] text-lg leading-relaxed mb-8">
              We also have a shop cat named Vanya. Come bring us your broken stuff.
            </p>

            {/* Brand tags */}
            <div className="flex flex-wrap gap-3">
              {['Masi', 'Haro', 'Del Sol', 'Linus', 'Special Orders'].map((brand) => (
                <span key={brand} className="border border-[#e0e0e0] text-[#555555] text-sm px-4 py-1.5 uppercase tracking-widest font-inter hover:border-[#478B8D] hover:text-[#111111] transition-colors duration-200">
                  {brand}
                </span>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-[#e0e0e0]">
              {[
                { num: '15+', label: 'Years Open' },
                { num: '1', label: 'Shop Cat' },
                { num: '∞', label: 'Good Vibes' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display font-bold text-3xl text-[#E4D329]">{stat.num}</div>
                  <div className="text-[#555555] text-xs tracking-widest uppercase mt-1">{stat.label}</div>
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
    <section id="services" className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <div className="bg-[#478B8D] h-px w-12" />
          <span className="section-label block mb-3">What We Do</span>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-[#111111] uppercase">Services & Pricing</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-10">
          {SERVICES.map((service) => (
            <div key={service.name} className="service-card bg-white border border-[#e0e0e0] border-l-4 border-[#478B8D] p-6 flex items-center justify-between group cursor-default">
              <div className="flex items-center gap-4">
                <span className="text-2xl">{service.icon}</span>
                <div>
                  <div className="font-display font-bold text-xl text-[#111111] uppercase tracking-wide group-hover:text-[#478B8D] transition-colors duration-200">
                    {service.name}
                  </div>
                  {service.subtitle && (
                    <div className="text-[#555555] text-xs mt-0.5">
                      {service.subtitle}
                    </div>
                  )}
                </div>
              </div>
              <div className="text-right">
                <span className="font-display font-bold text-xl text-[#E4D329] whitespace-nowrap">
                  {service.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Banner */}
        <div className="bg-[#E4D329] px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
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
  { title: 'How to Fix a Flat Tire', desc: 'The #1 skill every cyclist needs. We walk you through patching and tube replacement.', id: 'diy-flat' },
  { title: 'How to Wrap Handlebars', desc: 'Give your bike a fresh feel with new bar tape. Step-by-step from start to finish.', id: 'diy-bars' },
  { title: 'How to Wash a Bike', desc: 'Keep your drivetrain running smooth with a proper cleaning routine.', id: 'diy-wash' },
]

function DiyCard({ video }) {
  const THUMBNAILS = {
    'diy-flat': 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop',
    'diy-bars': 'https://images.unsplash.com/photo-1505705694340-019e1e335916?w=600&auto=format&fit=crop',
    'diy-wash': 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&auto=format&fit=crop'
  };
  const VIDEO_URLS = {
    'diy-flat': 'https://www.youtube.com/watch?v=1QBbFuNcHBo',
    'diy-bars': 'https://www.youtube.com/watch?v=HBnAkTOojBo',
    'diy-wash': 'https://www.youtube.com/watch?v=IQ6CPpgAVKM'
  };
  const thumbnail = THUMBNAILS[video.id] || '';
  const videoUrl = VIDEO_URLS[video.id] || '#';

  return (
    <div id={video.id} className="diy-card bg-white p-0 overflow-hidden cursor-pointer group">
      {/* Thumbnail */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', cursor: 'pointer' }}>
        <img src={thumbnail} alt="Video thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,11,97,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="play-btn relative z-10 w-16 h-16 rounded-full bg-[#E4D329] flex items-center justify-center group-hover:bg-[#dd3300]">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        <h3 className="font-display font-bold text-xl uppercase text-white tracking-wide mb-2 group-hover:text-[#478B8D] transition-colors duration-200">
          {video.title}
        </h3>
        <p className="text-[#555555] text-sm leading-relaxed">
          {video.desc}
        </p>
        <div className="mt-4 flex items-center gap-2 text-[#E4D329] text-sm font-semibold uppercase tracking-widest">
          <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">WATCH NOW →</a>
        </div>
      </div>
    </div>
  );
}
// old component removed

function Diy() {
  return (
    <section id="diy" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <div className="bg-[#478B8D] h-px w-12" />
          <span className="section-label block mb-3">DIY Resources</span>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-[#111111] uppercase">Keep It Rolling</h2>
          <p className="text-[#333333] text-lg mt-4 max-w-xl font-inter">
            Keep your bike running smooth between visits. Here are a few videos we recommend.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DIY_VIDEOS.map((v) => (
            <DiyCard key={v.id} video={v} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-[#555555] text-sm">
            Still stuck? <a href="#contact" className="text-[#E4D329] hover:text-[#dd3300] underline underline-offset-4">Bring it in</a> — we'll get it sorted.
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
    <section id="contact" className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <div className="bg-[#478B8D] h-px w-12" />
          <span className="section-label block mb-3">Get In Touch</span>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-[#111111] uppercase">Find Us</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Hours + Info */}
          <div className="space-y-10 bg-[#f5f5f5] p-6">
            {/* Hours */}
            <div>
              <h3 className="font-display font-bold text-2xl text-[#111111] uppercase tracking-wide mb-5 flex items-center gap-3">
                <span className="text-[#E4D329]">⏰</span> Shop Hours
              </h3>
              <div className="space-y-3">
                {HOURS.map(({ day, hours }) => (
                  <div key={day} className="flex justify-between items-center py-4 border-b border-[#e0e0e0]">
                    <span className="text-[#555555] font-medium">{day}</span>
                    <span className="font-display font-bold text-xl text-[#E4D329]">{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div>
              <h3 className="font-display font-bold text-2xl text-[#111111] uppercase tracking-wide mb-5 flex items-center gap-3">
                <span className="text-[#E4D329]">📞</span> Contact Info
              </h3>
              <div className="space-y-4">
                <a href="tel:+13122253780" id="contact-phone" className="flex items-center gap-4 text-[#111111] hover:text-[#E4D329] transition-colors group">
                  <div className="w-10 h-10 bg-[#e8f0fb] flex items-center justify-center text-[#478B8D] group-hover:bg-[#d0e4f9] transition-all duration-200">
                    📞
                  </div>
                  <div>
                    <div className="text-xs text-[#555555] uppercase tracking-widest">Phone</div>
                    <div className="font-medium">312-225-3780</div>
                  </div>
                </a>
                <a href="mailto:bluecitycycles@gmail.com" id="contact-email" className="flex items-center gap-4 text-[#111111] hover:text-[#E4D329] transition-colors group">
                  <div className="w-10 h-10 bg-[#e8f0fb] flex items-center justify-center text-[#478B8D] group-hover:bg-[#d0e4f9] transition-all duration-200">
                    📧
                  </div>
                  <div>
                    <div className="text-xs text-[#555555] uppercase tracking-widest">Email</div>
                    <div className="font-medium">bluecitycycles@gmail.com</div>
                  </div>
                </a>
                <a href="https://maps.google.com/?q=3201+S+Halsted+St,+Chicago,+IL+60608" target="_blank" rel="noopener noreferrer" id="contact-address" className="flex items-center gap-4 text-[#111111] hover:text-[#E4D329] transition-colors group">
                  <div className="w-10 h-10 bg-[#e8f0fb] flex items-center justify-center text-[#478B8D] group-hover:bg-[#d0e4f9] transition-all duration-200">
                    📍
                  </div>
                  <div>
                    <div className="text-xs text-[#555555] uppercase tracking-widest">Address</div>
                    <div className="font-medium">3201 S Halsted St<br />Chicago, IL 60608</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="overflow-hidden border border-[#e0e0e0]">
              <iframe title="Blue City Cycles Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.123456789!2d-87.6467!3d41.8300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c6b8b8b8b8b%3A0x0!2s3201+S+Halsted+St%2C+Chicago%2C+IL+60608!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" width="100%" height="280" style={{ border: 0, filter: 'grayscale(30%) contrast(1.1)' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="bg-white border border-[#e0e0e0] p-8">
            <h3 className="font-display font-bold text-2xl text-[#111111] uppercase mb-6">Send a Message</h3>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 bg-[#E4D329]/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#E4D329]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h4 className="font-display font-bold text-2xl text-[#111111] uppercase mb-3">Thanks!</h4>
                <p className="text-[#555555] text-base">
                  We'll be in touch soon. In the meantime, feel free to call us at <a href="tel:+13122253780" className="text-[#E4D329]">312-225-3780</a>.
                </p>
                <button onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', subject: '', message: '' }) }} className="mt-8 text-[#555555] text-sm underline hover:text-[#111111] transition-colors">
                  Send another message
                </button>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-[#111111] text-xs uppercase tracking-widest mb-2">Name *</label>
                    <input id="name" type="text" name="name" value={formState.name} onChange={handleChange} required placeholder="Your name" className="w-full px-4 py-3 text-sm bg-[#f9f9f9] border border-[#cccccc] text-[#111111]" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[#111111] text-xs uppercase tracking-widest mb-2">Email *</label>
                    <input id="email" type="email" name="email" value={formState.email} onChange={handleChange} required placeholder="you@email.com" className="w-full px-4 py-3 text-sm bg-[#f9f9f9] border border-[#cccccc] text-[#111111]" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-[#111111] text-xs uppercase tracking-widest mb-2">Subject</label>
                  <input id="subject" type="text" name="subject" value={formState.subject} onChange={handleChange} placeholder="e.g. Tune-up inquiry, flat repair..." className="w-full px-4 py-3 text-sm bg-[#f9f9f9] border border-[#cccccc] text-[#111111]" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[#111111] text-xs uppercase tracking-widest mb-2">Message *</label>
                  <textarea id="message" name="message" value={formState.message} onChange={handleChange} required rows={6} placeholder="Tell us about your bike and what you need..." className="w-full px-4 py-3 text-sm bg-[#f9f9f9] border border-[#cccccc] text-[#111111] resize-none" />
                </div>
                <button id="submit-btn" type="submit" className="w-full bg-[#E4D329] text-[#0D0B61] py-4 font-display font-bold text-lg uppercase tracking-widest transition-all duration-200" onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#0D0B61'; e.currentTarget.style.color = '#E4D329'; }} onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#E4D329'; e.currentTarget.style.color = '#0D0B61'; }}>
                  Send Message
                </button>
                <p className="text-[#555555] text-xs text-center">Or call us directly at <a href="tel:+13122253780" className="text-[#E4D329]">312-225-3780</a></p>
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
    <footer className="bg-[#1a1a1a] border-t border-[#e0e0e0] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-[#478B8D] text-3xl">❄</span>
            <span className="font-display font-bold text-2xl uppercase tracking-wide text-white">Blue City Cycles</span>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-widest">
              {['Services', 'About', 'DIY', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-bcc-muted hover:text-bcc-red transition-colors duration-200">
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
              <a href="mailto:bluecitycycles@gmail.com" className="hover:text-bcc-red transition-colors">bluecitycycles@gmail.com</a>
            </p>
            <p className="text-bcc-muted text-sm">© 2025 Blue City Cycles · All rights reserved.</p>
            <p className="text-[#555] text-xs tracking-widest uppercase mt-2">Proudly independent since 2009</p>
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
    <div className="bg-[#f5f5f5] min-h-screen">
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
