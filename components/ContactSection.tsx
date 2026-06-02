'use client'
import { useState } from 'react'
import { COMPANIES } from '@/lib/companies'
import { CONTACT_SECTION_CONTENT } from '@/lib/sitedata'

const QUICK_REACH = [
  { label: 'Call Us', value: '+91 97108 79879', href: 'tel:+919710879879', icon: 'PH' },
  { label: 'Email Us', value: 'sales.ptcvirar@gmail.com', href: 'mailto:sales.ptcvirar@gmail.com', icon: 'EM' },
  { label: 'Visit Us', value: 'Virar East, Maharashtra', href: 'https://maps.google.com/?q=Virar+East+Maharashtra', icon: 'AD' },
  { label: 'WhatsApp', value: 'Message Us Now', href: 'https://wa.me/919710879879', icon: 'WA' },
]

const ENQUIRY_TOPICS = [
  {
    title: 'Chemical Product Enquiries',
    desc: 'Ask about availability, pricing, and specifications for solvents, acids, and specialty products.',
  },
  {
    title: 'Freight and Logistics Quotes',
    desc: 'Get competitive pricing for road, air, and sea freight movements.',
  },
  {
    title: 'Import and Export Services',
    desc: 'Connect for international shipment planning and documentation support.',
  },
  {
    title: 'Bulk Orders and Wholesale',
    desc: 'Discuss large-volume requirements with dedicated account support.',
  },
  {
    title: 'Distribution Partnerships',
    desc: 'Explore collaboration opportunities across product and logistics networks.',
  },
  {
    title: 'Custom Product Requirements',
    desc: 'Share your custom or niche requirements for tailored support.',
  },
]

