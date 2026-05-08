'use client'
import { useState } from 'react'
import { COMPANIES } from '@/lib/companies'

const CONTACT_ITEMS = [
  { icon: '📞', label: 'Phone', value: '+91 97108 79879' },
  { icon: '✉️', label: 'Email', value: 'sales.ptcgram@gmail.com' },
  { icon: '📍', label: 'Office', value: 'Virar(E), Palghar, Mumbai' },
  { icon: '🕐', label: 'Hours', value: 'Mon–Sat: 9AM – 6PM' },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '', contact: '', company: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Wire to Firebase / backend here
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', contact: '', company: '', message: '' })
  }

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-navy-950 to-navy-800 py-24 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] text-gold-500 uppercase mb-3">
              Get in Touch
            </p>
            <h2 className="font-serif font-black text-white text-4xl md:text-5xl leading-tight mb-5">
              Let&apos;s Work{' '}
              <span className="text-gold-500">Together</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed max-w-md mb-8">
              Whether you&apos;re looking for specialty chemicals, logistics solutions, packaging,
              or a business partnership — PTC Group India is ready to serve you.
            </p>

            <div className="flex flex-col gap-4">
              {CONTACT_ITEMS.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-gold-500/15 border border-gold-500/20 flex items-center justify-center text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[9px] text-gray-500 tracking-[0.15em] uppercase">
                      {item.label}
                    </div>
                    <div className="text-sm text-gray-200 font-semibold">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white/5 rounded-xl border border-gold-500/20 p-8">
            <h3 className="text-white text-xl font-extrabold mb-6">Quick Enquiry</h3>
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-3">✅</div>
                <p className="text-green-400 font-semibold">Message sent! We&apos;ll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/8 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-500 outline-none focus:border-gold-500/50 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Phone / Email"
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="bg-white/8 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-500 outline-none focus:border-gold-500/50 transition-colors"
                />
                <select
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-gray-400 text-sm outline-none focus:border-gold-500/50 transition-colors"
                >
                  <option value="">Select Company / Service</option>
                  {COMPANIES.filter((c) => !c.internal).map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
                <textarea
                  placeholder="Your message..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/8 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-500 outline-none focus:border-gold-500/50 transition-colors resize-vertical"
                />
                <button
                  type="submit"
                  className="bg-gold-500 hover:bg-gold-600 text-white font-bold text-xs tracking-widest uppercase py-4 rounded-lg transition-colors duration-200 mt-1"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