const HOURS = [
  'Mon - Sat: 9:00 AM - 6:30 PM',
  'Sunday: Closed',
  'Response Rate: 91% within 24 hrs',
  'WhatsApp: Available on +91 97108 79879',
]

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    e.currentTarget.reset()
    setSubmitted(true)
  }

  return (
    <div id="contact">
      <section className="relative overflow-hidden bg-navy-950 pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 md:px-10">
        <div className="absolute inset-0 bg-hero-grid bg-grid opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.18em] sm:tracking-[0.25em] uppercase text-gold-400 mb-3">
            Reach Out
          </p>
          <div className="grid lg:grid-cols-2 gap-5 sm:gap-10 items-end">
            <h1 className="font-serif font-black text-white text-4xl sm:text-5xl md:text-7xl leading-tight">
              Let&apos;s <span className="text-gold-500">Connect</span> With You
            </h1>
            <p className="text-sm sm:text-base text-gray-300 border-l-2 border-gold-500 pl-4 sm:pl-5 leading-relaxed">
              Whether you need chemical supply, logistics support, or partnership discussion, our team is ready to respond quickly.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gold-500">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {QUICK_REACH.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="border-b sm:border-r-0 xl:border-b-0 xl:border-r border-white/30 last:border-r-0 p-4 sm:p-6 hover:bg-gold-600 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-white/20 text-white text-xs font-bold flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/80 font-semibold">{item.label}</p>
                  <p className="text-white font-bold text-sm leading-tight sm:text-base">{item.value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-24 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 sm:gap-14">
          <div>
            <p className="text-[10px] font-bold tracking-[0.18em] sm:tracking-[0.25em] uppercase text-gold-500 mb-3">
              Enquire Now
            </p>
            <h2 className="font-serif font-black text-navy-700 text-3xl sm:text-4xl md:text-5xl leading-tight mb-3">
              Send Us a <span className="text-gold-500">Message</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
              Fill the form and our team will get back to you within one business day.
            </p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <p className="text-green-700 font-bold">Message sent successfully.</p>
                <p className="text-green-700 text-sm mt-1">{CONTACT_SECTION_CONTENT.successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    required
                    placeholder="First Name"
                    name="firstName"
                    className="w-full bg-white border border-slate-300 rounded px-4 py-3 text-sm text-navy-700 placeholder:text-gray-400 outline-none focus:border-gold-500/60"
                  />
                  <input
                    required
                    placeholder="Last Name"
                    name="lastName"
                    className="w-full bg-white border border-slate-300 rounded px-4 py-3 text-sm text-navy-700 placeholder:text-gray-400 outline-none focus:border-gold-500/60"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    name="email"
                    className="w-full bg-white border border-slate-300 rounded px-4 py-3 text-sm text-navy-700 placeholder:text-gray-400 outline-none focus:border-gold-500/60"
                  />
                  <input
                    placeholder="Phone Number"
                    name="phone"
                    className="w-full bg-white border border-slate-300 rounded px-4 py-3 text-sm text-navy-700 placeholder:text-gray-400 outline-none focus:border-gold-500/60"
                  />
                </div>
                <input
                  placeholder="Company / Organisation"
                  name="company"
                  className="w-full bg-white border border-slate-300 rounded px-4 py-3 text-sm text-navy-700 placeholder:text-gray-400 outline-none focus:border-gold-500/60"
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <select
                    name="enquiry"
                    defaultValue=""
                    className="w-full bg-white border border-slate-300 rounded px-4 py-3 text-sm text-navy-700 outline-none focus:border-gold-500/60"
                  >
                    <option value="">Select enquiry type</option>
                    {COMPANIES.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                  <input
                    placeholder="Your City"
                    name="city"
                    className="w-full bg-white border border-slate-300 rounded px-4 py-3 text-sm text-navy-700 placeholder:text-gray-400 outline-none focus:border-gold-500/60"
                  />
                </div>
                <textarea
                  rows={5}
                  placeholder="Tell us about your requirement..."
                  name="message"
                  className="w-full bg-white border border-slate-300 rounded px-4 py-3 text-sm text-navy-700 placeholder:text-gray-400 outline-none focus:border-gold-500/60"
                />
                <label className="flex gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                  />
                  <span>I agree to be contacted regarding this enquiry.</span>
                </label>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-navy-700 hover:bg-gold-500 text-white text-xs font-bold tracking-widest uppercase px-8 py-3.5 sm:py-4 rounded transition-colors"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>

          <div className="space-y-5">
            <article className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-navy-800 border-b-2 border-gold-500 p-5">
                <h3 className="text-white font-bold text-lg">Registered Office</h3>
                <p className="text-xs uppercase tracking-wider text-gray-300 mt-1">PTC Group India</p>
              </div>
              <div className="p-5 space-y-3 text-sm text-gray-700">
                <p>302, Padmi Bai Tower, Opposite Virar Railway Subway, Virar East, Palghar.</p>
                <p>Phone: +91 97108 79879</p>
                <p>Email: sales.ptcvirar@gmail.com</p>
                <p>GST: 27AALCP9913F1Z2</p>
              </div>
            </article>

            <article className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-navy-800 border-b-2 border-gold-500 p-5">
                <h3 className="text-white font-bold text-lg">Key Contact</h3>
                <p className="text-xs uppercase tracking-wider text-gray-300 mt-1">Sales & Customer Relations</p>
              </div>
              <div className="p-5 text-sm text-gray-700 space-y-2">
                <p className="font-bold text-navy-700">Rohit Shetty</p>
                <p>Sales Manager</p>
                <p>Direct Line: +91 97108 79879</p>
                <p>Email: sales.ptcvirar@gmail.com</p>
              </div>
            </article>

          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-24 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.18em] sm:tracking-[0.25em] uppercase text-gold-500 mb-3">
            Our Companies
          </p>
          <h2 className="font-serif font-black text-navy-700 text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-10">
            Contact Our Subsidiaries
          </h2>
          <div className="grid md:grid-cols-2 gap-[2px] bg-slate-200 border border-slate-200">
            {COMPANIES.slice(0, 2).map((company) => (
              <a
                key={company.id}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 sm:p-8 hover:bg-slate-50 transition-colors"
              >
                <p className="text-xs uppercase tracking-[0.15em] text-gold-600 font-bold">{company.category}</p>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-700 mt-2">{company.name}</h3>
                <p className="text-sm text-gray-600 mt-3">{company.contactInfo || company.headquarters || 'India'}</p>
                <p className="mt-5 text-xs font-bold uppercase tracking-widest text-gold-600">Visit Website -&gt;</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-14 sm:py-24 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.18em] sm:tracking-[0.25em] uppercase text-gold-400 mb-3">
            What To Ask
          </p>
          <h2 className="font-serif font-black text-white text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-10">
            Common Enquiry Topics
          </h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {ENQUIRY_TOPICS.map((topic) => (
              <article key={topic.title} className="bg-white/5 border border-white/10 rounded-lg p-5 sm:p-6">
                <div className="w-8 h-0.5 bg-gold-500 mb-3" />
                <h3 className="text-white font-bold text-base sm:text-lg">{topic.title}</h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">{topic.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-200 py-8 sm:py-10 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-6">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-600">Business Hours</p>
          {HOURS.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-500" />
              <span className="text-xs sm:text-sm text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
